//import Vue from "vue"
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueFormGenerator from "vue-form-generator"
import Form from '../views/Form.vue'
import Usuario from '../views/Usuario.vue'

//import Login from "../views/Login.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
