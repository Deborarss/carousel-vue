<template>
  <div class="songs row">
    <section class="songs__content col-12">
      <h1 class="sct-title songs__title">Músicas para curtir</h1>
      <carousel
        class="songs__cards"
        :nav="true"
        :responsive="{0: {items: 1}, 768: {items: 3, margin: 40}}"
      >
        <div class="songs__cards__card" v-for="card in data.songs" :key="card.id">
          <div class="songs__cards__card__container">
            <img
              :src="require('./assets/' + card.thumb)"
              :alt="card.alt"
              @click="openModal(card.video)"
            />
            <img 
              src="./assets/play.svg" 
              alt="Iniciar vídeo"
              @click="openModal(card.video)"
              class="play"
            />
            <h2>{{ card.title }}</h2>
            <p>{{ card.text }}</p>
          </div>
        </div>
      </carousel>
    </section>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "carousel-comp",
  props: {
    data: Object
  },
  components: {
    carousel
  },
  methods: {
    openModal(videoUrl) {
      console.log(videoUrl)
      this.$store.dispatch("videoModal", videoUrl)
      const modal = document.querySelector(".video")
      console.log(modal);
        
      modal.style.top = `${window.pageYOffset}px`
      document.documentElement.style.overflowY = "hidden";
      
    }
  }
};
</script>

<style lang="scss" scoped>

.songs {
  .sct-title {
    font-size: 39px;
    font-weight: 300;
    margin: 40px 0 20px 0;
  }

  &__cards__card__container {
    background: url(./assets/card.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 20px;
    position: relative;
    

    .play {
      position: absolute;
      top: 90px;
      left: 50%;
      width: 20px;
    }

    img {
      cursor: pointer;
    }

    h2 {
      color: #fff;
      font-size: 20px;
      font-weight: 400;
    }

    p {
      font-size: 14px;
      font-weight: 300;
      color: #fff;
    }
  }
}

</style>
