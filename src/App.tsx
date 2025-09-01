import { Feedback } from "./components/Feedback";
import { Gallery } from "./components/Gallery";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import NavBar from "./components/NavBar";
import { CallToAction } from "./components/CallToAction";

export function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Gallery />
      <CallToAction />
      <Feedback />
      <Contact />
    </>
  );
}
