import TYPES from './types';
import { MutationTree } from 'vuex';

const mutations: MutationTree<any> = {
  [TYPES.SET_ARTICLES](state, articles): void {
    state.articles = articles;
  },
  [TYPES.SET_CAROUSELS](state, carousels): void {
    state.carousels = carousels;
  },
};

export default mutations;
