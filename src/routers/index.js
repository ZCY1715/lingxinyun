import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"

const routes = [
<<<<<<< HEAD
  { path: '/', redirect: '/login'},
  { path: '/login', component:()=>import('../views/LoginPage/index.vue')}, 
  { path: '/home', component:()=>import('../views/HomePage/index.vue')}
=======
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage/index.vue")
  },
  {
    path: "/game",
    name: "GamePage",
    component: () => import("../views/GamePage/index.vue")
  },
  {
    path: "/discover",
    name: "DiscoverPage",
    component: () => import("../views/DiscoverPage/index.vue")
  },
  {
    path: "/forum",
    name: "ForumPage",
    component: () => import("../views/ForumPage/index.vue")
  },
  {
    path: "/news",
    name: "NewsPage",
    component: () => import("../views/NewsPage/index.vue")
  },
>>>>>>> 51fa8af1be1a5194700a7c71d5ba4e3e4bed0352
]

const Router = createRouter({
  //history: createWebHistory(),
  history: createWebHashHistory(),
  routes
})

export default Router
