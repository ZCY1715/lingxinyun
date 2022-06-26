import { defineStore } from 'pinia'

const userStore = defineStore("use", {
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
        key: "token",
        storage: localStorage, // sessionStorage 
        paths: ["count"] 
      }
    ]
  }
})