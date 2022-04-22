import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://",

  author: {
    name: "HackPig520",
    url: "https://xiaozhu2007.gitlab.io/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "WikiDooot/WikiDooot",

  docsDir: "master/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "Copyright &copy; 2022 WikiDooot",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    /*
    description: "一个开发者",
    medias: {
      Dingding: "https://example.com",
      Email: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Rss: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Zhihu: "https://example.com",

    },
    */
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using giscus
       */
      type: "giscus",
      repo: "xiaozhu2007/xiaozhu2007",
      repoId: "MDEwOlJlcG9zaXRvcnkzNDE1MDc4ODA=",
      category: "Announcements",
      categoryId: "DIC_kwDOFFr_KM4COei6",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
