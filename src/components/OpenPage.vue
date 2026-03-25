<template>
    <div class="StartPage">
      <!-- back button -->
      <div class="backBtn">
        <img src="@/assets/media/backBTN.png"
          alt="backBtn"
          class="backBtnImg"
          @click="goBack"
        />
        <p class="backBtnText">חזרה לבחירת הרכב</p>
      </div>

      <div class="symbols" >
        <img src="@/assets/media/bahad6.png"
          alt="bahad6" class="bahad6"/>
        <img src="@/assets/media/til.svg"
          alt="til" class="til"/>
      </div>
  ``
      <!-- about toggle -->
      <div class="aboutBtnContainer" @click="toggleAbout">
        <button class="about-btn">{{ infoSymbol }}</button>
        <p>אודות</p>
      </div>

      <!-- about content -->
      <div :class="['div-about', showAbout ? 'fade-in' : 'fade-out']">
        <template v-if="showAbout">
          <h3 class="list-text-about">מפתחת ראשית:</h3>
          <p class="list-text-about">רב"ט ירין חנה  טובול</p>

          <h3 class="list-text-about">גרפיקה:</h3>
           <p class="list-text-about">רב"ט גילי נחום</p>

        <h3 class="list-text-about">מומחי תוכן:</h3>
        <p class="list-text-about">רס"ל עדן מאיר</p>
        <p class="list-text-about">רנ"ג יוסי אלוני</p>

        <h3 class="list-text-about">רמ"ד טי"ל:</h3>
        <p class="list-text-about">רס"מ עדן בן חמו</p>

        <h3 class="list-text-about">גרסה:</h3>
        <p class="list-text-about">פברואר 2026</p>
        </template>
      </div>
  
      <!-- main content -->
      <div class="start-main-content">
        <p class="start-main-content-text">ג'יפ סופה </p>
        <img src="@/assets/media/sofaCard.jpeg" alt="card" class="sofaCard" />
      </div>
  
      <!-- start button -->
    </div>
  </template>
  
  <script>

    export default {
        name: " OpenPage",
  
    /* הצהרה על האירועים */
    emits: ["next"],
  
    data() {
      return {
        showAbout: false,
        infoSymbol: "i"
      };
    },
  
    methods: {
      toggleAbout() {
        this.showAbout = !this.showAbout;
        this.infoSymbol = this.infoSymbol === "i" ? "x" : "i";
      },
  
      goBack() {
        window.location.href =
          "https://madortill.github.io/batash-package/";
      }
    }
  };
  </script>

  <style>
    .backBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;     
  direction: rtl;
}

.backBtnImg {
    height: 4.5rem;
    transition: transform 0.2s ease;
    cursor: pointer;
}

.backBtnImg:hover {
    transform: scale(1.13);
}

.backBtnText {
  font-family: "karantina-Bold";
  font-size: 1.1rem;

}

.bahad6 {
  height: 5rem;
}

.til {
  height: 5rem;
}

.symbols {
  position: absolute;
  z-index: 4;
  top: 0.5rem;
  left: 0.5rem;
}

.about-btn {
    border: none;
    color: #FEECD8;
    font-size: 2rem;
    background-color: #073799;
    border-radius: 150px;
    width: 3rem;
    height: 3rem;
    font-family: 'Times New Roman', Times, serif;
    text-align: center;
    transition: transform 0.25s ease;
    cursor: pointer;
    padding: 0;
}

.aboutBtnContainer {
    position: absolute;
    left: 10rem;
    top: 0.5rem; 
    text-align: center;
    font-family: "assistant-bold";
    color: #073799;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}

.about-btn:hover {
    transform: scale(1.15);
}

.div-about {
    position: absolute;
    color: #FFF2B4;
    width: 15rem;
    height: 25rem;
    left: 1rem;
    bottom: 6rem;
    font-family: "assistant";
    background: #073799;
    border-radius: 1rem;
    box-shadow: 0 15px 20px -20px rgba(0, 0, 0, 0.4);
    text-align: center;
    transition: opacity 0.4s ease;
    z-index: 2;
    /* direction: rtl; */
}

.list-text-about {
    transition: background-color 0.5s ease;
    margin: 5%;
}

.list-text-about:hover {
    background-color: #dbdbdb;
}

.fade-in {
    opacity: 1;
    pointer-events: auto;
    max-height: 500px;
}

.fade-out {
    opacity: 0;
    pointer-events: none;
    max-height: 0;
}

.start-main-content-text {
    display: contents;
    font-family: "rubik";
    font-size: 3.5rem;
    color: #E69907;
}

.start-main-content {
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sofaCard {
    height: 35rem;
    width: 25rem;
    border-radius: 17px;
    margin-top: 1rem;
}

.letsStartBtn {
   width: 12rem;
   height: 9rem;
    position: relative;
    bottom: 10rem;
    left: 10rem;
    cursor: pointer;
    animation: pulse 1.8s ease infinite;
    display: inline-block;
    transition: transform 0.25s ease;
}



.letsStartBtn:hover {
    animation: none;
    transform: scale(1.13);
}



/* infoPage */

/* .info-container {
    background-color: #073899b2;
    height: 40rem;
    width: 33rem;
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
    font-size: 2.2rem;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
}

.info-text {
    width: 80%;
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
    bottom: 8.5rem;
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
} */

/* welcomePage */
.welcome-title {
    font-family: "rubik-black";
    font-size: 2.9rem;
    margin-bottom: 1rem;
}

.welcome-text {
    color: black;
    font-size: 1.9rem;
    font-weight: bold;
}

.welcome-mainContent {
    width: 48rem;
    position: relative;
    top: 12rem;
    right: 12rem;
}

.welcome-road {
    position: relative;
    height: 100%;
    left: 10rem;
}

.welcome-nextBtn {
    margin-top: 4rem;
    width: 12rem;
    height: 3.2rem;
    ;
    font-size: 1.7rem;
    cursor: pointer;
    position: relative;
    top: 0rem;
    right: 0rem;
    z-index: 3;
}

.welcome-gal {
    position: relative;
    z-index: 1;
    height: 20rem;
    top: 25rem;
    right: 26rem;
}

@media (max-width: 1600px) {
    .welcome-mainContent {
        right: 18rem;
    }

    .welcome-road {
        left: 20rem;
    }

    .welcome-gal {
        right: 20rem;
        top: 20rem;
    }
}

@media (max-width: 1350px) {
    .welcome-mainContent {
        right: 20rem;
    }

    .welcome-road {
        left: 22rem;
    }

    .welcome-gal {
        right: 16rem;
        top: 23rem;
        height: 17rem;
    }
}

@media (max-width: 1250px) {
    .welcome-mainContent {
        right: 29rem;
    }

    .welcome-road {
        left: 18rem;
    }

    .welcome-gal {
        right: 21rem;
        top: 23rem;
        height: 17rem;
    }
}

@media (max-height: 770px) {
    .welcome-gal {
        right: 20rem;
        top: 20rem; 
        height: 17rem;
    }
}


</style>