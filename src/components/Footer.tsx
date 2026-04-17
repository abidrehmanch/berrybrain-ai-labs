import logo from "@/assets/berrybrain-logo.png";

const groups = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Docs", "Blog", "Guides", "API reference"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "DPA"],
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
            Intelligent systems for modern teams. Built with care in San Francisco & Berlin.
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
        <p>© {new Date().getFullYear()} BerryBrain AI, Inc. All rights reserved.</p>
        <p>Crafted with intelligence — and a little berry.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
