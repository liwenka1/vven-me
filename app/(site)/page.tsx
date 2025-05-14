import About from "@/components/site/about";
import Contact from "@/components/site/contact";
import Education from "@/components/site/education";
import Hero from "@/components/site/hero";
import Music from "@/components/site/music";
import Projects from "@/components/site/projects";
import Skills from "@/components/site/skills";

const Site = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 页面背景 */}
      <div className="absolute inset-0 bg-background bg-grid-pattern" aria-hidden="true" />
      
      {/* Hero 部分 */}
      <Hero />
      
      {/* 内容区域 - 更紧凑布局 */}
      <div className="relative">
        {/* 顶部渐变效果 */}
        <div 
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent z-10"
          aria-hidden="true" 
        />
        
        <div className="container relative py-8">
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
              <Music />
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
