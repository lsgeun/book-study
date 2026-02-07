import { defineStore } from "pinia";
export const useCountOptionStore = defineStore('countOption', {
  state() {
    return {
      num: 10,
      json: null,
    };
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    },
    doubleNumPlusOne() {
      return this.doubleNum + 1;
    },
  },
  actions: {
    increment() {
      this.num++;
    },
    getJSON(url) {
      this.increment();
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.json = json;
        });
    },
  },
});
