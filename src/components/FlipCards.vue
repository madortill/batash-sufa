<template>
<div class="page-wrapper">
   <div class="titles" >
        <p class="title-fc">{{ data.safetyCards[0].titleFc }}</p>
  </div>

    <div id="safety-rules">
  
        <div
  v-for="(card, index) in safetyCards.slice(1, 3)"
  :key="index"
  :class="['flip-card', onStart]"
>
        <div class="flip-card-inner">
  
          <!-- FRONT (כחול) -->
          <div class="flip-card-front" :style="{ '--card-color': card.color }">
            <p class="text-front">{{ card.title }}</p>
          </div>
  
          <!-- BACK (לבן) -->
          <div class="flip-card-back">
            <p class="text-back">{{ card.text }}</p>
          </div>
  
        </div>
      </div>
  
    </div>
</div>
  </template>
  
<script>
export default {
    name: "FlipCards",
  
    inject: ["dataStore"],
  
    data() {
      return {
        onStart: "start",
        hoveredCards: [],
        counterHovered: 0,
        showNextBtn: false,
      };
    },
  
    computed: {
      data() {
        return this.dataStore.data.value;
      },
  
      safetyCards() {
        return this.data?.safetyCards || [];
      },

      safetyTitles() {
    return this.data?.safetyTitles || {};
  }
    },
  
    methods: {
      hoverCardsCounter(index) {
        if (this.hoveredCards[index] !== true) {
          this.hoveredCards[index] = true;
          this.counterHovered++;
        }
  
        if (
          this.counterHovered === this.safetyCards.length &&
          !this.showNextBtn
        ) {
          this.$emit("showNextBtn");
          this.showNextBtn = true;
        }
      }
    },
  
    mounted() {
      setTimeout(() => {
        this.onStart = "off";
      }, 200);
    }
  };
</script>

<style>
/* ===== כל הקארד ===== */
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titles{
  margin-top: 7rem;
}
.title-fc {
  font-family: "Karantina-Bold";
font-size: 5rem;
margin: 0; 
top: 1rem;
}

.mini-title-fc {
padding: 0;
font-family: "Karantina-Regular";
font-size: 4rem;
margin: 0;
}

#safety-rules {
  display: flex;
  justify-content: center; /* מרכז */
  gap: 5rem; /* רווח בין כרטיסים */
  margin-top: 5rem; /* רווח מהכותרות */
}

.flip-card {
  width: 18rem;
  height: 22rem;
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
}

/* flip */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* ===== FRONT (כחול) ===== */
.flip-card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
 

  background: #073799;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* ===== BACK (לבן) ===== */
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  background: white;
  color: black;

  transform: rotateY(180deg);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}       

/* טקסט */
.text-front{
  font-family: "rubik";
  font-size: 3rem;
  text-align: center;

}

.text-back {
    font-family: "Karantina-light";
  font-size: 2.5rem;
  text-align: center;
}
</style>