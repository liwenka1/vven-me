import { DATA } from "@/data/resume";
import BlurFadeText from "../magicui/blur-fade-text";
import { BlurFade } from "../magicui/blur-fade";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { ChevronDown } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
    >
      {/* 背景装饰 - 灵感来自Apple设计 */}
      <div className="absolute inset-0 z-0">
        <div className="bg-primary/10 absolute -top-20 -left-20 h-[500px] w-[500px] rounded-full blur-[100px] filter" />
        <div className="bg-accent/10 absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full blur-[100px] filter" />
        <div className="bg-secondary/10 absolute top-1/4 left-1/3 h-[300px] w-[300px] rounded-full blur-[80px] filter" />
      </div>

      {/* 主内容区 */}
      <div className="relative z-10 container mx-auto flex min-h-screen flex-col items-center justify-center px-4 md:px-6">
        <div className="flex w-full max-w-5xl flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          {/* 左侧文字内容 */}
          <div className="flex flex-1 flex-col space-y-5 text-center md:max-w-2xl md:text-left">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              yOffset={10}
              text={`嗨，我是${DATA.name.split(" ")[0]} 👋`}
            />
            <BlurFadeText
              className="text-muted-foreground text-lg md:text-xl lg:text-2xl"
              delay={BLUR_FADE_DELAY * 2}
              text={DATA.description}
            />

            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="#about"
                  className="bg-primary text-primary-foreground focus-visible:ring-ring inline-flex h-12 items-center justify-center rounded-full px-8 text-base font-medium shadow-lg transition-all hover:scale-105 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  了解更多
                </a>
                <a
                  href="#contact"
                  className="border-border bg-background/80 text-foreground hover:bg-accent/10 focus-visible:ring-ring inline-flex h-12 items-center justify-center rounded-full border px-8 text-base font-medium backdrop-blur-sm transition-all hover:scale-105 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  联系我
                </a>
              </div>
            </BlurFade>
          </div>

          {/* 右侧头像 */}
          <div className="relative flex-shrink-0">
            <div className="from-primary/30 via-accent/30 to-secondary/30 absolute -inset-1 rounded-full bg-gradient-to-r opacity-80 blur-xl" />
            <BlurFade delay={BLUR_FADE_DELAY * 2}>
              <Avatar className="border-background relative size-40 border-2 shadow-2xl md:size-48 lg:size-56">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>

        {/* 向下滚动按钮 - 更大更明显，参考4oimage */}
        <BlurFade delay={BLUR_FADE_DELAY * 5} className="absolute bottom-8 animate-bounce">
          <a
            href="#about"
            className="group bg-background/80 hover:bg-background inline-flex size-12 items-center justify-center rounded-full border shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
            aria-label="向下滚动"
          >
            <ChevronDown className="text-muted-foreground size-6 transition-transform group-hover:translate-y-0.5" />
          </a>
        </BlurFade>
      </div>
    </section>
  );
};

export default Hero;
