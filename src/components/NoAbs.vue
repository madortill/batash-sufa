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
  
      <div class="road-container">
        <img src="@/assets/media/road.png" class="road" />
  
        <img
  src="@/assets/media/car.png"
  class="car"
  :class="{
    drive: !isBraking,
    braking: isBraking
  }"
/>
  
        <h1 class="title" :class="{ centered: titleCentered }">
          {{ data.NoAbs?.[0]?.title }}
        </h1>
      </div>
  
      <!-- טקסט -->
      <transition name="fade">
        <div v-if="showText" class="next-screen">
          <p>{{ data?.Abs?.[1]?.text  }}</p>
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
      isBraking: false,
      titleCentered: false, // מתחיל בצד
      showText: false,      // הטקסט מוסתר
      popupOpen: false,
    };
  },

  computed: {
    data() {
      return this.dataStore.data.value;
    }
  },

  mounted() {
    // שלב 1 – בלימה
    setTimeout(() => {
      this.isBraking = true;
    }, 1000);

    // שלב 2 – כותרת למרכז
    setTimeout(() => {
      this.titleCentered = true;
    }, 2000);

    // שלב 3 – הופעת טקסט
    setTimeout(() => {
      this.showText = true;
    }, 3000);
  },

  methods: {
    openPopup() {
      this.popupOpen = true;
    }
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

/* ===== כביש ===== */
.road {
  position: absolute;
  width: 70rem;
  height: 100vh;
  object-fit: cover;

  left: 30rem;
  transform: translateX(-50%); /* מרכז אמיתי */

  z-index: 1;
}

/* ===== רכב ===== */
.car {
  position: absolute;
  bottom: 5%;
  left: 48rem;
  transform: translateX(-50%);
  width: 150px;
  z-index: 2;
}

/* מצב נסיעה */
.car.drive {
  animation: drive 3s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
}

/* מצב בלימה */
.car.braking {
  animation: brake 0.8s ease-out forwards;
}

/* תנועה קדימה */
@keyframes drive {
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
}
/* בלימה קטנה */
@keyframes brake {
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
}

/* ===== כותרת ===== */
.title {
  position: absolute;
  top: 10%;
  left: 10%;
  font-size: 3rem;
  color: white;
  z-index: 3;
  font-family: "Karantina-Bold";
font-size: 5rem;
color: white;
  transition: all 1s ease;
  transform: translateX(0);
}

/* מעבר למרכז */
.title.centered {
  top: 7rem;
  left: 85rem;
  color: #073799;
  transform: translateX(-50%);
  text-align: center;
}

/* ===== טקסט ===== */
.next-screen {
  position: absolute;
  top: 15rem;
  left: 80rem;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #073799;
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
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>