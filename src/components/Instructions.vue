<template>
   
  <div class="info-container">
    <p class="info-title"> {{ data.Instructions[0].title }}</p>
    <div>
        <p class="info-text"> {{ data.Instructions[0].lng }}</p>
    </div>
    <p class="info-text">{{ data.Instructions[0].text }}</p>
    <div>
        <p class="info-text"> {{ data.Instructions[0].btn }}</p>
    </div>
    <div class="infoBtnContainer">
        <img src="@/assets/media/backBTN.png" class="backBtnInfo" />
        <img src="@/assets/media/nextBTN.png" class="nextBtnInfo"/>
    </div>
   
  </div>
</template>

  
<script>
export default {
  name: "Instructions",
  

  inject: ["dataStore"],

  computed: {
    data() {
      return this.dataStore.data.value;
    },
  },
};
</script>


  
  <style scoped>
  .info-container {
    background-color: #073899b2;
    height: 40rem;
    width: 35rem;
    border-radius: 20px;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    color: #FFF2B4;
    padding: 1rem;
    font-family: "assistant";
    font-size: 1.4rem;
    text-align: start;
   
}

.info-title {
    font-family: "rubik";
    font-size: 3rem;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

.info-text {
    /* width: 80%; */
    font-size: 1.8rem;
}

.languageBtn {
    border: 0px;
    height: 3.3rem;
    width: 3.3rem;
    border-radius: 3rem;
    font-family: "assistant";
    font-size: 1.7rem;
    color: #073799;
    background-color: #FFF2B4;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease;
    position: relative;
    right: 25rem;
    bottom: 25rem;
    cursor: pointer;
}

.languageBtn:hover {
    transform: scale(1.25);
}

.backBtnInfo {
    height: 4rem;
}

.infoBtnContainer {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    position: relative;
   
}

.infoBtnExplain {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 0rem 1rem;
}

.nextBtn {
    border: 0rem;
    color: #FFF2B4;
    background-color: #E69907;
    font-family: "assistant-extraBold";
    font-size: 1.5rem;
    border-radius: 8px;
    height: 3.5rem;
    width: 6.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.2s ease;
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
}

.nextBtn:hover {
    transform: scale(1.25);
}

.nextBtnInfo {
    font-size: 1.5rem;
    height: 3rem;
    width: 6rem;
    cursor: default;
    position: relative;
    bottom: 0rem;
    left: 0rem;
}

.nextBtnInfo:hover {
    transform: scale(1);
}

.nextBtnDisable {
    background-color: #BFBFBF;
    color: #EEEEEE;
    cursor: default;
}

.nextBtnDisable:hover {
    transform: scale(1);
}

.narrationBtnInfo {
    border: 3px solid #073799;
    border-radius: 8px;
    font-family: "assistant-bold";
    color: #073799;
    background-color: #FFF2B4;
    height: 4.5rem;
    width: 11rem;
    display: flex;
    align-items: center;
    font-size: 1rem;
    margin: 0rem 1rem;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.narrationBtnInfo:hover {
    transform: scale(1.15);
}

.narrationContainer {
    display: flex;
    justify-content: center;
    position: relative;
    bottom: 7.8rem;
}

.narrationExplain {
    position: relative;
    bottom: 7.5rem;
    text-align: center;
    font-size: 1rem;
}

.narration-toggle-info {
    pointer-events: none;
}

.narrationText {
    position: relative;
    bottom: 8rem;
}

.narration-btn-container {
    display: flex;
    justify-content: center;
    gap: 3rem;
    position: relative;
    bottom: 7.5rem;
}
  </style>