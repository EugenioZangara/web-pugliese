import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filosofia from "../components/Filosofia";
import Procedimientos from "../components/Procedimientos";
import Resultados from "../components/Resultados";
import Testimonios from "../components/Testimonios";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Filosofia />
      <Procedimientos />
      <Resultados />
      <Testimonios />
      <CTA />
      <Footer />
    </>
  );
}