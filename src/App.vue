<template>
  <div id="app">
    <div class="container">
      <carousel :data="songsData" />
    </div>
  </div>
</template>

<script>
import "./styles/main.scss";

//componentes a serem utilizados na LP
import carousel from "./components/Carousel";

//data a serem utilizados nos componentes
import songsInfo from "./data/songs.json";


export default {
  name: "App",
  components: {
    carousel
  },
  data() {
    return {
      //data dos componentes
      songsData: null,
    };
  },
  mounted() {
    this.songsData = songsInfo;
  }
};
</script>