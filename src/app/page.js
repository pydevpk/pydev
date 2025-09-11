import Navbar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ServicesSlider from "./components/ServicesSlider";
import TechStackSlider from "./components/TechStackSlider";
import ProcessScroller from "./components/ProcessSlider";
import TestimonialSlider from "./components/TestimonialSlider";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="border-bottom-main border-gray-300">
        <Navbar />
      </div>
      <div className="border-bottom-main border-gray-300 relative">
        <Header />
      </div>
      <div className="border-bottom-main border-gray-300">
        <Projects />
      </div>
      <div className="border-bottom-main border-gray-300">
        <ServicesSlider />
      </div>
      <div className="border-bottom-main border-gray-300">
        <About />
      </div>
      <div className="border-bottom-main border-gray-300">
        <TechStackSlider />
      </div>
      <div className="border-bottom-main border-gray-300">
        <ProcessScroller />
      </div>
      <div className="border-bottom-main border-gray-300">
        <TestimonialSlider />
      </div>
      <div className="border-bottom-main border-gray-300">
        <ContactForm />
      </div>
      
      <Footer />
    </>
  );
}