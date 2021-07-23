<template>
  <div class="app">
    <awe-header
      :config="config.headerConfig"
    />
    <awe-nav
      :config="config.navConfig"
    />
    <awe-container>
      <router-view />
    </awe-container>
  </div>
</template>

<script>
import aweHeader from './components/aweHeader';
import aweNav from './components/aweNav';
import aweContainer from './components/aweContainer';
import config from './doc.config';
import './style/index.scss';
export default {
  name: 'App',
  components: { aweHeader, aweNav, aweContainer },
  data: function () {
    return {
      config: config
    };
  }
};
</script>

<style lang="scss" scoped>
.app {
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  font-family: PingFang SC,Helvetica Neue,Arial,sans-serif;
}
</style>
