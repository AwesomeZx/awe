<template>
  <div class="awedoc-header">
    <div class="top">
      <!-- logo -->
      <a class="logo" :href="headerConfig.logo.href">
        <img width="75" src="../../markdown/aweAbout/img/logo.png"/>
      </a>
    </div>
  </div>
</template>

<script>
import 'docsearch.js/dist/npm/styles/main.scss';
import docsearch from 'docsearch.js';
import { getLang, setLang } from '../../util/lang';
export default {
  name: 'AweHeader',
  props: {
    config: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data: function () {
    const headerConfig = this.config;
    return {
      headerConfig,
      lang: ''
    };
  },
  computed: {
    searchPlaceholder () {
      return this.lang === 'English' ? '搜索文档' : 'Please input';
    }
  },
  mounted () {
    this.setLang();
    docsearch({
      apiKey: 'e3b8bf7a6a9475a23bf57ac66efc6960',
      indexName: 'awe-design',
      inputSelector: '.awedoc-search',
      debug: true, // Set debug to true if you want to inspect the dropdown
      start_urls: ['https://awe-design.github.io']
    });
  },
  methods: {
    setLang () {
      const lang = getLang();
      if (lang === 'zh-CN') {
        this.lang = 'English';
      } else if (lang === 'en-US') {
        this.lang = '中文';
      } else {
        this.lang = 'English';
      }
    },
    changeLang () {
      if (this.lang === 'English') {
        this.lang = '中文';
        setLang('en-US');
      } else {
        this.lang = 'English';
        setLang('zh-CN');
      }
      window.location.reload();
    }
  }
};
</script>

<style lang="scss">
.awedoc-header{
  width: 100%;
  box-shadow: 0 4px 12px #ebedf0;
  .top{
    display: flex;
    align-items: center;
    background-color: #fff;
    z-index: 3;
    padding: 0 30px;
    height: 60px;
    line-height: 60px;
    .logo{
      margin-top: 10px;
      line-height: 0.5;
      display: block;
      text-decoration: none;
      div{
        color: #fff;
        font-size: 22px;
        height: 32px;
        vertical-align: middle;
        display: inline-block;
      }
    }
    .awedoc-search{
      height: 60px;
      width: 200px;
      border: none;
      color: #fff;
      font-size: 14px;
      // left: 140px;
      background-color: transparent;
      &:focus {
        outline: none;
      }
      &::placeholder {
        opacity: 0.7;
        color: #fff;
      }
    }
    .algolia-autocomplete{
      left: 140px;
    }
    .nav{
      flex: 1;
      text-align: right;
      li{
        display: inline-block;
        position: relative;
        vertical-align: middle;
      }
      :hover{
        background: none;
      }
      .item{
        margin: 0 10px;
      }
      .cube {
        padding-right: 20px;
        width: 50px;
        position: relative;
        cursor: pointer;
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
        display: block;
        border-radius: 3px;
        text-align: center;
        color: #fff;
        border: 1px solid hsla(0,0%,100%,.7);
        font-family: Helvetica Neue,Arial,sans-serif;
        -webkit-transition: .3s ease-in-out;
        transition: .3s ease-in-out;
      }
      .version{
        &:after{
          position: absolute;
          content: "";
          top: 7px;
          right: 7px;
          width: 5px;
          height: 5px;
          border: 1px solid;
          color: hsla(0,0%,100%,.9);
          border-color: transparent transparent currentColor currentColor;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }
      }
      .github-icon {
        fill: #fff;
        display: block;
        transition: 0.3s ease-in-out;
      }
      .awedoc-dropdown{
        .enter,
        .leave-active {
          opacity: 0;
          transform: scaleY(0);
        }
      }
    }
  }
}
</style>
