import { createRouter, createWebHashHistory } from 'vue-router'
import Top from '../views/Top.vue'
import ItemPage from '../views/ItemPage.vue'
import UserPage from '../views/UserPage.vue'

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
  },
  {
    path: '/item/:id',
    name: 'ItemPage',
    component: ItemPage
  },
  {
    path: '/user/:user',
    name: 'UserPage',
    component: UserPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
