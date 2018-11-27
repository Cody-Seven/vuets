import { GetterTree } from 'vuex';
const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { articles, carousels } = state;
    return !!(articles.length && carousels.length);
  },
};

export default getters;
