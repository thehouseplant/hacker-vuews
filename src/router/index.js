import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '../views/Top.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/new',
    name: 'New',
    component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import(/* webpackChunkName: "show" */ '../views/Show.vue')
  },
  {
    path: '/ask',
    name: 'Ask',
    component: () => import(/* webpackChunkName: "ask" */ '../views/Ask.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: () => import(/* webpackChunkName: "jobs" */ '../views/Jobs.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
