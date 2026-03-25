<template>
    <div class="titles">
      <p class="title-t"> {{ data.TrackLock[0].title }}</p>
      <p class="mini-title-t"> {{ data.TrackLock[1].miniTitle }}</p>
    </div>

 
    <div class="text-wrap-track">
      <p class="track-text">{{ data.TrackLock[2].text }}</p>
      <p class="track-text">{{ data.TrackLock[2].textTwo }}</p>
    </div>
  

  <img src="@/assets/media/Difrenzial.png" 
       alt="TrackLock" 
       class="TrackLock" />

</template>

<script>
export default {
    name:"TrackLock",

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
 .title-t {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-t {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;

}

.text-wrap-track{
    width: 65vw;
    padding: 2rem;
}
.track-text{
    color: black;
    font-family: "rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
}
</style>