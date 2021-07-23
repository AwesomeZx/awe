import aweSidenavItem from './src/index.vue';

aweSidenavItem.install = function (Vue) {
  Vue.component(aweSidenavItem.name, aweSidenavItem);
};

export default aweSidenavItem;
