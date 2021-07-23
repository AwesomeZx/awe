
# Message 信息提示

用于页面信息提示。

## 何时使用

页面中需要有操作提示或者信息提示的时候使用。

## 代码演示

### 无颜色按钮
:::demo
```html
<template>
  <awe-button @click="handleClick('info')">普通消息</awe-button>
  <awe-button @click="handleClick('success')">成功消息</awe-button>
  <awe-button @click="handleClick('warning')">警告消息</awe-button>
  <awe-button @click="handleClick('error')">错误消息</awe-button>
</template>
<script>
  export default {
    methods: {
      handleClick (type) {
        if(type=='info'){
            this.$nMessage({
            type,
            message:'这是一条普通消息'});
        }else if(type=='success'){
            this.$nMessage({
            type,
            message:'这是一条成功消息'});
        }else if(type=='warning'){
            this.$nMessage({
            type,
            message:'这是一条警告消息'});
          }else{
            this.$nMessage({
            type,
            message:'这是一条错误消息'});
          }
      }
    }
  }
</script>
```
:::

### 有颜色按钮
:::demo
```html
<template>
  <awe-button @click="handleClick('info')" class="info">普通消息</awe-button>
  <awe-button @click="handleClick('success')" class="success">成功消息</awe-button>
  <awe-button @click="handleClick('warning')" class="warning">警告消息</awe-button>
  <awe-button @click="handleClick('error')" class="error">错误消息</awe-button>
</template>
<script>
  export default {
    methods: {
      handleClick (type) {
        if(type=='info'){
            this.$nMessage({
            type,
            message:'这是一条普通消息'});
        }else if(type=='success'){
            this.$nMessage({
            type,
            message:'这是一条成功消息'});
        }else if(type=='warning'){
            this.$nMessage({
            type,
            message:'这是一条警告消息'});
          }else{
            this.$nMessage({
            type,
            message:'这是一条错误消息'});
          }
      }
    }
  }
</script>
```
:::
## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 信息类型,可选值`info`,`success`,`warning`,`error` | String | info |
| message| 信息内容 | String |  |
| duration| 信息展示的时间（ms） | Number | 3000 |