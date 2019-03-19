<template>
  <div id="disqus_thread" style="padding-top: 0px;"></div>
</template>

<script>
  export default {
    mounted() {
      var disqus_config = function () {
        this.page.url = window.location.origin;
        this.page.identifier = window.location.pathname;
      };
      (function() {
        var d = window.document, s = d.createElement('script');
        s.src = 'https://cookapps.disqus.com/embed.js';
        s.setAttribute('data-timestamp', + new Date());
        (d.head || d.body).appendChild(s);
      })();
    }
  }
</script>
