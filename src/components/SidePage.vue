<template>
    <div class="titles">
      <p class="title-s"> {{ data.Side[0].title }}</p>
      <p class="mini-title-s"> {{ data.Side[1].miniTitle }}</p>
    </div>
    <div>
      <div class="sides-wrapper">
        <div class="enter">
            <img src="@/assets/media/enter.jpg" alt="enter" class="side-img"/> 
            <p class="text"> {{ data.Side[2].text }}</p>
        </div>
        <div class="enter">
            <img src="@/assets/media/out.jpg" alt="out" class="side-img"/> 
            <p class="text"> {{ data.Side[2].textTwo }}</p>
        </div>
    </div>
    <p class="last"> {{ data.Side[3].last }}</p>
  </div>
</template>

<script>
export default {
    name: "sidePage",

    inject: ["dataStore"],

  computed: {
    data() {
      return this.dataStore.data.value;
    },
  },

}
</script>

<style>
 .titles{
    margin-top: 7rem;
  }
 .title-s {
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0; 
  top: 1rem;
}

.mini-title-s {
  padding: 0;
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
}

.sides-wrapper {
  display: flex;
  justify-content: space-between; /* אחת לשמאל אחת לימין */
  align-items: flex-start;
  width: 100%;
  margin-top: 4rem;
  color: black;
  font-family: 'rubik';
}

.enter {
 display: flex;
  flex-direction: column; /* טקסט מתחת לתמונה */
  align-items: center;
  width: 40%;
  text-align: center;
  }

  .side-img {
  width: 20rem; /* או כל גודל שתרצי */
  height: auto;
}

.text {
  margin-top: 1.5rem;
  font-size: 1.8rem;
 width: 20rem;
} 

.last {
  margin: 2rem;
  font-size: 1.8rem;
  width: 50rem;
  color: black;
  font-family: 'rubik';
}
</style>