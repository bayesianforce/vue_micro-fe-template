import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App';

const MarketingApp = () => import(/* webpackChunkName: "group-marketing" */ './components/MarketingApp.vue')
const AuthApp = () => import(/* webpackChunkName: "group-authApp" */ './components/AuthApp.vue')
const DashboardApp = () => import(/* webpackChunkName: "group-dashboardApp" */ './components/DashboardApp.vue')

const routes = [
  {
    path: '/:subpath?',
    component: MarketingApp,
  },
  {
    path: '/auth/:subpath?',
    component: AuthApp,
  },
  {
    path: '/dashboard',
    component: DashboardApp,
    meta: { requiresAuth: true }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#root');
