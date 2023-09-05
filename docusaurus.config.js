// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tiffany Lea KB",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.tiffanylea.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tiffyzsmile", // Usually your GitHub org/user name.
  projectName: "docs.tiffanylea.com", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-code",
        path: "docs-code",
        routeBasePath: "docs-code",
        sidebarPath: require.resolve("./sidebars.js"),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-prep",
        path: "docs-prep",
        routeBasePath: "docs-prep",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        //        docs: {
        //          id: "prep",
        //          sidebarPath: require.resolve("./sidebars.js"),
        //          path: "prep",
        //          // Please change this to your repo.
        //          // Remove this to remove the "edit this page" links.
        //          // editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Tiffany Lea KB",
        //        logo: {
        //          alt: "Tiffany Lea",
        //          src: "img/logo.svg",
        //        },
        items: [
          {
            to: "/docs/", // ./docs-api/Intro.md
            label: "Docs",
            position: "right",
            activeBaseRegex: `/docs/`,
          },
          {
            to: "/docs-code/", // ./docs-api/Intro.md
            label: "Code",
            position: "right",
            activeBaseRegex: `/docs-code/`,
          },
          {
            to: "/docs-prep/", // ./docs-system/Intro.md
            label: "Interview Prep",
            position: "right",
            activeBaseRegex: `/docs-prep/`,
          },
          //          { to: "/blog", label: "Blog", position: "left" },
          //          {
          //            href: "https://github.com/facebook/docusaurus",
          //            label: "GitHub",
          //            position: "right",
          //          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "KB",
            items: [
              {
                label: "Docs",
                to: "/docs/",
              },
              {
                label: "Code",
                to: "/docs-code/",
              },
              {
                label: "Interview Prep",
                to: "/docs-prep/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              //              {
              //                label: "Stack Overflow",
              //                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              //              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/tiffyzsmile",
              },
              //              {
              //                label: "Twitter",
              //                href: "https://twitter.com/docusaurus",
              //              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Tiffany Lea",
                to: "https://www.tiffanylea.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tiffany Lea`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
