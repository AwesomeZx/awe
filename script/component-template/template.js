import aweComponentName from './src/index.vue';

aweComponentName.install = function (Vue) {
  Vue.component(aweComponentName.name, aweComponentName);
};

export default aweComponentName;
