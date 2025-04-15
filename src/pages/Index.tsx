import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import ProductLines from "../components/ProductLines";
import Services from "../components/Services";
import HowWeWork from "../components/HowWeWork";
import Contact from "../components/Contact";
import LastCTA from "../components/LastCTA";
import Footer from "../components/Footer";
import ProgressBar from "../components/ProgressBar";

const Index = () => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = 
          rect.top <= window.innerHeight * 0.85 && 
          rect.bottom >= 0;
        
        if (isInView) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => {
      window.removeEventListener("scroll", animateOnScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <ProgressBar />
      <Header />
      <Hero />
      <About />
      <WhyChooseUs />
      <ProductLines />
      <Services />
      <HowWeWork />
      <Contact />
      <LastCTA />
      <Footer />
    </div>
  );
};

export default Index;
