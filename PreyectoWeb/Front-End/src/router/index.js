import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Auth/Login.vue'
import Register from '../views/Auth/Register.vue'
import Temperaturas from '../views/Temperaturas.vue'
import Firebase from 'firebase'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/temperatura',
    name: 'temperatura',
    component: Temperaturas,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(ruta => ruta.meta.requiresAuth)) {
    const user = Firebase.auth().currentUser;
    if (user) {
      next();
    }else {
      next({
        name: 'login'
      })
    }
  } else {
    next();
  }
})



export default router
