import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  Auth from "../components/Auth.vue";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import( /* webpackChunkName: "auth" */ '../components/Auth.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import( /* webpackChunkName: "auth" */ '../components/User.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
