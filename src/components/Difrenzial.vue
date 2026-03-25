<template>
    <div class="titles">
      <p class="title-d"> {{ data.Difrenzial[0].title }}</p>
      <p class="mini-title-d"> {{ data.Difrenzial[1].miniTitle }}</p>
    </div>
    <div class="section">
  <img src="@/assets/media/DifrenzialTwo.png" 
       alt="Difrenzial2" 
       class="Difrenzial" />

  <div class="text-d">
    <div class="text-content">
      <p class="first-text">{{ data.Difrenzial[2].text }}</p>
      <p class="first-text">{{ data.Difrenzial[2].textTwo }}</p>
      <p class="first-text">{{ data.Difrenzial[2].textThree }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name:"Difrenzial",

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
 .title-d {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-d {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
}


.section {
  display: flex;
  justify-content: space-between; /* דוחף קצוות */
  align-items: stretch; /* אותו גובה */
  width: 100%;
}

.text-d {
  width: 40vw;
  top: 5rem;
  right: 10rem; /* ריווח מהקצה הימני */
  display: flex;
  justify-content: flex-end;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  text-align: right; /* יישור טקסט לימין */
}

.first-text {
  color: black;
  font-family: "rubik";
  font-size: 2rem;
 
  margin: 0;
}

.Difrenzial {
  height: 100%;
  width: auto;
  
}
</style>