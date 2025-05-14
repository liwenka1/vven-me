"use client";

import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { DATA } from "@/data/resume";

export function Navbar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 mx-auto mb-5 flex h-full max-h-14 origin-bottom flex-col items-center justify-center">
      <TooltipProvider>
        <div className="glass-effect flex items-center justify-center rounded-full px-2 py-1.5 shadow-lg">
          {/* 主导航部分 */}
          <div className="flex items-center">
            {DATA.navbar.map((item) => (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      "text-foreground hover:bg-secondary/20 flex size-10 items-center justify-center rounded-full p-0 transition-all",
                      "after:bg-primary relative after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-50 focus:after:scale-x-50"
                    )}
                  >
                    <item.icon className="size-[18px] transition-transform duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs font-medium">
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <Separator orientation="vertical" className="mx-1.5 h-5 opacity-20" />

          {/* 社交媒体部分 */}
          <div className="flex items-center">
            {Object.entries(DATA.contact.social).map(([name, social]) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className="text-foreground hover:bg-accent/10 flex size-9 items-center justify-center rounded-full p-0 transition-all hover:scale-105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="size-[16px] transition-transform duration-200" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top" className="text-xs font-medium">
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>

          <Separator orientation="vertical" className="mx-1.5 h-5 opacity-20" />

          {/* 主题切换按钮 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="text-foreground hover:bg-secondary/20 flex size-9 items-center justify-center rounded-full p-0 transition-all">
                <ModeToggle />
              </div>
            </TooltipTrigger>
            <TooltipContent side="top" className="text-xs font-medium">
              <p>主题切换</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    </div>
  );
}
