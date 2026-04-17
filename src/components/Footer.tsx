import logo from "@/assets/berrybrain-logo.png";

const groups = [
  {
    title: "Services",
    links: ["Generative AI", "AI Agents", "Machine Learning", "Deep Learning", "Backend & APIs"],
  },
  {
    title: "Company",
    links: ["About", "Process", "Industries", "Contact"],
  },
  {
    title: "Resources",
    links: ["Case studies", "Blog", "Careers", "Documentation"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security"],
  },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-16">
    <div className="container">
      <div className="grid md:grid-cols-6 gap-10 mb-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="BerryBrain AI logo" width={32} height={32} className="w-8 h-8" loading="lazy" />
            <span className="font-display font-semibold text-lg">
              BerryBrain<span className="text-gradient"> AI</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            An AI engineering studio building production-ready Generative AI,
            Machine Learning and backend systems.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="font-medium text-sm mb-4">{g.title}</h4>
            <ul className="space-y-2.5">
              {g.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} BerryBrain AI. All rights reserved.</p>
        <p>From idea to deployment — engineered with care.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
