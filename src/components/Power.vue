<template>
    <div class="titles">
      <p class="title-p"> {{ data.Power[0].title }}</p>
      <p class="mini-title-p"> {{ data.Power[1].miniTitle }}</p>
    </div>

 
    <div class="text-wrap-p">
      <p class="p-text">{{ data.Power[2].text }}</p>
      <p class="p-text">{{ data.Power[2].textTwo }}</p>
    </div>
  

  <img src="@/assets/media/תמונה37.jpg" 
       alt="Power" 
       class="Power" />

</template>

<script>
export default {
    name:"Power",

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
 .title-p {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-p {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;

}

.text-wrap-p{
    width: 65vw;
    padding: 2rem;
}
.p-text{
    color: black;
    font-family: "rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
}
</style>