<h1>
Awe-design
</h1>

<img src="../img/logo.png" style="width:350px;"/>

`Awe-design` is a light Vue 3.0 web UI framework


## Supporting environment
 Supports all major modern browsers.

|<img src="../img/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />Edge | <img src="../img/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />Firefox | <img src="../img/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />Chrome | <img src="../img/safari_48x48.png" alt="Safari" width="24px" height="24px" />Safari |
| :--- | :--- | :--- | :--- |
| >=14 | >= 45 | >=49 | >=10 |

## Install

Install using npm or yarn

We recommend using npm or yarn for development, not only for easy debugging in the development environment, but also for packaging and deployment in the production environment, and enjoy the many benefits brought by the entire ecosystem and toolchain.

```shell
// use npm

npm install awe-design -S

// use yarn

yarn add awe-design
```

## Example

```
import { createApp } from 'vue'
import App from './App.vue'
import awe from 'awe-design'

const app = createApp(App);
app
  .use(awe)
  .mount('#app')
```

## Development Guide

 [Vue](https://cn.vuejs.org/index.html)