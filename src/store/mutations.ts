import TYPES from './types';
import { MutationTree } from 'vuex';
const mutations: MutationTree<any> = {
  [TYPES.SET_ARTICLES](state, articles): void {
    state.articles = articles;
  },
};

export default mutations;
