import { ActionTree } from 'vuex';
import axios from 'axios';
import TYPES from './types';

const actions: ActionTree<any, any> = {
  // ajax 初始化
  async initAjax({ dispatch }) {
    dispatch('getArticles');
    dispatch('getCarousels');
  },
  async getArticles({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/articles')
      .then((response) => response.data).catch((e: string) => console.error(e));
    if (res && res.code === 200) {
      commit(TYPES.SET_ARTICLES, res.result.articles);
    }
  },
  async getCarousels({ state, commit }) {
    const res: Ajax.AjaxResponse = await axios.get('/carousels')
      .then((response) => response.data).catch((e: string) => console.error(e));
    if (res && res.code === 200) {
      commit(TYPES.SET_CAROUSELS, res.result.list);
    }
  },
};

export default actions;
