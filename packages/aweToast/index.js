import aweToast from './src/index.vue';

aweToast.install = function (Vue) {
  Vue.prototype.$toast = function (message) {
    const Constructor = Vue.extend(aweToast);
    const toast = new Constructor();
    toast.$slots.default = [message];
    toast.$mount();
    document.body.appendChild(toast.$el);
  };
};

export default aweToast;
