import { defineStore } from 'pinia'

const demoStore = defineStore("demo", {
  state: () => {

  },

  getters: {

  },

  actions: {

  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "",
        storage: localStorage, // sessionStorage 
        // paths: [] 
      }
    ]
  }
})