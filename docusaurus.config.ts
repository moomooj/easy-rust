import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Easy rust",
  tagline: "study Rust the Easy Way",
  favicon: "img/favicon.ico",

  url: "https://moomooj.github.io",
  baseUrl: "/easy-rust/",

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
          editUrl: undefined,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          editUrl: undefined,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "rust-logo-black.svg",
    navbar: {
      title: "Easy Rust",
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/moomooj/easy-rust",
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
          title: "Rust Resources",
          items: [
            {
              label: "Official Rust Site",
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
              href: "https://github.com/moomooj/easy-rust",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} juyoungdev`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
