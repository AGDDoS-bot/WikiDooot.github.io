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

  editLink: true,

  repoDisplay: false,

  // Navbar
  navbar: navbar,

  // Sidebar
  sidebar: sidebar,

  footer: "Copyright &copy; 2022 WikiDooot",

  // displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  encrypt: {
    // admin: ["123456"],
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },
// 返回顶部
  backToTop: 500,
// 主题颜色-自定义
  themeColor: {
    blue: "#2196f3",
    green: "#3eaf7c",
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
