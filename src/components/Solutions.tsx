import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const solutions = [
  {
    tag: "For product teams",
    title: "Build copilots your users actually love.",
    points: [
      "Streaming chat with custom UI components",
      "Memory & personalization out of the box",
      "Evaluations and A/B testing built in",
    ],
  },
  {
    tag: "For operations",
    title: "Automate the work that drains your team.",
    points: [
      "Document understanding at human accuracy",
      "Connect to 200+ business apps",
      "Approval flows and audit trails",
    ],
  },
];

const Solutions = () => (
  <section id="solutions" className="py-28 sm:py-36 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Solutions</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Built for the teams <span className="text-gradient">shaping tomorrow.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="relative p-10 rounded-3xl glass overflow-hidden group"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition-colors duration-700" />
            <div className="relative">
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-primary mb-4">
                {s.tag}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-6 leading-snug">
                {s.title}
              </h3>
              <ul className="space-y-3 mb-8">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                      <Check size={12} className="text-primary" />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <Button variant="glass" size="sm">Explore →</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solutions;
