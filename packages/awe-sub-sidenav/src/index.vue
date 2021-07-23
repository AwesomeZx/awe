<template>
  <div>
    <div
      :class="[
        head ? 'awe-sub-sidenav' : 'awe-sub-child',
        disabled ? 'disabled' : '',
      ]"
      :disabled="disabled"
    >
      <div
        v-if="head"
        class="awe-sub-header"
      >
        <div class="awe-sub-head" />
      </div>
      <div class="awe-right">
        <div class="awe-sub-font">
          {{ name }}
        </div>
        <div
          class="awe-sub-footer"
          @click="handleExpand"
        >
          <div class="awe-sub-icon" />
        </div>
      </div>
    </div>
    <div v-if="!disabled && expand">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AweSubSidenav',
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean
    },
    head: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      expand: false
    };
  },
  methods: {
    handleExpand () {
      this.expand = !this.expand;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
