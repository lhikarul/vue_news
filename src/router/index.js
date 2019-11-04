import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router