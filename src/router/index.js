//import Vue from "vue"
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueFormGenerator from "vue-form-generator"
import Form from '../views/Form.vue'
import Usuario from '../views/Usuario.vue'
import Login from '@/views/Login.vue'
//import Login from "../views/Login.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true
    }
  },
   
  {
    path: '/form',
    name: 'form',
    component: Form,
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
 router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token")
  if (to.matched.some(record => record.meta.auth)){
    if(!token){
      next('/login')
    }
  }
  next()
 })

export default router
