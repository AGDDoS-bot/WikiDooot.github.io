import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  lang: "zh-CN",
  title: "WikiDooot :: 中国最奇怪的WIKI",
  description: "WikiDooot，是中国最奇怪的WIKI",

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
});
