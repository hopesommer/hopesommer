import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Resume from "@/views/Resume.vue"

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/resume',
      component: Resume,
    }
  ],
})
