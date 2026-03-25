<template>
    <div class="titles">
      <p class="title-safe"> {{ data.Safety[0].title }}</p>
      <p class="mini-title-safe"> {{ data.Safety[1].miniTitle }}</p>
    </div>

 
    <div class="text-wrap-safe">
      <p class="safe-text">{{ data.Safety[2].text }}</p>
      <p class="safe-text">{{ data.Safety[2].textTwo }}</p>
    </div>
  

  <img src="@/assets/media/Safety.jpg" 
       alt="Safety" 
       class="Safety" />
  <img src="@/assets/media/Safety1.jpg" 
       alt="Safety" 
       class="Safety" />

</template>

<script>
export default {
    name:"Safety",

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
 .title-safe {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-safe {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;

}

.text-wrap-safe{
    width: 65vw;
    padding: 2rem;
}
.safe-text{
    color: black;
    font-family: "rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
}

.Safety {
  height: 12rem;
  margin: 0rem 3rem;
}
</style>