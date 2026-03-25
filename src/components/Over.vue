<template>
    <div class="titles">
      <p class="title-o"> {{ data.Over[0].title }}</p>
      <p class="mini-title-o"> {{ data.Over[1].miniTitle }}</p>
    </div>

 
    <div class="text-wrap-o">
      <p class="o-text">{{ data.Over[2].text }}</p>
      <p class="o-text">{{ data.Over[2].textTwo }}</p>
    </div>
  

  <img src="@/assets/media/Over.png" 
       alt="over" 
       class="over" />

</template>

<script>
export default {
    name:"Over",

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
 .title-o {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-o {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;

}

.text-wrap-o{
    width: 65vw;
    padding: 2rem;
}
.o-text{
    color: black;
    font-family: "rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
}
</style>