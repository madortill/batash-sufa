<template>
    <div class="page">
  
      <!-- כותרת -->
      <h1 class="main-title">מערכות ותפעולן</h1>
      <h2 class="sub-title">חיבת העברה</h2>
  
      <div class="content">
  
        <!-- צד שמאל -->
        <div class="left-buttons">
          <button class="btn" @click="playSegment(10, 30)">2H</button>
          <p>{{ data?.texts?.h2 }}</p>
  
          <button class="btn" @click="playSegment(40, 80)">4H</button>
          <p>{{ data?.texts?.h4 }}</p>
        </div>
  
        <!-- תמונה באמצע -->
        <div class="center">
          <img :src="data?.image" alt="center" class="center-img" />
        </div>
  
        <!-- צד ימין -->
        <div class="right-buttons">
          <button class="btn" @click="playSegment(90, 120)">N</button>
          <p>{{ data?.texts?.n }}</p>
  
          <button class="btn" @click="playSegment(130, 160)">L</button>
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
  
    </div>
  </template>
  
  <script>
  export default {
    name: "NewRengler",
  
    inject: ["dataStore"],
  
    data() {
      return {
        videoUrl: null,
        baseVideo: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
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
  .page {
    background-color: #e6d8a6;
    min-height: 100vh;
    text-align: center;
    padding: 20px;
  }
  
  .main-title {
    color: #1e4fa3;
    font-size: 2.5rem;
    font-weight: bold;
  }
  
  .sub-title {
    color: #1e4fa3;
    margin-bottom: 30px;
  }
  
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  
  /* כפתורים */
  .btn {
    background-color: #6e8fc1;
    color: white;
    border: none;
    padding: 10px 30px;
    font-size: 1.2rem;
    margin: 10px 0;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .btn:hover {
    background-color: #5674a3;
  }
  
  .left-buttons,
  .right-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
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
    margin-top: 30px;
  }
  
  .video-wrapper iframe {
    width: 600px;
    height: 340px;
  }
  </style>