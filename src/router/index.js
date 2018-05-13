import Vue from 'vue';
import Router from 'vue-router';
// components
import Home from '@/pages/Home';
import NewPerson from '@/pages/NewPerson';
import PersonDetail from '@/pages/PersonDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/kisi-ekle',
      name: 'NewPerson',
      component: NewPerson
    },
    {
      path: '/kisiler/:personUrl',
      props: true,
      name: 'PersonDetail',
      component: PersonDetail
    }
  ]
});
