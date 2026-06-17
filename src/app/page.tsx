import Hero from "@/components/Hero";
import About from "@/components/About";
import Packages from "@/components/Packages";
import WhyChooseUs from "@/components/WhyChooseUs";
import Wildlife from "@/components/Wildlife";
import Gallery from "@/components/Gallery";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Packages />
      <WhyChooseUs />
      <Wildlife />
      <Gallery />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
}
