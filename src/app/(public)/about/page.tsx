import About from "@/components/modules/about/about";
import Hero from "@/components/modules/about/hero";

function AboutPage() {
  return (
    <div className="container mx-auto flex flex-col">
      <Hero />
      <About />
    </div>
  );
}

export default AboutPage;
