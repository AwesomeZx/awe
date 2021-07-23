import aweTree from './src/index.vue';

aweTree.install = function (Vue) {
  Vue.component(aweTree.name, aweTree);
};

export default aweTree;
