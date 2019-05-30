// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  pathPrefix: process.env.BUILD_PAGES ? '/vikfand-portfolio' : '',
  outDir: 'public',
  siteUrl: 'https://viktorfa.gitlab.io/vikfand-portfolio',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'projects/**/*.md',
        typeName: 'Project',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
      },
    },
  ],
};
