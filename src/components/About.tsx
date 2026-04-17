import { Check } from "lucide-react";

const reasons = [
  "End-to-end AI development — strategy through deployment",
  "Strong expertise in both AI and backend engineering",
  "Focus on production-ready, scalable systems",
  "Reliable delivery with clear, consistent communication",
  "Solutions tailored to real business needs",
];

const impacts = [
  { value: "↓ Costs", label: "Reduce operational costs through automation" },
  { value: "↑ Efficiency", label: "Improve productivity across your teams" },
  { value: "↑ Experience", label: "Enhance customer experience with AI" },
  { value: "Data-driven", label: "Enable smarter, data-driven decisions" },
];

const About = () => (
  <section id="about" className="py-28 sm:py-36 relative">
    <div className="container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">About us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6 leading-tight">
            AI systems that don't just work in theory — they{" "}
            <span className="text-gradient">perform in production.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            We are a team of AI engineers, backend developers and system architects
            focused on building intelligent, scalable software solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            Our mission is simple: deliver AI systems that are accurate, efficient and
            built for real-world scale. We combine deep expertise in Generative AI,
            Machine Learning and backend engineering to ship work that holds up under
            production load.
          </p>

          <ul className="space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <span className="mt-1 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-primary" />
                </span>
                <span className="text-muted-foreground">{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="grid sm:grid-cols-2 gap-4">
            {impacts.map((i) => (
              <div
                key={i.label}
                className="p-6 rounded-3xl glass hover:border-primary/40 transition-all duration-500"
              >
                <div className="font-display text-2xl font-semibold text-gradient mb-2">
                  {i.value}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{i.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
