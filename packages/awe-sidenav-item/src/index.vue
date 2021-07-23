<template>
  <!-- 如果带属性值head，则为一级菜单，
否则为二级。
如果属性值为children，则为三级菜单，否则为二级。
 -->
  <div
    :class="[
      head ? 'awe-sidenav-item' : 'awe-item-child',
      children ? 'awe-item-child-child':'',
      disabled ? 'disabled' : '',
    ]"
  >
    <div class="awe-item-header">
      <div
        v-if="head"
        class="awe-item-head"
      />
    </div>
    <div class="awe-right">
      <div class="awe-item-font">
        {{ name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AweSidenavItem',
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
    },
    children: {
      type: Boolean,
      default: false
    }
  },
  mounted () {

  },
  methods: {
  }
};
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
