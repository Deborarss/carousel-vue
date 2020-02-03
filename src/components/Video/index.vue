<template>
  <div class="video">
    <div class="video__content" v-if="videoUrl">
      <div class="video__overlay"></div>
      <div class="video__modal">
        <button type="button" @click="closeModal()"></button>
        <iframe width="100%" height="100%" target="_parent" :src="videoUrl" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen tabindex="7"></iframe>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  name: "video-comp",
  computed: {
    videoUrl() {
      return this.$store.state.videoUrl
    }
  },
  methods: {
      closeModal() {
        this.$store.dispatch('videoModal', '')
        document.documentElement.style.overflowY = 'scroll'
      }
  }
}
</script>

<style lang="scss" scoped>
 .video {
    position: absolute;
    background: #f5f5f5;
    color: #000;

    &__content {
      width: 100vw;
      height: 100vh;
      position: absolute;
    }

    &__modal {
      width: 560px;
      height: 315px;
      background: transparent;
      z-index: 999999;
      position: absolute;
      top: 30%;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;

      button {
        cursor: pointer;
        display: block;
        background: url('./assets/icon-close.png') center no-repeat;
        width: 30px;
        height: 20px;
        border: none;
        margin-bottom: 10px;
        margin-left: auto;
      }
    }

    &__overlay {
      background: rgba(0, 0, 0, 0.7);
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      z-index: 9999;
    } 
  } 

</style>