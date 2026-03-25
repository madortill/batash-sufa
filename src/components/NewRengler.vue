<template>
    <div class="titles">
      <p class="title-n"> {{ data.NewRengler[0].title }}</p>
      <p class="mini-title-n"> {{ data.NewRengler[1].miniTitle }}</p>
    </div>
    <div class="text-wrap">
        <p class="rengler-text"> {{ data.NewRengler[2].text }}</p>
    </div>
</template>

<script>
export default {
    name:"NewRengler",

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
 .title-n {
  font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-n {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
}

.text-wrap{
    width: 65vw;
    padding: 2rem;
}
.rengler-text{
    color: black;
    font-family: "rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
}
</style>