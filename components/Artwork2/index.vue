<template lang="pug">
.content
  canvas#world(ref="canvas")
  video.video(src playsinline ref="video")
  .device-orien-modal.is-hidden(ref="modal")
    .device-orien-modal-inner
      p
        |このページでは端末の向きと方向を取得します。
        br
        |次に表示されるポップアップに従って「許可」を選択してください。
      button.device-orien-modal-button(ref="modal_button") OK
  .shutter-button(ref="shutter_button") 撮影
  
</template>
  
<script>
import ArtworkGL from "./js/ArtworkGL";

export default {
  name: 'artwork2',
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
        $canvas: this.$refs.canvas,
        $modal: this.$refs.modal,
        $modal_button: this.$refs.modal_button,
        $video: this.$refs.video,
        $shutter_button: this.$refs.shutter_button
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
.content {
	width: 100%;
  height: 100vh;
  overflow: hidden;
  font-size: 14px;
  font-family: sans-serif;
}
#world {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.device-orien-modal {
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
}
.device-orien-modal-inner {
  width: 90%;
  max-width: 350px;
  box-sizing: border-box;
  height: auto;
  padding: 1.3rem;
  margin: auto;
  background: white;
  display: flex;
  flex-direction: column;
}
.device-orien-modal-button {
  margin: 1rem auto auto;
  padding: 0.8rem 1.3rem;
  background: black;
  color: white;
  width: 130px;
}
.is-hidden {
  display: none;
}
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}
.camera {
  position: fixed;
  top: 0;
  left: 0;
}

.shutter-button {
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 2;
  background-color: #c01111;
  color: #FFF;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 16px;
  line-height: 1;
}
</style>