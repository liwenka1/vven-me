import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Education from "@/components/site/education";
import Hero from "@/components/site/hero";
import Skills from "@/components/site/skills";

const Site = () => {
  return (
    <main className="container flex min-h-[100dvh] flex-col space-y-10">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
};

export default Site;
