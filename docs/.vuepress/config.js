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
    sidebar: createSidebar()
  },
  dest: 'dist/docs',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }]
  ]
}
