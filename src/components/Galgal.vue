<template>
    <div class="titles">
      <p class="title-g"> {{ data.Galgal[0].title }}</p>
      <p class="mini-title-g"> {{ data.Galgal[1].miniTitle }}</p>
    </div>
    <div class="text-g">
  <img src="@/assets/media/galgalOne.png" alt="galgal1" class="galgal" />
  
  <div class="text-content">
    <p class="first-text">{{ data.Galgal[2].text }}</p>
    <!-- <p class="first-text">{{ data.Galgal[2].exemple }}</p> -->
  </div>
</div>

<div class="text-g">
  <img src="@/assets/media/galgalTwo.png" alt="galgal2" class="galgal" />
  
  <div class="text-content">
    <p class="first-text">{{ data.Galgal[3].textOne }}</p>
    <p class="first-text">{{ data.Galgal[3].exempleOne }}</p>
  </div>
</div>
</template>

<script>
export default {
    name:"Galgal",

    inject: ["dataStore"],

computed: {
  data() {
    return this.dataStore.data.value;
  }
}
}
</script>

<style>
  .titles{
    margin-top: 7rem;
  }
 .title-g {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-g {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
}


.text-g {
  width: 65vw;
  padding-top: 5rem;
  display: flex;
  align-items: stretch; /* גורם לילדים להימתח לגובה מלא */
  /* gap: 2rem; רווח בין תמונה לטקסט */
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.first-text {
  color: black;
  font-family: "rubik";
  font-size: 2rem;
  letter-spacing: 0rem;
  margin: 0rem;
  
}

.galgal {
  height: 100%;   /* גובה כמו ה-div */
  width: auto;    /* שומר על פרופורציות */
}
</style>