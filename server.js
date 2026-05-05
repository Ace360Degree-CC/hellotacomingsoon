import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT || 5000);
const isProduction = process.env.NODE_ENV === "production";

// Validate required environment variables early so startup fails fast with clear errors.
const requiredEnvVars = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "ADMIN_EMAIL"];
const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
  process.exit(1);
}

const smtpPort = Number(process.env.SMTP_PORT);
const smtpSecure = smtpPort === 465;

// Configure transporter for cPanel SMTP.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure, // true for 465, false for 587
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000,
  tls: {
    servername: process.env.SMTP_HOST,
  },
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Basic CORS support for browser form submissions.
app.use((req, res, next) => {
  const allowedOrigin = process.env.FRONTEND_ORIGIN || "*";
  res.setHeader("Access-Control-Allow-Origin", allowedOrigin);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }
  return next();
});

app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Contact API is running",
    health: "/health",
    contactEndpoint: "/api/contact",
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const toTitle = (key) =>
  key
    .replace(/[_-]/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());

const normalizePayload = (body) => {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(body).map(([key, value]) => {
      const normalized = typeof value === "string" ? value.trim() : String(value ?? "").trim();
      return [key, normalized];
    }),
  );
};

const buildLeadRows = (leadData) => {
  const rows = Object.entries(leadData)
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px;border:1px solid #e5e7eb;font-weight:600;background:#f9fafb;">${escapeHtml(label)}</td>
          <td style="padding:10px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  return rows || '<tr><td colspan="2" style="padding:10px;border:1px solid #e5e7eb;">No details provided</td></tr>';
};

const summarizeMailResult = (result) => ({
  accepted: result?.accepted || [],
  rejected: result?.rejected || [],
  response: result?.response || null,
  messageId: result?.messageId || null,
});

app.post("/api/contact", async (req, res, next) => {
  try {
    const payload = normalizePayload(req.body);
    const {
      name = "",
      email = "",
      phone = "",
      subject = "",
      service = "",
      company = "",
      message = "",
      source = "",
      ...extraFields
    } = payload;
    const isWaitlistSignup = source === "coming-soon-page" || service === "Launch Waitlist";

    // Core validation for a standard contact form.
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: {
          name: !name ? "Name is required" : undefined,
          email: !email ? "Email is required" : undefined,
          message: !message ? "Message is required" : undefined,
        },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: { email: "Please provide a valid email address" },
      });
    }

    const orderedLeadDetails = {
      Name: name,
      Email: email,
      Phone: phone,
      Company: company,
      Service: service,
      Subject: subject,
      Message: message,
      ...Object.fromEntries(
        Object.entries(extraFields)
          .filter(([key]) => !["name", "email", "phone", "company", "service", "subject", "message"].includes(key))
          .map(([key, value]) => [toTitle(key), value]),
      ),
    };

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:700px;">
        <h2 style="margin:0 0 12px;">New Website Contact Lead</h2>
        <p style="margin:0 0 16px;">A new inquiry was submitted from your website contact form.</p>
        <table style="border-collapse:collapse;width:100%;font-size:14px;">
          ${buildLeadRows(orderedLeadDetails)}
        </table>
      </div>
    `;

    const adminText = Object.entries(orderedLeadDetails)
      .filter(([, value]) => Boolean(value))
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    const userHtml = isWaitlistSignup
      ? `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:700px;">
          <h2 style="margin:0 0 12px;">You're on the HelloTax launch list</h2>
          <p>Hi,</p>
          <p>Thank you for subscribing. You're now registered for launch updates from HelloTax.</p>
          <p>We'll notify you as soon as we go live.</p>
          <p style="margin-top:18px;">Regards,<br />HelloTax Team</p>
        </div>
      `
      : `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;max-width:700px;">
          <h2 style="margin:0 0 12px;">Thanks for contacting HelloTax</h2>
          <p>Hi ${escapeHtml(name)},</p>
          <p>We have received your request and our team will get back to you shortly.</p>
          <p><strong>Your message:</strong></p>
          <blockquote style="margin:0;padding:12px 16px;border-left:4px solid #0f2257;background:#f9fafb;">
            ${escapeHtml(message)}
          </blockquote>
          <p style="margin-top:18px;">Regards,<br />HelloTax Team</p>
        </div>
      `;

    const userText = isWaitlistSignup
      ? "Hi,\n\nThank you for subscribing. You're now registered for HelloTax launch updates.\nWe'll notify you as soon as we go live.\n\nRegards,\nHelloTax Team"
      : `Hi ${name},\n\nWe have received your request and our team will contact you shortly.\n\nYour message: ${message}\n\nRegards,\nHelloTax Team`;

    const [adminSend, userSend] = await Promise.allSettled([
      transporter.sendMail({
        from: `"HelloTax Website" <${process.env.SMTP_USER}>`,
        to: process.env.ADMIN_EMAIL,
        replyTo: email,
        subject: subject || `New Contact Form Lead from ${name}`,
        html: adminHtml,
        text: adminText,
      }),
      transporter.sendMail({
        from: `"HelloTax Support" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: process.env.ADMIN_EMAIL,
        subject: isWaitlistSignup
          ? "You're subscribed to HelloTax launch updates"
          : "We received your request | HelloTax",
        html: userHtml,
        text: userText,
      }),
    ]);

    const adminOk = adminSend.status === "fulfilled";
    const userOk = userSend.status === "fulfilled";

    const delivery = {
      admin: adminOk
        ? summarizeMailResult(adminSend.value)
        : {
            error: {
              code: adminSend.reason?.code || null,
              message: adminSend.reason?.message || "Admin email failed",
            },
          },
      user: userOk
        ? summarizeMailResult(userSend.value)
        : {
            error: {
              code: userSend.reason?.code || null,
              message: userSend.reason?.message || "User email failed",
            },
          },
    };

    console.log("Contact delivery status:", {
      admin: delivery.admin,
      user: delivery.user,
      submitterEmail: email,
      source,
      isWaitlistSignup,
    });

    if (!adminOk || !userOk) {
      const failedTarget = !userOk ? "subscriber" : "admin";
      return res.status(502).json({
        success: false,
        message: `Email sent partially. Failed to send ${failedTarget} email.`,
        delivery,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Contact form submitted successfully. Admin and subscriber emails have been sent.",
      delivery,
    });
  } catch (error) {
    return next(error);
  }
});

// Centralized error handler.
app.use((err, _req, res, _next) => {
  const smtpCode = err?.code || err?.responseCode || null;
  const smtpMessage = err?.message || "Unknown SMTP error";

  console.error("Contact API error:", {
    code: smtpCode,
    message: smtpMessage,
    command: err?.command,
    response: err?.response,
  });

  const response = {
    success: false,
    message: "Failed to send email. Please check SMTP settings and try again.",
  };

  if (!isProduction) {
    response.debug = {
      code: smtpCode,
      message: smtpMessage,
      command: err?.command || null,
      response: err?.response || null,
    };
  }

  res.status(500).json(response);
});

const startServer = async () => {
  try {
    // Verify SMTP connection once on boot (helpful for setup/debugging).
    await transporter.verify();
    console.log("SMTP connection verified successfully.");
  } catch (error) {
    console.warn("SMTP verification failed at startup.");
    console.warn("SMTP debug:", {
      host: process.env.SMTP_HOST,
      port: smtpPort,
      secure: smtpSecure,
      code: error?.code || null,
      responseCode: error?.responseCode || null,
      message: error?.message || null,
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

startServer();
