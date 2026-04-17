import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    period: "forever",
    desc: "Everything you need to explore and prototype.",
    features: ["1 workspace", "10K monthly requests", "Community support", "All core models"],
    cta: "Start free",
    variant: "glass" as const,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per seat / month",
    desc: "For growing teams shipping AI to production.",
    features: ["Unlimited workspaces", "1M monthly requests", "Priority support", "Custom integrations", "Evals & monitoring"],
    cta: "Start 14-day trial",
    variant: "hero" as const,
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored to scale",
    desc: "Advanced security, control, and dedicated support.",
    features: ["Single sign-on (SSO)", "Private deployment", "Dedicated infrastructure", "24/7 SLA", "Solution architects"],
    cta: "Talk to sales",
    variant: "glass" as const,
  },
];

const Pricing = () => (
  <section id="pricing" className="py-28 sm:py-36">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Pricing</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          Simple plans, <span className="text-gradient">built to scale.</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Start free. Upgrade when you're ready. No surprises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative p-8 rounded-3xl border transition-all duration-500 ${
              t.featured
                ? "border-primary/60 bg-card shadow-elegant scale-[1.02] md:scale-105"
                : "border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/30"
            }`}
          >
            {t.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground">
                Most popular
              </div>
            )}
            <h3 className="font-display text-xl font-semibold mb-2">{t.name}</h3>
            <p className="text-sm text-muted-foreground mb-6 min-h-[40px]">{t.desc}</p>
            <div className="mb-8">
              <span className="font-display text-5xl font-semibold">{t.price}</span>
              <span className="text-sm text-muted-foreground ml-2">{t.period}</span>
            </div>
            <Button variant={t.variant} className="w-full mb-8">{t.cta}</Button>
            <ul className="space-y-3">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check size={16} className="text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
