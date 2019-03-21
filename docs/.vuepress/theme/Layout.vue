<template>
  <Layout ref="layout">
    <Disqus slot="page-bottom" class="content"/>
  </Layout>
</template>

<script>
import Layout from '@default-theme/Layout.vue'
import Disqus from '../components/Disqus'

export default {
  components: {
    Layout,
    Disqus
  }
}
</script>
