import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const Impressum = () => {
  const { t } = useLanguage();
  const content = t.legal.impressum;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-36 pb-24">
        <section className="container max-w-4xl">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">BerryBrain AI</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{content.intro}</p>

          <div className="glass rounded-3xl p-6 sm:p-10 space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">{content.providerTitle}</h2>
              <div className="space-y-1 text-muted-foreground">
                {content.provider.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">{content.contactTitle}</h2>
              <div className="space-y-1 text-muted-foreground">
                {content.contact.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">{content.responsibleTitle}</h2>
              <p className="text-muted-foreground">{content.responsible}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">{content.disclaimerTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.disclaimer}</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold mb-4">{content.linksTitle}</h2>
              <p className="text-muted-foreground leading-relaxed">{content.links}</p>
            </section>

            <p className="border-t border-border/60 pt-6 text-sm text-muted-foreground leading-relaxed">
              {content.note}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;