import { createApp } from 'vue';
import { createMemoryHistory, createWebHashHistory, createRouter } from 'vue-router'
import App from './App.vue';

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import 'primevue/resources/primevue.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const Signin = () => import(/* webpackChunkName: "group-signin" */ './components/Signin.vue')
const Signup = () => import(/* webpackChunkName: "group-signup" */ './components/Signup.vue')

const mount = (el, { onLogin, onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory();

  const routes = [
    { path: '/auth/signup', component: Signup, props: { onLogin } },
    { path: '/auth/signin', component: Signin, props: { onLogin } }
  ]

  const router = createRouter({ history, routes })

  router.beforeEach((to, from) => {
    if (onNavigate && to.path !== from.path) {
      onNavigate(to)
    }
  })

  createApp(App).use(router).mount(el);

  if (initialPath) {
    router.replace(initialPath)
  }

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        router.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('auth-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createWebHashHistory() });
  }
}

export { mount };
