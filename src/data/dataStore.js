import { reactive, computed } from "vue";
import myData from "../data/myData.json";


export function createDataStore() {
  
  const state = reactive({
    currentJSON: "he", // ברירת מחדל
  });

 
  const data = computed(() => {
    return myData[state.currentJSON];
  });

 
  const switchJSON = (key) => {
    state.currentJSON = key;
  };

  return {
    state,
    data,
    switchJSON,
  };
}