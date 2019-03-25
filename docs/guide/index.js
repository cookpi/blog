module.exports = {
  '/guide/': [
    '',
    'conventions/',
    'vscode/',
    'git/',
    'editorconfig/',
    'conventional-commits/',
    'monorepo/',
    'vuepress/',
    {
      collapsable: false,
      title: 'Unity',
      children: [
        '/guide/unity/',
        '/guide/unity/rest-api'
      ]
    }
  ]
}
