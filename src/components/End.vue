<template>
  <div class="titles">
    <p class="title-safe">{{ data.End[0].title }}</p>
  </div>
  <div class="text-wrap-safe">
    <p class="safe-text">{{ data.End[0].text }}</p>
    <p class="safe-text">{{ data.End[0].textTwo }}</p>
    <img src="@/assets/media/gift.png" alt="gift" class="gift">
  </div>
  <button class="end-btn" @click="toPackage">{{ data.End[0].btn }}</button>
</template>

<script>
export default {
    name:"end",

    inject: ["dataStore"],

computed: {
    data() {
        return this.dataStore.data.value;
}
},
methods: {
  
      toPackage() {
        window.location.href =
          "https://madortill.github.io/batash-package/";
      }
    }
};
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

.gift {
    position: relative;
    top: 2rem;
    width: 10rem;
}
.end-btn {
    border: 0rem;
    color: #FFF2B4;
    background-color: #E69907;
    font-family: "rubik";
    font-size: 1.5rem;
    border-radius: 8px;
    width: 6.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease;
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
    padding: 0.5rem 0rem;
}
.end-btn:hover {
    transform: scale(1.25);
}

</style>
