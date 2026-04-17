import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <Process />
        <Industries />
        <About />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
