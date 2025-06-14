import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Education from "@/components/site/education";
import Hero from "@/components/site/hero";
import MusicWrapper from "@/components/site/music-wrapper";
import Projects from "@/components/site/projects";
import Skills from "@/components/site/skills";

const Site = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 页面背景 */}
      <div className="bg-background bg-grid-pattern absolute inset-0" aria-hidden="true" />

      {/* Hero 部分 */}
      <Hero />

      {/* 内容区域 - 更紧凑布局 */}
      <div className="relative">
        {/* 顶部渐变效果 */}
        <div
          className="from-background absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b to-transparent"
          aria-hidden="true"
        />

        <div className="relative container py-8">
          <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
            {/* 关于部分 */}
            <section id="about" className="fade-in">
              <About />
            </section>

            {/* 教育经历 */}
            <section id="education" className="fade-in">
              <Education />
            </section>

            {/* 技能展示 */}
            <section id="skills" className="fade-in">
              <Skills />
            </section>

            {/* 项目展示 */}
            <section id="projects" className="fade-in">
              <Projects />
            </section>

            {/* 音乐部分 */}
            <section id="music" className="fade-in">
              <MusicWrapper />
            </section>

            {/* 联系信息 */}
            <section id="contact" className="fade-in pb-24">
              <Contact />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Site;
