import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DemoView from '../views/DemoView.vue';
import AboutView from '@/views/AboutView.vue';
import ThankYouView from '@/views/ThankYouView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/demo',
      name: 'demo',
      component: DemoView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/thank_you',
      name: 'thank_you',
      component: ThankYouView
    }
  ]
});

export default router;
