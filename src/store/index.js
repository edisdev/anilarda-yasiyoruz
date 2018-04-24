// import vue and vuex //
import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import Persons from './modules/Person';

// use Vuex
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    Persons
  },
});
