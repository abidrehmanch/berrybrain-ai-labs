const stats = [
  { value: "15+", label: "AI projects delivered" },
  { value: "8+", label: "Industries served" },
  { value: "4–6 wk", label: "Typical Proof of Value" },
  { value: "24h", label: "Response time to enquiries" },
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
