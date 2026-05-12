<!-- <template>
  
    <div class="scene">
  
       סצנה עם רכב 
       <div class="road-container">
        <img src="@/assets/media/road.png" class="road" />
  
        <img
          src="@/assets/media/car.png"
          class="car"
          :class="{ braking: isBraking }"
        />
   -->
        <!-- כותרת בצד -->
        <!-- <h1
          class="title"
          :class="{ centered: titleCentered }"
        >
          {{ data?.Abs[0]?.title || "כותרת ראשית" }}
        </h1>
      </div>
   -->
      <!-- טקסט נוסף + כפתור אחרי 3 שניות -->
      <!-- <transition name="fade">
        <div v-if="showText" class="next-screen">
          <p>{{ data?.Abs[1]?.text || "תוכן טקסט נוסף" }}</p>
          <button @click="openPopup">פתח פופאפ</button>
        </div>
      </transition> -->
  
      <!-- הפופאפ -->
      <!-- <div v-if="popupOpen" class="popup-overlay" @click="popupOpen=false">
        <div class="popup-content" @click.stop>
          <h2>סרטון</h2>
          <p>כאן יהיה סרטון</p>
          <button @click="popupOpen=false">סגור</button>
        </div>
      </div>
  
    </div>
  </template> --> 
  <template>
    <div class="scene">
  
      <!-- כביש + רכב (נעלמים בסוף) -->
      <!-- <div class="road-container" :class="{ fadeOut: hideScene }"> -->

  <!-- כותרות - צד ימין למעלה -->
  <div class="header-container">
      <h1 class="main-title">נהיגה נכונה בג'יפ</h1>
      <h2 class="sub-title">בלימת חירום ללא מערכת ABS - סופה 2</h2>
    </div>

      <!-- כביש ורכב -->
    <div class="road-container" :class="{ fadeOut: hideScene }">
      <img src="@/assets/media/road.png" class="road" />

      <img
        src="@/assets/media/car.png"
        class="car"
        :class="{ 'start-animation': stage > 0 }"
      />
    </div>
        <!-- כותרת (לא זזה עד אחרי העלמות) -->
        <!-- <h1 class="title" :class="{ centered: titleCentered }">
          {{ data?.NoAbs?.[0]?.title }}
        </h1>
      </div> -->
  
      <!-- טקסט אחרי הכל -->
      <transition name="fade">
        <div v-if="showText" class="next-screen">
          <p>{{ data?.Abs?.[1]?.text }}</p>
          <button @click="openPopup">פתח פופאפ</button>
        </div>
      </transition>
  
      <!-- פופאפ -->
      <div v-if="popupOpen" class="popup-overlay" @click="popupOpen=false">
        <div class="popup-content" @click.stop>
          <h2>סרטון</h2>
          <p>כאן יהיה סרטון</p>
          <button @click="popupOpen=false">סגור</button>
        </div>
      </div>
  
    </div>
  </template>
  
  <!-- <script>
  export default {
    name: "NoAbs",
    inject: ["dataStore"],
  
    data() {
      return {
        isBraking: false,
        titleCentered: true,
        showText: true,
        popupOpen: false,
      };
    },
  
    computed: {
      data() {
        return this.dataStore.data.value;
      }
    },
  
    mounted() {
      // שלב 1: אחרי 3 שניות הכותרת זזה למרכז
      setTimeout(() => {
        this.titleCentered = true;
        this.showText = true;
      }, 3000);
    },
  
    methods: {
      openPopup() {
        this.popupOpen = true;
      }
    }
  };
  </script> -->

  <script>
export default {
  name: "NoAbs",
  inject: ["dataStore"],

  data() {
    return {
      stage: 0,          // שלבים של האנימציה
      titleCentered: false,
      showText: false,
      popupOpen: false,
      hideScene: false
    };
  },

  computed: {
    data() {
      return this.dataStore?.data?.value || {};
    }
  },

  mounted() {
    // התחלת האנימציה באופן אוטומטי
    setTimeout(() => {
      this.stage = 1;
      this.runLogic();
    }, 500);
  },
  methods: {
    runLogic() {
      // זמן האנימציה הכולל (נסיעה + בלימה)
      setTimeout(() => {
        this.hideScene = true;
        setTimeout(() => {
          this.showText = true;
        }, 800);
      }, 4500);
    }
  },
    openPopup() {
      this.popupOpen = true;
    }
  };
</script>


  <!-- <style scoped>
  .scene {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
  
  /* כביש */
  .road {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  
  /* רכב */
  .car {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%) translateY(0);
    width: 150px;
    cursor: pointer;
    animation: drive 3s linear forwards;
    z-index: 2;
  }
  
  @keyframes drive {
    0% { bottom: 5%; }
    100% { bottom: 30%; }
  }
  
  /* כותרת בצד */
  .title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-size: 3rem;
    color: white;
    transition: all 1s ease;
    z-index: 3;
  }
  
  /* הכותרת עוברת למרכז */
  .title.centered {
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
  }
  
  /* טקסט נוסף + כפתור */
  .next-screen {
    position: absolute;
    top: 40%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    z-index: 3;
  }
  
  .next-screen p {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .next-screen button {
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }
  
  /* פופאפ */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }
  
  .popup-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
  }
  
  /* fade-in animation */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style> -->

  <style scoped>
