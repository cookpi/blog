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
      { text: 'Cheat Sheet', link: '/cheat-sheet/' },
      { text: 'Tags', link: '/tags/' }
    ],
    sidebar: createSidebar(),
    // GitHub Edit Setting
    repo: 'cookpi/blog',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated'
  },
  dest: 'dist/docs',
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { name: 'naver-site-verification', content: '9f6fd9374b76e620a5d27ecde3ad0ce5ff285294' }],
    ['meta', { name: 'google-site-verification', content: 'mE3gNyo5dv_Uw5cyV0Z-aAuOyYphLiu5ejyVAWk-ujE' }]
  ],
  ga: 'UA-136404297-1',
  serviceWorker: true
}
