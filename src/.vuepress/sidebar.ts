import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "/",
  {
    text: "Wiki索引",
    icon: "creative",
    prefix: "/wiki/",
    link: "/wiki/",
    children: "structure",
  },
  {
    text: "学习",
    icon: "creative",
    prefix: "/posts/article/",
    link: "/posts/article/",
    children: "structure",
  },
]);
