<template>
  <div class="app">
    <OpenPage v-if="page ===0 " @next="page = 1" />
    <GeneralBTN v-if="page >=1" @next="page++" @back="page--"/>
    <Instructions v-if="page === 1"/>
    <SubjectsPage v-if="page ===2"></SubjectsPage>
    <InformationSofa v-if="page===3"></InformationSofa>
    <InformationRengler v-if="page===4"></InformationRengler>
    <NewRengler v-if="page===5"></NewRengler>
    <galgal v-if="page===6"></galgal>
    <difrenzial v-if="page ===7"></difrenzial>
    <track-lock v-if="page===8"></track-lock>
    <side-page v-if="page===9  "></side-page>
    <NoAbs v-if="page===10"></NoAbs>
    <abs v-if="page===11"></abs>
    <Over v-if="page===12"></Over>
    <Power v-if="page===13"></Power>
    <Safety v-if="page===14"></Safety>
  </div>
</template>

<script>
import OpenPage from "./components/OpenPage.vue";
import Instructions from "./components/Instructions.vue";
import GeneralBTN from './components/GeneralBTN.vue';
import SubjectsPage from './components/SubjectsPage.vue';
import InformationSofa from './components/InformationSofa.vue';
import InformationRengler from "./components/InformationRengler.vue";
import NewRengler from "./components/NewRengler.vue";
import Galgal from './components/Galgal.vue';
import Difrenzial from "./components/Difrenzial.vue";
import TrackLock from './components/TrackLock.vue';
import SidePage from "./components/SidePage.vue";
import NoAbs from './components/NoAbs.vue';
import Abs from './components/Abs.vue';
import Over from './components/Over.vue';
import Power from './components/Power.vue';
import Safety from './components/Safety.vue';


    
export default {
  name: "App",
  components: { OpenPage , Instructions, GeneralBTN, SubjectsPage, InformationSofa, InformationRengler, NewRengler, Galgal, Difrenzial, TrackLock, SidePage, NoAbs, Abs, Over, Power, Safety} ,

 
  watch: {
    page(newVal) {
  }
},
  data() {
        return {
          page: 0,
        }
  }


};
</script>

<style scoped>
  @font-face {
    font-family: "Karantina-Regular";
    src: url('../src/assets/fonts/Karantina-Regular.ttf');
}

  @font-face {
    font-family: "Karantina-Light";
    src: url('../src/assets/fonts/Karantina-Light.ttf');
}

@font-face {
    font-family: "Karantina-Bold";
    src: url('../src/assets/fonts/Karantina-Bold.ttf');
}

html {
	font-size: calc(10px + 0.5vw);
  height: 91vh;
}

/* .app {
  height: 91vh;
  overflow: hidden;
  position: relative;
} */
</style> 

