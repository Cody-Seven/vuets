import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

interface State {
  articles: StoreState.articles[];
  carousels: StoreState.carousels[];
}

const state: State = {
  articles: [],
  carousels: [],
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
