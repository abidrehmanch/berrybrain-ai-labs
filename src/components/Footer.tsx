import logo from "@/assets/berrybrain-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navLinks = [
    { href: "#services", label: t.nav.services },
    { href: "#pov", label: t.nav.pov },
    { href: "#process", label: t.nav.process },
    { href: "#industries", label: t.nav.industries },
    { href: "#about", label: t.nav.about },
    { href: "#assessment", label: t.nav.assessment },
  ];

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-10">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="BerryBrain AI logo" width={32} height={32} className="w-8 h-8" loading="lazy" />
              <span className="font-display font-semibold text-lg">
                BerryBrain<span className="text-gradient"> AI</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div>
              <h4 className="font-medium text-sm mb-4">{t.footer.navTitle}</h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-sm mb-4">{t.footer.legalTitle}</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {t.footer.terms}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border/50 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} BerryBrain AI. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
