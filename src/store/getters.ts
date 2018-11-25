import { GetterTree } from 'vuex';
const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { articles } = state;
    return !!(articles.length);
  },
};

export default getters;
