import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalSection {
  title: string;
  body: string;
}

interface LegalDocumentProps {
  title: string;
  intro: string;
  sections: LegalSection[];
}

const LegalDocument = ({ title, intro, sections }: LegalDocumentProps) => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <main className="pt-36 pb-24">
      <section className="container max-w-4xl">
        <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">BerryBrain AI</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight mb-6">{title}</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10">{intro}</p>

        <div className="glass rounded-3xl p-6 sm:p-10 space-y-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-display text-2xl font-semibold mb-4">{section.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{section.body}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default LegalDocument;