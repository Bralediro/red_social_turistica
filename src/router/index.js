import Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import VueFormGenerator from "vue-form-generator"
import Form from '../views/Form.vue'
import CrearUsuario from "@/views/Form.vue";
import Usuario from '../views/Usuario.vue'
import Login from '@/views/Login.vue'
import Lugares from '@/views/lugares/Lugares.vue';
import Vides from '@/views/lugares/Vides.vue';
import Fmundo from '@/views/lugares/Fmundo.vue';
import Ojo from '@/views/lugares/Ojo.vue';
import Hornoyaco from '@/views/lugares/Hornoyaco.vue';
import Mpaway from '@/views/lugares/Mpaway.vue';
import Sol from '@/views/lugares/Sol.vue';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

//import 'bootstrap/dist/css/bootstrap.css'
//import 'bootstrap-vue/dist/bootstrap-vue.css'
//import Login from "../views/Login.vue"

//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
   
  {
    path: '/form',
    name: 'Form',
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
  },
  {
    path: '/lugares',
    name: 'Lugares',
    component: Lugares,
  },
  {
    path: '/vides',
    name: 'vides',
    component: Vides,
  },
  {
    path: '/fmundo',
    name: 'fmundo',
    component: Fmundo,
  },
  {
    path: '/ojo',
    name: 'ojo',
    component: Ojo,
  },
  {
    path: '/hornoyaco',
    name: 'hornoyaco',
    component: Hornoyaco,
  },
  {
    path: '/mpaway',
    name: 'mpaway',
    component: Mpaway,
  },
  {
    path: '/sol',
    name: 'sol',
    component: Sol,
  },
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
