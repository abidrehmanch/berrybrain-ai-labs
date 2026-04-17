const stats = [
  { value: "10B+", label: "Inferences served monthly" },
  { value: "<200ms", label: "Median response time" },
  { value: "99.99%", label: "Platform uptime SLA" },
  { value: "40+", label: "Supported model providers" },
];

const Stats = () => (
  <section className="py-20 border-y border-border/50">
    <div className="container">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient mb-2">
              {s.value}
            </div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
