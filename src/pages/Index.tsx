import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Services";
import ProofOfValue from "@/components/ProofOfValue";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Assessment from "@/components/Assessment";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/i18n/LanguageContext";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Hero />
          <LogoCloud />
          <Services />
          <ProofOfValue />
          <Process />
          <Industries />
          <About />
          <Stats />
          <Assessment />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
