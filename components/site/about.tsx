import Markdown from "react-markdown";
import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";
import { User } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const About = () => {
  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div
        className="bg-secondary/5 absolute top-10 -right-20 h-[200px] w-[200px] rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="bg-primary/10 mr-3 flex size-10 items-center justify-center rounded-full">
              <User className="text-primary size-5" aria-hidden="true" />
            </div>
            <h2 className="my-0 flex items-center text-2xl font-bold tracking-tight sm:text-3xl">关于我</h2>
          </div>
        </BlurFade>

        {/* 内容部分 */}
        <BlurFade
          delay={BLUR_FADE_DELAY * 3}
          className="prose dark:prose-invert bg-card/50 max-w-full rounded-xl p-6 text-base leading-relaxed text-pretty shadow-sm"
        >
          <Markdown>{DATA.summary}</Markdown>
        </BlurFade>
      </div>
    </div>
  );
};

export default About;
