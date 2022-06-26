import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'LoginPage', component: () => import('../views/LoginPage/index.vue') },
  { path: '/home', name: 'HomePage', component: () => import('../views/HomePage/index.vue') },

]

const Router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default Router
