import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Clients from "./components/Clients"; // Importado
import GamaCalendar from "./components/GamaCalendar";
import Portfolio from "./components/Portfolio";
import AIHighlight from "./components/AIHighlight.tsx"; // Importado
import About from "./components/About";
// import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { initPixel, trackEvent } from "./lib/meta-pixel";

function App() {
  useEffect(() => {
    initPixel();
    trackEvent("ViewContent"); // Rastreia visita à página inicial
  }, []);

  if (decodeURIComponent(window.location.pathname) === "/calendário/clínica-gama") {
    return <GamaCalendar />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Stats />
      <Clients /> {/* Adicionado logo após Stats para prova social imediata */}
      <Portfolio />
      <AIHighlight />{" "}
      {/* Adicionado antes do Sobre para destacar o diferencial */}
      <About />
      {/* <Testimonials /> */}
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
export default App;
