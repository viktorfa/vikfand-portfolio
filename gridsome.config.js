const siteConfig = require("./siteConfig.json");

// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const config = {
  ...siteConfig,
  pathPrefix: process.env.BUILD_PAGES ? "/vikfand-portfolio" : "",
  outputDir: "public",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link",
      plugins: [
        // ...global plugins
      ]
    }
  },
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-142863239-1"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "Project",
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    { use: "gridsome-plugin-netlify-cms" },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }
  ]
};

module.exports = config;
