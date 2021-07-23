<template>
  <div>
    <ul>
      <li><a>&laquo;</a></li>
      <li><a>&lsaquo;</a></li>
      <li
        v-for="(item,index) in awePageKeyMap"
        :key="index"
        :class="size"
        @click="handClickPage(item.value)"
      >
        <a :class="{active: item.value === aweCurrent}">{{ item.value }}</a>
      </li>
      <li><a>&rsaquo;</a></li>
      <li><a>&raquo;</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AwePagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    size: {
      type: String,
      default: 'sm'
    },
    onChangePgae: {
      type: Function,
      default: function () {}
    }
  },
  data: function () {
    return {
      aweTotal: this.total,
      awePageSize: this.pageSize,
      aweCurrent: this.current,
      awePageKeyMap: [],
      itemStatus: ''
    };
  },
  mounted () {
    this.getPageKeyMap(this.aweTotal, this.awePageSize);
  },

  methods: {
    getPageKeyMap (total, pageSize) {
      const pageKeyMap = [];
      const page = Math.ceil(total / pageSize);
      for (let i = 1; i <= page; i += 1) {
        pageKeyMap.push({
          key: i,
          value: i
        });
      }
      this.awePageKeyMap = pageKeyMap;
      return pageKeyMap;
    },
    handClickPage (page) {
      this.aweCurrent = page;
      this.onChangePgae(page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import './index.scss'
</style>
