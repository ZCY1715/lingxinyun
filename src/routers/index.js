import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', name: 'LoginPage', component: () => import('../views/LoginPage/index.vue') },
  { path: '/home', name: 'HomePage', component: () => import('../views/HomePage/index.vue') },
  { path: '/dailytask', name: 'DailyTaskPage', component: () => import('../views/DailyTaskPage/index.vue') },
  { path: '/filemanage', name: 'FileManagePage', component: () => import('../views/FileManagePage/index.vue') },
  { path: '/label', name: 'LabelPage', component: () => import('../views/LabelPage/index.vue') },
  { path: '/message', name: 'MessagePage', component: () => import('../views/MessagePage/index.vue') },
  { path: '/money', name: 'MoneyPage', component: () => import('../views/MoneyPage/index.vue') },
  { path: '/sandbox', name: 'SandBoxPage', component: () => import('../views/SandBoxPage/index.vue') },
  { path: '/user', name: 'UserPage', component: () => import('../views/UserPage/index.vue') },
  { path: '/vz', name: 'VzPage', component: () => import('../views/VzPage/index.vue') },
  { path: '/forum', name: 'ForumPage', component: () => import('../views/ForumPage/index.vue') },
  { path: '/broswer', name: 'BroswerPage', component: () => import('../views/BroswerPage/index.vue') },

  
  { path: '/:pathMatch(.*)', redirect:'/login' },


]

const Router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default Router
