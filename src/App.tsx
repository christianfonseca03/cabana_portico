import { Feedback } from "./components/Feedback";
import { Gallery } from "./components/Gallery";
import { HeroSection } from "./components/HeroSection";
import { About } from "./components/About";

export function App() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <About />
      <Feedback/>
    </>
  );
}
