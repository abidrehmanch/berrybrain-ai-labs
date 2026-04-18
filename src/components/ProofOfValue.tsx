import { Check, ArrowRight, Rocket, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const ProofOfValue = () => {
  const { t } = useLanguage();
  const cards = [
    {
      key: "pov",
      icon: Rocket,
      tag: t.pov.povTag,
      title: t.pov.povTitle,
      desc: t.pov.povDesc,
      bullets: t.pov.povBullets,
      cta: t.pov.povCta,
      step: "1",
    },
    {
      key: "growth",
      icon: TrendingUp,
      tag: t.pov.growthTag,
      title: t.pov.growthTitle,
      desc: t.pov.growthDesc,
      bullets: t.pov.growthBullets,
      cta: t.pov.growthCta,
      step: "2",
      featured: true,
    },
  ];

  return (
    <section id="pov" className="py-28 sm:py-36 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">{t.pov.kicker}</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
            {t.pov.title1} <span className="text-gradient">{t.pov.titleAccent}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.pov.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {cards.map((c) => (
            <div
              key={c.key}
              className={`relative p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
                c.featured
                  ? "border-primary/50 bg-gradient-to-br from-primary/10 via-card/60 to-card/40 shadow-elegant"
                  : "border-border/60 bg-card/40 hover:border-primary/40"
              }`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-glow">
                  <c.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {c.tag}
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xs font-mono text-muted-foreground">0{c.step}</span>
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">{c.desc}</p>

              <ul className="space-y-3 mb-8">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={c.featured ? "hero" : "glass"}
                className="w-full group"
                asChild
              >
                <a href="#assessment">
                  {c.cta}
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfValue;
