import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Easy rust",
  tagline: "study Rust the Easy Way",
  favicon: "img/favicon.ico",

  url: "https://your-docusaurus-site.example.com", //need to be github
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  organizationName: "moomooj",
  projectName: "easy-rust",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          //need to be github
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/rust-social-card.png",
    navbar: {
      title: "Easy Rust",
      logo: {
        alt: "Rust Logo",
        src: "img/rust-logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/your-username/easy-rust",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/docs/intro",
            },
            {
              label: "Ownership",
              to: "/docs/ownership",
            },
          ],
        },
        {
          title: "Links",
          items: [
            {
              label: "Rust Lang",
              href: "https://www.rust-lang.org/",
            },
            {
              label: "The Rust Book",
              href: "https://doc.rust-lang.org/book/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/your-username/easy-rust",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Easy Rust.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
