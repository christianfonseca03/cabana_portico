import { Feedback } from "./components/Feedback";
import { Gallery } from "./components/Gallery";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <About />
      <Feedback/>
      <Contact/>
    </>
  );
}
