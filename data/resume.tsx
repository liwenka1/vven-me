import { Github, Twitter, Mail, Home, Globe } from "lucide-react";

export const DATA = {
  name: "VVenKAI",
  initials: "VK",
  url: "https://liwenkai.fun",
  location: "北京",
  locationLink: "https://www.google.com/maps/place/beijing",
  description: "软件工程师 & 开源爱好者",
  summary: `
🛠️ 技术轨迹
- 主攻前端开发，深耕 React/Next.js + TypeScript 技术栈
- 持续迭代个人项目，追求极致的用户体验
- 用 Tailwind CSS 构建简洁 UI

🎮 生活志趣
- 周末篮球场常客 | 急停跳投专业户
- 追番清单永远比 TODO 列表长 | Steam库存+1爱好者

✨ 开源日常
- GitHub 累计收获 340+ stars
- ~~定期~~在博客写踩坑日记（更新时间：随缘）
`,
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
