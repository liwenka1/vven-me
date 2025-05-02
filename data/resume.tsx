import { Github, Twitter, Mail, Home, Globe } from "lucide-react";

export const DATA = {
  name: "VVenKAI",
  initials: "VK",
  url: "https://liwenkai.fun",
  location: "北京",
  locationLink: "https://www.google.com/maps/place/beijing",
  description: "软件工程师，开源爱好者，喜欢打篮球和打电子游戏，是一名替身使者，替身名为「像素暴龙」（Pixel Rex）",
  summary: `## ⭐「像素暴龙」（Pixel Rex）⭐\n\n> *当代码化作獠牙，帧率即是法则！*  \n\n--- \n\n## 🔮 核心设定 \n**职业融合**：前端开发 × 电子游戏 × 篮球  \n**致敬角色**：JOJO7-Dio的「骇人恶兽」  \n**命名灵感**：电子乐队The Prodigy歌曲《Invaders Must Die》 + 数字像素化主题  \n\n--- \n\n## 🦖 替身面板 \n| 破坏力 | 速度 | 射程 | 持续力 | 精密性 | 成长性 |  \n|--------|------|------|--------|--------|--------|  \n| B      | A    | C    | B      | A      | B      |  \n\n--- \n\n## 🎨 视觉特征 \n- **造型**：半机械恐龙，体表覆盖二进制代码与像素块  \n- **动态细节**：  \n  🔹 眼睛：实时刷新的加载动画  \n  🔹 双手：可变形为键盘/游戏手柄  \n  🔹 尾巴：鼠标指针形态  \n\n--- \n\n## 💥 核心能力 \n### 代码重构（Code Override） \n- 将物体转化为可编辑的\`HTML/CSS/JS模块\`  \n- 示例：地面→\`<div>\`陷阱 / 钢筋→\`for循环\`链锯  \n\n### 游戏化领域（Debug Zone） \n- 20米范围内强制规则：  \n  🔸 动作受帧率限制 → 高速移动触发画面撕裂  \n  🔸 攻击显示伤害数字 → 连击奖励提升属性  \n\n### 篮板协议（Rebound Protocol） \n- 投掷物100%命中 + 被拦截时触发弹射  \n\n--- \n\n## ⚔️ 战斗风格 \n**优势**：  \n✅ 中距离环境操控  \n✅ 规则系压制（尤其克制高速替身）  \n\n**弱点**：  \n❌ 无法直接代码化生物体  \n❌ 领域展开时本体易受偷袭 \n\n--- \n\n*"这不是BUG，是替身攻击！"*`,
  avatarUrl: "/me.png",
  skills: [
    // 前端核心
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Vue",
    "React",
    "Next.js",
    "Nuxt.js",

    // 前端工程化
    "Vite",
    "Webpack",

    // 后端相关
    "Node.js",
    "NestJS",
    "Prisma",
    "Nginx",

    // 部署与运维
    "Docker",
    "Vercel",

    // 版本控制
    "Git",
    "GitHub"
  ],
  navbar: [{ href: "/", icon: Home, label: "Home" }],
  contact: {
    email: "2020583117@qq.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/liwenka1",
        icon: Github,

        navbar: true
      },
      X: {
        name: "Twitter",
        url: "https://x.com/liwenka1",
        icon: Twitter,

        navbar: true
      },
      email: {
        name: "Send Email",
        url: "mailto:2020583117@qq.com",
        icon: Mail,

        navbar: false
      }
    }
  },
  education: [
    {
      school: "湖南城市学院",
      href: "https://www.hncu.edu.cn",
      degree: "本科",
      logoUrl: "/edu.jpg",
      start: "2017",
      end: "2021"
    }
  ],
  projects: [
    {
      title: "next-web-nav",
      href: "https://nav.liwenkai.fun",
      dates: "2024",
      active: true,
      description: "一个简单的导航网站",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Stripe", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://nav.liwenkai.fun",
          icon: <Globe className="size-3" />
        }
      ],
      image: "/next-web-nav.png"
    }
  ]
} as const;
