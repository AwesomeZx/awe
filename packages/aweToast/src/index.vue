<template>
  <div class="awe-toast">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AweToast',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  mounted () {
    setTimeout(() => {
      this.$el.remove();
      this.$destroy();
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
