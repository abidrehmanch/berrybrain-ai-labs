import { Cloud, ShoppingBag, Banknote, HeartPulse, Truck } from "lucide-react";

const industries = [
  { icon: Cloud, name: "SaaS & Technology" },
  { icon: ShoppingBag, name: "E-commerce" },
  { icon: Banknote, name: "Finance & FinTech" },
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Truck, name: "Logistics & Operations" },
];

const Industries = () => (
  <section id="industries" className="py-28 sm:py-36">
    <div className="container">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Industries</p>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          We build AI for <span className="text-gradient">forward-thinking industries.</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
        {industries.map((i) => (
          <div
            key={i.name}
            className="group flex flex-col items-center text-center p-8 rounded-3xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 shadow-glow">
              <i.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <p className="font-medium text-sm">{i.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
