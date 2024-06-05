import { createRouter, createWebHistory } from 'vue-router'
import Country from '../views/Country.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Country
    }
  ]
})

export default router
