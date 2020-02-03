<template>
  <div id="app">
    <div class="container">
      <Carousel :data="songsData" />
    </div>  
    <Video /> 
  </div>
</template>

<script>
import "./styles/main.scss";

//componentes a serem utilizados na LP
import Carousel from "./components/Carousel";
import Video from "./components/Video"

//data a serem utilizados nos componentes
import songsInfo from "./data/songs.json";


export default {
  name: "App",
  components: {
    Carousel,
    Video
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