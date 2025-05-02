"use client";

import { useEffect, useRef } from "react";
import "aplayer/dist/APlayer.min.css";
import APlayer from "aplayer";

import { BlurFade } from "../magicui/blur-fade";

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
    <section id="music">
      <div className="w-full gap-4 py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="bg-foreground text-background inline-block rounded-lg px-3 py-1 text-sm">Music</div>
            </div>
            <div id="aplayer" ref={playerRef} className="w-full" />
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

export default Music;
