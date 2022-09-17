import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/index.js";
import * as sidebar from "./sidebar/index.js";

export default hopeTheme({
    // 基本配置
    hostname: "https://myyerrol.github.io/ysyx-website",
    author: {
        name: "myyerrol",
        url: "https://myyerrol.github.io",
    },
    locales: {
        "/": {
            navbar: navbar.en,
            sidebar: sidebar.en,
            footer: "Default footer",
            displayFooter: true
        },
        "/zh/": {
            navbar: navbar.zh,
            sidebar: sidebar.zh,
            footer: "默认页脚",
            displayFooter: true
        }
    },
    // 布局配置
    navbarIcon: true,
    navbarLayout: {
        left: ["Brand"],
        center: ["Links"],
        right: ["Language", "Repo", "Outlook", "Search"]
    },
    logo: "/logo.svg",
    logoDark: "/logo.svg",
    repo: "myyerrol/ysyx_website",
    repoDisplay: true,
    navbarAutoHide: "mobile",
    hideSiteNameonMobile: true,





  iconAssets: "iconfont",


  docsDir: "demo/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],


  plugins: {

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
