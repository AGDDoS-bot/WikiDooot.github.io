import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  // "/blog",
  { 
    text: "实用工具",
    icon: "creative",
    link: "/tools/"
  },
  {
    text: "管理",
    icon: "edit",
    prefix: "/",
    children: [
      {
        text: "后台",
        icon: "edit",
        children: [
          {
            text: "登录",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "加入QQ群",
            icon: "qq",
            link: "article/article6",
          },
        ],
      },
    ],
  },
]);
