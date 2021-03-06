import { createRouter, createWebHistory } from "vue-router"

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: () => import("../views/LoginPage/index.vue")
  },
  {
    path: "/",
    name: "HomePage",
    component: () => import("../views/HomePage/index.vue")
  },
  {
    path: "/game",
    name: "GamePage",
    component: () => import("../views/GamePage/index.vue"),
  },
  {
    path: '/gameCreate',
    name: 'CreateGame',
    component: () => import("../views/GamePage/Create.vue")
  },
  {
    path: '/gameReview',
    name: 'ReviewGame',
    component: () => import("../views/GamePage/Review.vue")
  },
  {
    path: "/discover",
    name: "DiscoverPage",
    component: () => import("../views/DiscoverPage/index.vue"),
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
    path: "/user/:uid",
    component: () => import("../views/UserPage/index.vue"),
    children: [
      {
        path: '',
        name: 'UserPage',
        props: route => ({ type: route.params.type }),
        component: () => import("../views/UserPage/works.vue")
      },
      {
        path: 'drafts',
        name: 'Drafts',
        component: () => import("../views/UserPage/drafts.vue")
      },
      {
        path: 'collections',
        name: 'Collections',
        component: () => import("../views/UserPage/collections.vue")
      },
      {
        path: 'forum',
        name: 'forum',
        component: () => import("../views/UserPage/forum.vue")
      },
      {
        path: 'tasks',
        name: 'Tasks',
        component: () => import("../views/UserPage/tasks.vue")
      },
      {
        path: 'analysis',
        name: 'Analysis',
        component: () => import("../views/UserPage/analysis.vue")
      },
      {
        path: 'NFT',
        name: 'NFT',
        component: () => import("../views/UserPage/NFT.vue")
      }
    ]
  },
  {
    path: '/modifyUserInfo',
    name: 'ModifyUserInfoPage',
    component: () => import("../views/UserPage/ModifyUserInfoPage/index.vue")
  },
  {
    path: "/search",
    name: "SearchPage",
    props: route => ({ q: route.query.q }),
    component: () => import('../views/SearchPage/index.vue')
  },
  {
    path: '/chat',
    name: 'ChatPage',
    component: () => import('../views/ChatPage/index.vue')
  }
]

const Router = createRouter({
  history: createWebHistory(),
  routes
})

export default Router