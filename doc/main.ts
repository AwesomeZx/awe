
import { createApp } from 'vue';
import App from './index.vue';
import awe from '../src/index';
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/scss/github.scss';
import demoBlock from './components/aweDemoBlock/index.vue';
import router from './router/index';

const app = createApp(App);
app
  .use(awe)
  .directive('highlight', function (el) {
    const blocks = el.querySelectorAll('pre code');
    blocks.forEach((block: any) => {
      hljs.highlightBlock(block);
    });
  })
  .use(router)
  .component('demo-block', demoBlock)
  .mount('#app');
