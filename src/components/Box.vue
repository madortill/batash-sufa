<template>
     

  
      <!-- כותרת -->
      <h1 class="main-title">{{ data.Box[0].title }}</h1>
      <h2 class="sub-title">{{ data.Box[0].minTitle }}  </h2>
  
      <div class="content">
  
        <!-- צד שמאל -->
        <div class="right-buttons">
  <div class="item">
    <button class="btn" @click="playSegment(161, 174)">
      {{ data.Box[0].t3 }}
    </button>
    <p>{{ data.Box[0].t3Text }}</p>
  </div>

  <div class="item">
    <button class="btn" @click="playSegment(176, 266)">
      {{ data.Box[0].t4 }}
    </button>
  </div>
</div>
  
        <!-- תמונה באמצע -->
        <div class="center">
          <img src="../assets/media/תמונה34.jpg" alt="center" class="center-img" />
        </div>
  
        <!-- צד ימין -->
        
<div class="left-buttons">
  <div class="item">
    <button class="btn" @click="playSegment(0, 54)">
      {{ data.Box[0].t1 }}
    </button>
    <p>{{ data.Box[0].t1Text }}</p>
  </div>

  <div class="item">
    <button class="btn" @click="playSegment(55, 160)">
      {{ data.Box[0].t2 }}
    </button>
    <p>{{ data.Box[0].t2Text }}</p>
  </div>
</div>
      </div>
  
      <!-- וידאו -->
      <div class="video-wrapper" v-if="videoUrl">
        <iframe
          :src="videoUrl"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
  
   
  </template>
  
  <script>
  export default {
    name: "NewRengler",
  
    inject: ["dataStore"],
  
    data() {
      return {
        videoUrl: null,
        baseVideo: "https://youtu.be/Bcl6ftXyq7c?si=2DfRuA48y2282YRc"
      };
    },
  
    computed: {
      data() {
        return this.dataStore.data.value;
      }
    },
  
    methods: {
      playSegment(start, end) {
        this.videoUrl = `${this.baseVideo}?start=${start}&end=${end}&autoplay=1`;
      }
    }
  };
  </script>
  
  <style scoped>
 
  
  .main-title {
    padding-top: 5rem;
    font-family: "Karantina-Bold";
  font-size: 5rem;
  margin: 0;
  }
  
  .sub-title {
    font-family: "Karantina-Regular";
  font-size: 4rem;
  margin: 0;
  }
  
  .content {
  padding-top: 5rem;
  display: flex;
  justify-content: space-between; /* יותר נכון מ-center */
  align-items: center;
}

/* כל צד */
.left-buttons,
.right-buttons {
  display: flex;
  flex-direction: column;
  gap: 3rem; /* רווח בין בלוקים */
}

/* בלוק של כפתור + טקסט */
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem; /* רווח בין כפתור לטקסט */
  text-align: center;
  font-family: 'karantina-light';
  font-size: 2rem;
  color: black;
}

/* כפתור */
.btn {
  background-color: #6e8fc1;
  color: white;
  font-size: 2rem;
  border: none;
  padding: 10px 40px; /* קצת יותר רוחב */
  
  cursor: pointer;
  border-radius: 0.5rem;
}

/* טקסט */
.item p {
  max-width: 20rem;
}

  /* תמונה */
  .center-img {
    width: 250px;
    height: 250px;
    object-fit: contain;
    border: 1px solid #999;
  }
  
  /* וידאו */
  .video-wrapper {
    margin-top: 2.5rem;
  }
  
  .video-wrapper iframe {
    width: 40vw;
    height: 40vh;
  }
  </style>