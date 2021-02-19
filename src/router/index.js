import Vue from 'vue'
import VueRouter from 'vue-router'
import Store  from '../store'
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
    component: () => import(/* webpackChunkName: "Seccion2" */ '../views/Seccion2.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import(/* webpackChunkName: "Blog" */ '../views/Blog.vue')
  },
  {
    path: '/blog/:id',
    name: 'Articulo',
    component: () => import(/* webpackChunkName: "    name: 'Articulo',
" */ '../views/Articulo.vue')
  },
  {
    path: '/seccion4',
    name: 'Seccion4',
    component: () => import(/* webpackChunkName: "Seccion4" */ '../views/Seccion4.vue')
  },
  {
    path: '/seccion5',
    name: 'Seccion5',
    component: () => import(/* webpackChunkName: "Seccion5" */ '../views/Seccion5.vue')
  },
  {
    path: '/crud',
    name: 'CRUD',
    component: () => import(/* webpackChunkName: "CRUD" */ '../views/CRUD.vue')
  },
  {
    path: '/firebasecrud',
    name: 'FirebaseCRUD',
    component: () => import(/* webpackChunkName: "FirebaseCRUD" */ '../views/FirebaseCRUD.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "    name: 'Editar',
" */ '../views/Editar.vue')
  },
  {
    path: '/editarfir/:id',
    name: 'EditarFir',
    component: () => import(/* webpackChunkName: "    name: 'EditarFir',
" */ '../views/EditarFir.vue'),
    meta: {rutaProtegida: true}
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "CRUD" */ '../views/Registro.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "CRUD" */ '../views/Login.vue')
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.meta.rutaProtegida);
  if (to.meta.rutaProtegida) {
    if (Store.getters.userAutenticado) {
      next()
    }
  }else{
    next()
  }
})

export default router
