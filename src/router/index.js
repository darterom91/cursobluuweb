import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
     component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/seccion1',
    name: 'Seccion1',
    component: () => import(/* webpackChunkName: "Seccion1" */ '../views/Seccion1.vue')
  },
  {
    path: '/seccion2',
    name: 'Seccion2',
    component: () => import(/* webpackChunkName: "Seccion1" */ '../views/Seccion2.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
