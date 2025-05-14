"use client";

import dynamic from "next/dynamic";

// 动态导入 Music 组件，禁用 SSR
const Music = dynamic(() => import("./music"), {
  ssr: false,
  loading: () => (
    <div className="bg-card/50 flex h-[200px] items-center justify-center rounded-xl p-6 shadow-sm">
      <p className="text-muted-foreground">音乐播放器加载中...</p>
    </div>
  )
});

const MusicWrapper = () => {
  return <Music />;
};

export default MusicWrapper;
