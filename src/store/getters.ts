import { GetterTree } from 'vuex';
const getters: GetterTree<any, any> = {
  load(state): boolean {
    const { articles } = state;
    console.log(articles);
    return !!(articles.length);
  },
};

export default getters;
