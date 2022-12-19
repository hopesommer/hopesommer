import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import Resume from "@/views/Resume.vue"

import Projects from '@/views/Projects.vue'
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
    },
    {
      path: '/projects',
      component: Projects,
    }
  ],
})
