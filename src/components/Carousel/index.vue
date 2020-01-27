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
            />
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
  }
};
</script>

<style lang="scss" scoped>

.tips {
  .sct-title {

  }
}

</style>
