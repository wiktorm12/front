import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const useComponent = component => () =>
  import(`./page/${component}/Index.vue`)

const RouterVue = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: useComponent("Home")
    },
    {
      path: '/error',
      name: 'error',
      component: useComponent("Error")
    }
  ]
});

export default RouterVue;