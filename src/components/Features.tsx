import { Brain, Zap, Shield, GitBranch, Workflow, LineChart } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Reasoning agents",
    desc: "Multi-step agents that plan, decide and execute across your tools — not just chat.",
  },
  {
    icon: Workflow,
    title: "Composable workflows",
    desc: "Drag, drop, and orchestrate complex automations with a visual builder backed by code.",
  },
  {
    icon: Zap,
    title: "Realtime inference",
    desc: "Sub-200ms responses powered by our distributed inference network across 14 regions.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    desc: "SOC 2, HIPAA, GDPR. Private deployments, encryption at rest, and zero data retention.",
  },
  {
    icon: GitBranch,
    title: "Model-agnostic",
    desc: "Bring your own models or pick from 40+ providers. Switch instantly, no lock-in.",
  },
  {
    icon: LineChart,
    title: "Observability built-in",
    desc: "Trace every reasoning step. Monitor cost, latency, and quality with one dashboard.",
  },
];

const Features = () => (
  <section id="features" className="py-28 sm:py-36 relative">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Platform</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          Everything you need to ship <span className="text-gradient">production AI.</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          From prototype to billions of requests — BerryBrain handles the hard parts so
          your team can focus on the experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative p-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
