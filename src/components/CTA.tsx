import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => (
  <section id="contact" className="py-28 sm:py-36">
    <div className="container">
      <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden p-12 sm:p-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary opacity-90" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary-glow/40 blur-3xl" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />

        <div className="relative">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary-foreground mb-6">
            Ready to build your
            <br /> AI solution?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-10">
            Let's discuss how we can help you design and deploy intelligent systems
            tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="secondary" size="xl" className="group" asChild>
              <a href="mailto:hello@berrybrain.ai">
                <Mail size={18} className="mr-1" />
                hello@berrybrain.ai
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="mailto:hello@berrybrain.ai">Book a discovery call</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
