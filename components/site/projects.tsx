import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";
import { FolderKanban } from "lucide-react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

const Projects = () => {
  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div
        className="bg-primary/5 absolute bottom-10 -left-20 h-[300px] w-[300px] rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="bg-accent/5 absolute top-40 -right-10 h-[200px] w-[200px] rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="bg-primary/10 mr-3 flex size-10 items-center justify-center rounded-full">
              <FolderKanban className="text-primary size-5" aria-hidden="true" />
            </div>
            <h2 className="my-0 flex items-center text-2xl font-bold tracking-tight sm:text-3xl">项目作品</h2>
          </div>
        </BlurFade>

        {/* 标题描述 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="mb-8">
          <p className="text-muted-foreground text-base/relaxed">
            我参与开发了各种项目，从简单的网站到复杂的Web应用。以下是我最喜欢的一些作品。
          </p>
        </BlurFade>

        {/* 项目卡片网格 */}
        <div className="content-grid">
          {DATA.projects.map((project, id) => (
            <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
              <div className="project-card">
                <div className="project-card__image">
                  {project.image && (
                    <Image src={project.image} alt={project.title} width={500} height={300} className="object-cover" />
                  )}
                </div>
                <div className="project-card__content">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground mb-3 text-sm">{project.description}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary/20 text-secondary-foreground inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.href && (
                  <a
                    href={project.href}
                    className="absolute inset-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`查看项目 ${project.title}`}
                  />
                )}
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
