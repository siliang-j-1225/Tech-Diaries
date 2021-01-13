const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Siliang\'s Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    search: true,
    searchMaxSuggestions: 10,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'All Posts',
        link: '/posts/'
      },
      {
        text: 'Azure',
        link: '/posts/azure/'
      },
      {
        text: 'Others',
        link: '/posts/others/'
      },
      {
        text: 'Github Repo',
        link: 'https://github.com/siliang-jiao/Tech-Diaries'
      }
    ],
    sidebar: {
      '/posts/azure/':[
        {
          title: 'Azure Learnings',
          collapsable: false,
          children: [
            '',
            '3.1-WhatIsAzureMLParallelRunStep'
          ]
        }
      ],
      '/posts/others/':[
        {
          title: 'Others',
          collapsable: false,
          children: [
            '',
            '1-WPFvsUWP',
            '2-ReleasePipelineOfSoliditySmartContract'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom'
  ]
}
