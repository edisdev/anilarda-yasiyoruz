/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import { getPersons, createPerson, showPerson } from '@/api/Person';

const state = {
  data: [],
  loading: false,
  loaded: false,
  active: [],
  creating: {
    loading: false,
    loaded: false,
  }
};

// getters
const getters = {
  Persons: state => ({
    data: state.data,
    active: state.active,
    loaded: state.loaded,
    loading: state.loading,
    creating: state.creating
  })
};

// mutations
const mutations = {
  setPersons(state, persons) {
    state.data = persons;
    state.loaded = false;
    state.loading = true;
  },
  setActivePerson(state, person) {
    state.active = person;
  },
  setLoading(state) {
    state.loaded = true;
    state.loading = false;
  },
  setCreatedLoading(state) {
    state.creating.loaded = false;
    state.creating.loading = true;
  },
  setCreatedLoaded(state) {
    state.creating.loaded = true;
    state.creating.loading = false;
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
  },
  async newPerson({ commit }, data) {
    try {
      commit('setCreatedLoading');
      await createPerson(data);
      // dispatch('getPersons');
      commit('setCreatedLoaded');
    } catch (error) {
      console.log(error);
    }
  },
  async showPerson({ commit }, url) {
    try {
      const res = await showPerson(url);
      commit('setActivePerson', res);
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
