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
            text: "查看Github仓库",
            icon: "edit",
            link: "https://github.com/WikiDooot/WikiDooot.github.io",
          },
          {
            text: "创建新Wiki",
            icon: "create",
            link: "posts/article/CreateNewWiki",
          },
          {
            text: "加入QQ群",
            icon: "group",
            link: "https://qm.qq.com/cgi-bin/qm/qr?k=zPTAxGT7nWv2RUlTgdr23taO---V-GBC&jump_from=webapi",
          },
        ],
      },
    ],
  },
]);
