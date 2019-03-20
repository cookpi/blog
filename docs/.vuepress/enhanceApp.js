export default ({ router }) => {
  router.afterEach((to, from) => {
    if (from.path !== to.path) {
      // ignore frontmattter disqus reload
      if (to.path != '/') {
        if (typeof window !== 'undefined' && window.DISQUS) {
          setTimeout(() => window.DISQUS.reset({ reload: true }), 0)
        }
      }
    }
  })
}
