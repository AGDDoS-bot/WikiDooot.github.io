import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "/",
  // "/blog",
  {
    text: "WIKI索引",
    icon: "creative",
    prefix: "/wiki/",
    link: "/wiki/",
    children: "structure",
  },

]);
