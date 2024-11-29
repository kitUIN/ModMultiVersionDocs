import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ModMultiVersion",
  description: "Minecraft模组多版本代码同步",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "快速开始", link: "/start" },
      { text: "功能说明", link: "/api/index" },
    ],

    sidebar: [
      {
        text: "快速开始",
        link: "/start",
      },
      {
        text: "功能说明",
        link: "/api/index",
        items: [
          { text: "项目结构规范", link: "/api/struct" },
          { text: "语法规范", link: "/api/gramma" },
          {
            text: "多版本文件同步",
            items: [
              { text: "手动同步", link: "/api/sync/hand" },
              { text: "双向同步", link: "/api/sync/twoway" },
              { text: "单向同步", link: "/api/sync/oneway" },
              { text: "黑名单", link: "/api/sync/black" },
              { text: "白名单", link: "/api/sync/white" },
              { text: "重命名文件", link: "/api/sync/rename" },
              { text: "别名替换", link: "/api/sync/alias" },
              { text: "同名文件快速跳转", link: "/api/sync/jump" },
            ],
          },
          { text: "自定义模组加载器", link: "/api/custom-loader" },
          { text: "简化仓库代码", link: "/api/simple" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/kitUIN/ModMultiVersion" },
    ],
  },
});
