<template>
  <div class="abs-component">

    <!-- כותרות וטקסט -->
    <div class="titles">
      <p class="title-a">{{ data.Abs[0].title }}</p>
      <p class="mini-title-a">{{ data.Abs[1].miniTitle }}</p>
    </div>

    <div class="text-wrap">
      <p class="abs-text">{{ data.Abs[2].text }}</p>
    </div>

    <!-- כפתור מצלמה (אם תרצה להחזיר) -->
    
    <div class="camera-button-wrap">
      <button class="camera-button" @click="openPopup">
        📷 {{ data.Abs[3].buttonText }}
      </button>
    </div>
   

    <!-- פופאפ -->
    <div v-if="popupOpen" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="popup-close" @click="closePopup">✖</button>
        <h2>📷</h2>
        <p>זה תוכן הפופאפ</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Abs",

  inject: ["dataStore"],

  data() {
    return {
      popupOpen: false,
    };
  },

  computed: {
    data() {
      return this.dataStore.data.value;
    },
  },

  methods: {
    openPopup() {
      this.popupOpen = true;
      this.$emit("popup-status", true);
    },
    closePopup() {
      this.popupOpen = false;
      this.$emit("popup-status", false);
    },
  },
};
</script>

<style>
.titles {
  margin-top: 7rem;
}

.title-a {
  font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0;
}

.mini-title-a {
  font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
}

.text-wrap {
  width: 65vw;
  padding: 2rem;
}

.abs-text {
  color: black;
  font-family: "rubik";
  font-size: 2rem;
}
</style>
  
  <style scoped>
  /* סגנונות כותרות וטקסט */
  .titles {
    margin-top: 7rem;
  }
  .title-a {
    font-family: "Karantina-Bold";
    font-size: 5rem;
    margin: 0;
  }
  .mini-title-a {
    font-family: "Karantina-Regular";
    font-size: 4rem;
    margin: 0;
  }
  .text-wrap {
    width: 65vw;
    padding: 2rem;
  }
  .abs-text {
    color: black;
    font-family: "Rubik";
    font-size: 2rem;
    letter-spacing: 0rem;
  }
  
  /* כפתור מצלמה במרכז התחתון, שקוף */
  .camera-button-wrap {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
  }
  .camera-button {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    background: none;
    border: 2px solid #1976d2;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .camera-button:hover {
    background: #1976d2;
    color: white;
  }
  
  /* הפופאפ */
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
    position: relative;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 50%;
    max-width: 500px;
    text-align: center;
  }
  
  /* כפתור סגירה בצד ימין */
  .popup-close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  /* אנימציית fade-in לפופאפ */
  .popup-overlay,
  .popup-content {
    animation: fadeIn 0.3s ease;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  </style>