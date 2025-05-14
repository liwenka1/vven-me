"use client";

import { useEffect, useRef } from "react";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";
import { BlurFade } from "../magicui/blur-fade";
import { Music as MusicIcon } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const Music = () => {
  const playerRef = useRef<HTMLDivElement>(null);
  const apInstanceRef = useRef<typeof APlayer | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      apInstanceRef.current = new APlayer({
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
    }

    // Cleanup function to destroy APlayer instance on component unmount
    return () => {
      if (apInstanceRef.current) {
        apInstanceRef.current.destroy();
        apInstanceRef.current = null;
      }
    };
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <div className="relative">
      {/* 背景装饰 */}
      <div className="absolute -left-20 top-10 h-[200px] w-[200px] rounded-full bg-accent/5 blur-[80px]" aria-hidden="true" />
      
      <div className="relative">
        {/* 标题部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="mb-6 flex items-center">
            <div className="mr-3 flex size-10 items-center justify-center rounded-full bg-secondary/10">
              <MusicIcon className="size-5 text-secondary" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl my-0 flex items-center">音乐收藏</h2>
          </div>
        </BlurFade>
        
        {/* 内容部分 */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="rounded-xl bg-card/50 p-6 shadow-sm">
            <div id="aplayer" ref={playerRef} className="aplayer-wrap" />
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Music;
