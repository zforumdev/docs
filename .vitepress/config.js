import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ZForum Docs",
  description: "Laravel and Vue powered forum software",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/docs/' },
          { text: 'Setup Guide', link: '/docs/setup-guide' },
          { text: 'Basic Configuration', link: '/docs/basic-configuration' }
        ]
      },
      {
        text: 'Configuration',
        items: [
          { text: 'Roles', link: '/docs/roles' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zforumdev/' }
    ],

    search: {
      provider: 'local'
    }
  }
})
