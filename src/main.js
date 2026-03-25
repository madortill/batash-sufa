import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";

import { createDataStore } from "./data/dataStore.js"; // ✅ מתוקן

const app = createApp(App);


const dataStore = createDataStore();
app.provide("dataStore", dataStore);

app.mount("#app");