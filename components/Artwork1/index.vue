<template lang="pug">
canvas#world(ref="canvas")
</template>
  
<script>
import ArtworkGL from "./js/ArtworkGL";

export default {
  name: 'artwork1',
  data () {
    // 基本的にはここにthree.jsのオブジェクトを追加しない。
    return {
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
     // canvas要素を渡す。
     this.artworkGL = new ArtworkGL({
       $canvas: this.$refs.canvas
     });
  },
  destroyed() {
  },
  methods: {
    // この中にthree.jsの処理をばりばり書かない。
  }
}
</script>
  
<style scoped>
#world {
  pointer-events: none;
  position: fixed;
  z-index: 0;
}
</style>