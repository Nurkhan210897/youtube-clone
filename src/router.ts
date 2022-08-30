import Home from "./pages/Home.vue"
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
 history: createWebHistory(),
 routes: [
  {
   path: "/",
   name: "Home",
   component: Home
  }
 ]
})

export {
 router
}