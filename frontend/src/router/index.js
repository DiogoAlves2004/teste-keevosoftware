import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/products/register',
      name: 'products/register',
      component: () => import('../views/ProducstRegisterView.vue')
    },
    {
      path: '/comingsoon',
      name: 'comingsoon',
      component: () => import('../views/ComingSoonView.vue')
    }
  ]
})

export default router


