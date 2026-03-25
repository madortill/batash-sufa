<template>
    <div class="scene">
  
      <!-- סצנה עם רכב -->
      <div class="road-container">
        <img src="@/assets/media/road.png" class="road" />
  
        <img
          src="@/assets/media/car.png"
          class="car"
          :class="{ braking: isBraking }"
        />
  
        <!-- כותרת בצד -->
        <h1
          class="title"
          :class="{ centered: titleCentered }"
        >
          {{ data?.Abs[0]?.title || "כותרת ראשית" }}
        </h1>
      </div>
  
      <!-- טקסט נוסף + כפתור אחרי 3 שניות -->
      <transition name="fade">
        <div v-if="showText" class="next-screen">
          <p>{{ data?.Abs[1]?.text || "תוכן טקסט נוסף" }}</p>
          <button @click="openPopup">פתח פופאפ</button>
        </div>
      </transition>
  
      <!-- הפופאפ -->
      <div v-if="popupOpen" class="popup-overlay" @click="popupOpen=false">
        <div class="popup-content" @click.stop>
          <h2>סרטון</h2>
          <p>כאן יהיה סרטון</p>
          <button @click="popupOpen=false">סגור</button>
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
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
  </script>
  
  <style scoped>
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
  </style>