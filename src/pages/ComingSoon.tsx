import { useEffect, useState } from "react";
import { Mail, Clock, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const LAUNCH_DATE = new Date();
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 30);

const calc = () => {
  const diff = Math.max(0, LAUNCH_DATE.getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const ComingSoon = () => {
  const [time, setTime] = useState(calc());
  const [email, setEmail] = useState("");

  useEffect(() => {
    const t = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(t);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "You're on the list!", description: "We'll notify you the moment we launch." });
    setEmail("");
  };

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="min-h-screen bg-primary relative overflow-hidden flex flex-col">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-foreground/5 rounded-full blur-2xl" />

      {/* Header */}
      <header className="relative z-10 px-6 md:px-12 py-6">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-lg">H</span>
          </div>
          <span className="text-primary-foreground font-bold text-xl tracking-tight">HelloTax</span>
        </div>
      </header>

      {/* Main */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-3xl w-full text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/90 font-medium">Something great is brewing</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground tracking-tight mb-6 leading-tight">
            We're launching <span className="text-accent">soon</span>.
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            India's most founder-friendly platform for startup formation, compliance and tax advisory — built by CAs, designed for builders.
          </p>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-2xl mx-auto mb-12">
            {units.map((u) => (
              <div
                key={u.label}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 md:p-6"
              >
                <div className="text-3xl md:text-5xl font-bold text-primary-foreground tabular-nums">
                  {String(u.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-primary-foreground/60 uppercase tracking-wider mt-2">
                  {u.label}
                </div>
              </div>
            ))}
          </div>

          {/* Email signup */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 p-2 sm:p-2 sm:bg-primary-foreground/5 sm:backdrop-blur-sm sm:border sm:border-primary-foreground/10 rounded-2xl">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-primary-foreground/50" />
                <Input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-11 h-12 bg-primary-foreground/10 sm:bg-transparent border-primary-foreground/20 sm:border-0 text-primary-foreground placeholder:text-primary-foreground/50 focus-visible:ring-accent"
                />
              </div>
              <Button type="submit" className="h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
                Notify Me
                <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/50 mt-4 flex items-center justify-center gap-2">
              <Clock className="w-3 h-3" />
              Be the first to know when we go live
            </p>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-12 py-6 text-center">
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} HelloTax. Crafted with care in India.
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
