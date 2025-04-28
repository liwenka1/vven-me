import { Github, Twitter, Mail, Home } from "lucide-react";

export const DATA = {
  name: "VVenKai",
  initials: "VK",
  url: "https://liwenkai.fun",
  location: "北京",
  locationLink: "https://www.google.com/maps/place/beijing",
  description: "软件工程师，开源爱好者",
  summary: "这里是一些详细介绍",
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
    email: "hello@example.com",
    tel: "+123456789",
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
        url: "#",
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
  projects: []
} as const;
