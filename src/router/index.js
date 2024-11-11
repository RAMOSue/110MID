import { createRouter, createWebHistory } from 'vue-router';
import AuthPage from '../views/AuthPage.vue'; // Ensure AuthPage.vue is in the views folder
import Culture from '../views/Culture.vue'; // Ensure Culture.vue is also in the views folder

const routes = [
  {
    path: '/auth',
    name: 'AuthPage',
    component: AuthPage, // Points to AuthPage.vue
  },
  {
    path: '/culture',
    name: 'Culture',
    component: Culture, // Points to Culture.vue
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
