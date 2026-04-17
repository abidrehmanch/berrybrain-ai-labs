const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "We understand your business goals, challenges and data landscape.",
  },
  {
    n: "02",
    title: "Solution Design",
    desc: "We architect a scalable, efficient AI system tailored to your needs.",
  },
  {
    n: "03",
    title: "Development",
    desc: "We build, train and rigorously test your solution end to end.",
  },
  {
    n: "04",
    title: "Deployment",
    desc: "We ship a production-ready system into your cloud environment.",
  },
  {
    n: "05",
    title: "Optimization",
    desc: "We continuously improve performance, reliability and efficiency.",
  },
];

const Process = () => (
  <section id="process" className="py-28 sm:py-36 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center mb-20">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Our Process</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          A structured approach to <span className="text-gradient">reliable AI delivery.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative p-7 rounded-3xl glass hover:border-primary/40 transition-all duration-500 group"
          >
            <div className="absolute top-6 right-6 font-display text-3xl font-semibold text-primary/30 group-hover:text-primary/60 transition-colors">
              {s.n}
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 mt-8">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/40 to-transparent" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
