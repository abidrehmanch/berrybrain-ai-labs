import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Brain3D from "./Brain3D";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden bg-hero">
      <div className="absolute inset-0 pointer-events-none opacity-70">
        <Brain3D />
      </div>
      <div className="absolute inset-0 bg-background/50 pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />

      <div className="container relative">
        <div className="min-h-[calc(100vh-11rem)] flex items-center justify-center">
        <div className="max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
            <Sparkles size={14} className="text-primary" />
            {t.hero.badge}
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            {t.hero.title1}
            <br />
            {t.hero.title2} <span className="text-gradient">{t.hero.titleAccent}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#assessment">
                {t.hero.ctaPrimary}
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#assessment">{t.hero.ctaSecondary}</a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">{t.hero.footer}</p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
