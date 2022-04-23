import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "WikiDooot :: 中国最奇怪的WIKI",
  description: "WikiDooot，中国最奇怪的WIKI",

  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "script",
      {
        href: "https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js",
      },
    ],
  ],

  themeConfig,

  plugins: [
    [
      "copyright2",
      {
        author: "WikiDooot",
        license: "MIT",
        hostname: "https://WikiDooot.github.io",
        triggerWords: 50,
        global: false,
      },
    ],
    [
      "sitemap2",
      {
        hostname: "https://WikiDooot.github.io",
      },
    ],
    [
      "vuepress-plugin-reading-time2",
      {
        // 配置选项
        wordPerMinute: 100,
      },
    ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: '搜索全站',
          },
          '/wiki/': {
            placeholder: '搜索Wiki',
          },
          '/posts/': {
            placeholder: '搜索',
          },
        },
      },
    ],
  ]
});