.scene {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.header-container {
  position: absolute;
  top: 5rem;
  right: 10rem;
  text-align: right;
  z-index: 10;
}

.main-title {
  font-size: 5rem;
  color: #073799;
  margin: 0;
  font-family: "Karantina-Bold";
}

.sub-title {
  font-size: 2.5rem;
  color: #073799;
  margin-top: 1.5rem;
  font-family: "Karantina-Light";
}

/* ===== כביש ===== */
/* כביש */
.road-container {
  /* position: absolute; 
  inset: 0;
  display: flex;
  justify-content: center;*/
  /* position: absolute;

  width: 70rem;

  height: 100vh;

  object-fit: cover;



  left: 30rem;

  transform: translateX(-50%); /* מרכז אמיתי 



  z-index: 1 */
  position: absolute;
  width: 70rem; /* הרוחב שהגדרת */
  height: 100vh;
  left: 38%;
  transform: translateX(-50%); /* ממרכז את כל הקומפוננטה */
  z-index: 1;
  overflow: hidden;
}

.road {
  /* height: 100%;
  object-fit: contain; */
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* רכב ואנימציה במסלול הכביש */
.car {
  /* position: absolute;
  bottom: -10%; /* מתחיל מחוץ למסך 
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  z-index: 5; */
  position: absolute;
  bottom: -15rem; /* מתחיל מחוץ למסך למטה */
  /* מיקום התחלתי בנתיב הימני יחסית למרכז הכביש */
  left: 55%; 
  transform: translateX(-50%);
  width: 8rem; /* גודל ב-rem לרספונסיביות */
  z-index: 5;
}

.car.start-animation {
  /* animation: sCurveDrive 4.5s ease-in-out forwards; */
  animation: rightLaneDrive 4s ease-in-out forwards;
}

@keyframes rightLaneDrive {
  /* 0%   { bottom: -10%; transform: translateX(-50%) rotate(0deg); }
  /* 20%  { bottom: 15%;  transform: translateX(-55%) rotate(-5deg); } עיקול שמאלה 
  /* 40%  { bottom: 40%;  transform: translateX(-45%) rotate(8deg); }  עיקול ימינה 
  60%  { bottom: 60%;  transform: translateX(-52%) rotate(-3deg); } /* יישור קל 
  85%  { bottom: 75%;  transform: translateX(-50%) rotate(0deg); }  /* הגעה לנקודת בלימה 
  
  /* בלימה (זעזוע קטן) 
  92%  { bottom: 76%;  transform: translateX(-50%) scale(1.02); } 
  100% { bottom: 75%;  transform: translateX(-50%) scale(1); } */
  0% { 
    bottom: 0rem; 
    left: 66%; 
    transform: translateX(-50%) rotate(0deg); 
  }
  
  /* התקדמות בקו ישר יחסית */
  30% { 
    bottom: 10rem; 
    left: 64%; 
    transform: translateX(-50%) rotate(0deg); 
  }

  /* פנייה קלה ימינה עם עיקול הכביש */
  60% { 
    bottom: 21rem; 
    left: 65%; /* סטייה קלה ימינה */
    transform: translateX(-50%) rotate(5deg); 
  }

  /* יישור ובלימה - מסיים מעט אחרי מרכז הגובה (לפי התמונה) */
  85% { 
    bottom: 30rem; 
    left: 60%; 
    transform: translateX(-50%) rotate(0deg); 
  }

  /* אפקט בלימה סופי */
  92% { 
    bottom: 33rem; 
    left: 60%; 
    transform: translateX(-50%) scale(1.05) rotate(-5deg); 
  }
  100% { 
    bottom: 35rem; 
    left: 60%; 
    transform: translateX(-50%) scale(1); 
  }
}

.fadeOut {
  opacity: 0;
  transition: opacity 0.8s ease;
}

/* תנועה קדימה */
/* @keyframes drive {
  0% {
    bottom: 5%;
    transform: translateX(-50%);
  }

  25% {
    bottom: 12%;
    transform: translateX(-42%);
  }

  50% {
    bottom: 20%;
    transform: translateX(-46%);
  }

  75% {
    bottom: 26%;
    transform: translateX(-36%);
  }

  100% {
    bottom: 30%;
    transform: translateX(-30%);
  }
} */
/* בלימה קטנה */
/* @keyframes brake {
  0% {
    bottom: 30%;
    transform: translateX(-30%);
  }

  60% {
    bottom: 31%;
    transform: translateX(-29%);
  }

  100% {
    bottom: 30%;
    transform: translateX(-30%);
  }
} */

/* ===== כותרת ===== */
/* .title {
  position: absolute;
  top: 5rem;
  left: 60rem;
  font-size: 3rem;
  color: #073799;
  transition: all 1s ease;
} */

/* מעבר למרכז */
/* .title.centered {
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  color: #073799;
  text-align: center;
} */

/* ===== טקסט ===== */
.next-screen {
  position: absolute;
  top: 15rem;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #073799;
}

.next-screen p {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.next-screen button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
}

/* ===== פופאפ ===== */
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;
}

.popup-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
}

/* ===== fade ===== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>