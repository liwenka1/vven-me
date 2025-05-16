"use client";

import Link from "next/link";
import { AtSign, Moon, Sun } from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";
import { useTheme } from "next-themes";

const BLUR_FADE_DELAY = 0.04;

const Contact = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div
        className="bg-primary/5 absolute top-20 -right-10 h-[180px] w-[180px] rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="bg-primary/10 mr-3 flex size-10 items-center justify-center rounded-full">
              <AtSign className="text-primary size-5" aria-hidden="true" />
            </div>
            <h2 className="my-0 flex items-center text-2xl font-bold tracking-tight sm:text-3xl">联系我</h2>
          </div>
        </BlurFade>

        {/* 内容部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="bg-card/50 rounded-xl border p-6 shadow-sm">
            <p className="text-muted-foreground mb-6 text-base">欢迎通过以下方式与我联系，我将尽快回复。</p>

            {/* 社交媒体链接 */}
            <div className="flex flex-col space-y-6 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="flex flex-wrap gap-3">
                <TooltipProvider>
                  {Object.entries(DATA.contact.social).map(([name, social]) => (
                    <Tooltip key={name}>
                      <TooltipTrigger asChild>
                        <Link
                          href={social.url}
                          aria-label={social.name}
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-105 hover:shadow-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="size-5" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="text-xs font-medium">
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}

                  {/* <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground inline-flex h-10 items-center justify-center gap-2 rounded-full px-4 text-sm font-medium transition-all hover:shadow-md"
                  >
                    <MailIcon className="size-4" />
                    {DATA.contact.email}
                  </Link> */}
                </TooltipProvider>
              </div>

              {/* 主题切换 */}
              <div className="flex items-center">
                <Separator orientation="vertical" className="mx-2 hidden h-6 opacity-20 sm:block" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-secondary-foreground flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      >
                        <Sun className="size-4 dark:hidden" />
                        <Moon className="hidden size-4 dark:block" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="text-xs font-medium">
                      <p>切换主题</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Contact;
