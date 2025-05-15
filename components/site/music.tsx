"use client";

import { useEffect, useRef } from "react";
import { BlurFade } from "../magicui/blur-fade";
import { Music as MusicIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

// 自定义 APlayer 样式，主要处理日夜模式
const APLAYER_CUSTOM_STYLES = `
  /* 明亮模式 - 保持默认样式 */
  .aplayer {
    font-family: var(--font-geist-sans);
  }

  /* 暗色模式适配 */
  .dark .aplayer {
    background: var(--card) !important;
    color: var(--foreground);
  }

  .dark .aplayer .aplayer-info {
    background: var(--card) !important;
    border-top: none;
    border-bottom: none;
  }

  .dark .aplayer .aplayer-info .aplayer-music .aplayer-title {
    color: var(--foreground);
  }

  .dark .aplayer .aplayer-info .aplayer-music .aplayer-author {
    color: var(--muted-foreground);
  }

  .dark .aplayer .aplayer-info .aplayer-controller .aplayer-time {
    color: var(--muted-foreground);
  }

  .dark .aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar {
    background: var(--muted);
  }

  .dark .aplayer .aplayer-list {
    background: var(--card) !important;
    border: none;
  }

  .dark .aplayer .aplayer-list ol li {
    border-top: 1px solid var(--border);
  }

  .dark .aplayer .aplayer-list ol li:hover {
    background: var(--accent);
  }

  .dark .aplayer .aplayer-list ol li.aplayer-list-light {
    background: var(--accent);
  }

  .dark .aplayer .aplayer-list ol li .aplayer-list-title {
    color: var(--foreground);
  }

  .dark .aplayer .aplayer-list ol li .aplayer-list-author {
    color: var(--muted-foreground);
  }

  .dark .aplayer .aplayer-list ol li .aplayer-list-index {
    color: var(--muted-foreground);
  }
`;

const Music = () => {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 动态加载 APlayer CSS
    const loadCss = () => {
      // 加载原始 APlayer CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css";
      document.head.appendChild(link);

      // 添加自定义样式
      const style = document.createElement("style");
      style.textContent = APLAYER_CUSTOM_STYLES;
      document.head.appendChild(style);

      return [link, style];
    };

    // 动态导入 APlayer
    const loadAPlayer = async () => {
      try {
        // 加载 CSS
        const [cssLink, customStyle] = loadCss();

        // 导入 APlayer
        const APlayerModule = await import("aplayer");
        const APlayer = APlayerModule.default;

        if (playerRef.current) {
          const ap = new APlayer({
            container: playerRef.current,
            audio: [
              {
                name: "secret base ～君がくれたもの～ (10 years after Ver.)",
                artist: "本間芽衣子 (茅野愛衣), 安城鳴子 (戸松遥), 鶴見知利子 (早見沙織)",
                url: "/music/secret base 〜君がくれたもの〜 (10 years after Ver.) - 茅野愛衣、戸松遥、早見沙織.mp3",
                cover: "http://p1.music.126.net/5wwBs-qDLHEKobpR730H7A==/3311729023116773.jpg?param=300x300"
              },
              {
                name: "光るなら",
                artist: "Goose house",
                url: "/music/光るなら.mp3",
                cover: "http://p2.music.126.net/dxWuRgzjubpH6wbuhtttKQ==/109951165923610661.jpg?param=300x300"
              }
            ]
          });

          // 返回清理函数
          return () => {
            document.head.removeChild(cssLink);
            document.head.removeChild(customStyle);
            ap.destroy();
          };
        }
      } catch (error) {
        console.error("Failed to load APlayer:", error);
      }
    };

    let cleanup: (() => void) | undefined;
    loadAPlayer().then((cleanupFn) => {
      if (cleanupFn) cleanup = cleanupFn;
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div
        className="bg-accent/5 absolute top-10 -left-20 h-[200px] w-[200px] rounded-full blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="bg-secondary/10 mr-3 flex size-10 items-center justify-center rounded-full">
              <MusicIcon className="text-secondary size-5" aria-hidden="true" />
            </div>
            <h2 className="my-0 flex items-center text-2xl font-bold tracking-tight sm:text-3xl">音乐收藏</h2>
          </div>
        </BlurFade>

        {/* 内容部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="bg-card/50 rounded-xl p-6 shadow-sm">
            <div id="aplayer" ref={playerRef} className="aplayer-wrap" />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Music;
