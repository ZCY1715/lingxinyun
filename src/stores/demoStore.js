import { defineStore } from 'pinia'

const demoStore = defineStore("demo", {
  state: () => {
    return {
      count: 1,
    }
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
        paths: ["count"] 
      }
    ]
  }
})