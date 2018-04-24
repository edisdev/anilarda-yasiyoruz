/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { getPersons } from '@/api/Person';

const state = {
  data: [],
  loading: false,
  loaded: false
};

// getters
const getters = {
  Persons: state => ({
    data: state.data,
    loaded: state.loaded,
    loading: state.loading
  })
};

// mutations
const mutations = {
  setPersons(state, persons) {
    state.data = persons;
    state.loaded = false;
    state.loading = true;
  },
  setLoading(state) {
    state.loaded = true;
    state.loading = false;
  }
};

// actions
const actions = {
  async getPersons({ commit }) {
    try {
      const res = await getPersons();
      commit('setPersons', res);
      commit('setLoading');
    } catch (error) {
      console.log(error);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
