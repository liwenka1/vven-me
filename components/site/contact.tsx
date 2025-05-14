"use client";

import Link from "next/link";
import { AtSign, MailIcon } from "lucide-react";
import { BlurFade } from "../magicui/blur-fade";
import { DATA } from "@/data/resume";
import { ModeToggle } from "../mode-toggle";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";

const BLUR_FADE_DELAY = 0.04;

const Contact = () => {
  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute -right-10 top-20 h-[180px] w-[180px] rounded-full bg-primary/5 blur-[80px]" aria-hidden="true" />
      
      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-primary/10">
              <AtSign className="size-5 text-primary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl my-0 flex items-center">联系我</h2>
          </div>
        </BlurFade>
        
        {/* 内容部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-xl bg-card/50 p-6 shadow-sm">
            <p className="mb-6 text-base text-muted-foreground">
              欢迎通过以下方式与我联系，我将尽快回复。
            </p>
            
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
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105 hover:shadow-md"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <social.icon className="size-5" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="font-medium text-xs">
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  
                  <Link href={`mailto:${DATA.contact.email}`} className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-secondary/10 px-4 text-sm font-medium text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground hover:shadow-md">
                    <MailIcon className="size-4" />
                    {DATA.contact.email}
                  </Link>
                </TooltipProvider>
              </div>
              
              {/* 主题切换 */}
              <div className="flex items-center">
                <Separator orientation="vertical" className="mx-2 h-6 hidden sm:block opacity-20" />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground">
                        <ModeToggle />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="font-medium text-xs">
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
