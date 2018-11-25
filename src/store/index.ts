import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

interface State {
  articles: StoreState.articles[];
}

const state: State = {
  articles: [],
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
});
