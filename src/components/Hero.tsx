import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-ai.jpg";

const Hero = () => {
  return (
    <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1100px] max-h-[1100px] rounded-full bg-primary/15 blur-[160px] pointer-events-none" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-8">
            <Sparkles size={14} className="text-primary" />
            Introducing BerryBrain v2 — now with autonomous agents
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
            Intelligence that
            <br />
            <span className="text-gradient">thinks with you.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            BerryBrain AI builds advanced agents, copilots, and automation so modern
            teams ship faster, decide smarter, and scale effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="hero" size="xl" className="group">
              Start building free
              <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button variant="glass" size="xl">
              Book a demo
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            No credit card required · 14-day pro trial · SOC 2 compliant
          </p>
        </div>

        <div className="relative mt-20 max-w-5xl mx-auto animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-3xl blur-2xl opacity-60 animate-pulse-glow" />
          <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-elegant">
            <img
              src={heroImg}
              alt="Visualization of BerryBrain AI's neural reasoning network"
              width={1536}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
