import { DATA } from "@/data/resume";
import { BlurFade } from "../magicui/blur-fade";
import { Badge } from "../ui/badge";
import { Code2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Skills = () => {
  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute -right-10 top-20 h-[180px] w-[180px] rounded-full bg-primary/5 blur-[80px]" aria-hidden="true" />
      
      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-secondary/10">
              <Code2 className="size-5 text-secondary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl my-0 flex items-center">技能</h2>
          </div>
        </BlurFade>
        
        {/* 内容部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-xl bg-card/50 p-6 shadow-sm">
            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 4 + id * 0.03}>
                  <Badge 
                    className="rounded-full px-3 py-1 text-sm font-medium transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Skills;
