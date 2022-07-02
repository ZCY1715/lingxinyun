import { createRouter, createWebHistory } from "vue-router"

const routes = [
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
  {
    path: "/user",
    name: "UserPage",
    component: () => import("../views/UserPage/index.vue")
  },
  {
    path: "/search",
    name: "SearchPage",
    props: route => ({ q: route.query.q }),
    component: () => import("../views/SearchPage/index.vue")
  }
]

const Router = createRouter({
  history: createWebHistory(),
  routes
})

export default Router
