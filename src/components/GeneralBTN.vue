<template>
  
    <div class="StartPage">
      <!-- back button -->
      <div class="backBtn">
        <img src="@/assets/media/backBTN.png"
          alt="backBtn"
          class="backBtnImg"
          @click="goBack"
        />
        <p class="backBtnText"> {{ data.Btn[0].text }}</p>
      </div>

      <div class="symbols" >
        <img src="@/assets/media/bahad6.png"
          alt="bahad6" class="bahad6"/>
        <img src="@/assets/media/til.svg"
          alt="til" class="til"/>
      </div>
  
      <!-- start button -->
      <img src="@/assets/media/nextBTN.png"
        alt="startBtn"
        class="letsStartBtn"
        @click="nextPage"
      />
    </div>
  </template>
  
  <script>

    export default {
        name: "StartPage",
        inject: ["dataStore"],

  computed: {
    data() {
      return this.dataStore.data.value;
    },
  },
  
    /* הצהרה על האירועים */
    emits: ["next" , "back"],
  
    // data() {
    //   return {
    //     showAbout: false,
    //     infoSymbol: "i"
    //   };
    // },
  
    methods: {
  nextPage() {
    this.$emit("next");
  },
  goBack() {
    this.$emit("back");
  }
}
  };
  </script>

  <style>
  /* כפתור חזור – ימין עליון */
.backBtn {
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
}

/* תמונת הכפתור */
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


/* סמלים – שמאל עליון */
.symbols {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
}

.bahad6,
.til {
  height: 5rem;
}


/* כפתור הבא – שמאל תחתון */
.letsStartBtn {
  width: 12rem;
  height: 6rem;
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  cursor: pointer;
  transition: transform 0.25s ease;
  z-index: 10;
}

.letsStartBtn:hover {
  transform: scale(1.1);
}

    /* .backBtn {
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

.letsStartBtn {
    height: 6rem;
    position: absolute;
    z-index: 4;
  bottom: 0.5rem;
  right: 100rem;
    cursor: pointer;
    display: inline-block;
    transition: transform 0.25s ease;
} */



.letsStartBtn:hover {
    animation: none;
    transform: scale(1.13);
}

@media (max-width: 950px) {
    .davidCard {
        height: 30rem;
    }

    .letsStartBtn {
        height: 7rem;
        top: 36rem;
        right: 16rem;
    }
}

@media (max-height: 750px) {
    .davidCard {
        height: 30rem;
    }

    .letsStartBtn {
        height: 7rem;
        top: 32rem;
        right: 16rem;
    }
}

@media (max-height: 650px) {
    .davidCard {
        height: 28rem;
    }

    .letsStartBtn {
        height: 7rem;
        top: 27rem;
        right: 15rem;
    }
}
</style>