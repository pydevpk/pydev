import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import TechStack from "./components/TechStack";
import Approach from "./components/Approach";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Work />
        <About />
        <Capabilities />
        <TechStack />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
