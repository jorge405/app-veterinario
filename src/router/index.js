import { createRouter, createWebHistory } from 'vue-router'
import login from '@/views/login.vue';
import usuario from '@/views/usuario.vue';
import consultas from '@/views/consultas.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: login,
    },
    {
      path:'/usuario',
      name:'usuario',
      component:usuario 
    },
    {
      path:'/consultas',
      name:'consultas',
      component:consultas
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    }, */
  ],
})

export default router
