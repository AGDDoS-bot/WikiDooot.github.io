import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://WikiDooot.github.io/",

  author: {
    name: "WikiDooot",
    url: "https://WikiDooot.github.io/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "WikiDooot/WikiDooot.github.io",

  docsBranch: "master",

  docsDir: "src",

  contributors: false,

  editLink: true,

  repoDisplay: false,

  // Navbar
  navbar: navbar,

  // Sidebar
  sidebar: sidebar,
  headerDepth: 3,

  footer: "Copyright &copy; 2022 WikiDooot",

  // displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // 在桌面模式下右侧展示标题列表
  toc: true,

  encrypt: {
    // admin: ["123456"], // 全局最高权限密码
    config: {
      "/posts/article/CreateNewWiki.md": ["1234558853fz"]
    }
  },
  // 返回顶部
  backToTop: 500, // 滚动500px后显示
  // 主题颜色-自定义
  themeColor: {
    blue: "#2196f3",
    orange: "#fb9b5f",
  },

  plugins: {
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "WikiDooot/WikiDooot.github.io",
      repoId: "R_kgDOHNOnqA",
      category: "Announcements",
      categoryId: "DIC_kwDOHNOnqM4COu9r",
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
    },

    mdEnhance: {
      // enableAll: true,
      // 启用下角标功能
      sub: true,
      // 启用上角标
      sup: true,
      codegroup: true,
      align: true,
      // 代码演示
      demo: true,
      tasklist: true,
      mark: true,
      footnote: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
    blog: false,
  },
});
