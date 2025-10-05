import About from "@/components/modules/about/about";
import Hero from "@/components/modules/about/hero";

export default function Home() {
  return (
    <div className="   flex flex-col">
      <Hero />
      <About />
    </div>
  );
}
