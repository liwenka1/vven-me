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
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++"
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
