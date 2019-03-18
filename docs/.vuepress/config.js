const routes = ['guide', 'frameworks', 'cook-dev', 'cheat-sheet']

const createSidebar = () => {
  const sidebar = {}
  for (const route of routes) {
    Object.assign(sidebar, require('../' + route))
  }
  return sidebar
}

module.exports = {
  title: 'CookApps 기술 블로그',
  description: 'sandbox 팀에서 운영하는 기술 블로그입니다.',
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Frameworks', link: '/frameworks/' },
      { text: 'Cook Dev', link: '/cook-dev/' },
      { text: 'Cheat Sheet', link: '/cheat-sheet/' }
    ],
    sidebar: createSidebar(),
    // GitHub Edit Setting
    repo: 'cookappsdev/blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub'
  },
  dest: 'dist/docs',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ],
  ga: 'UA-136404297-1'
}
