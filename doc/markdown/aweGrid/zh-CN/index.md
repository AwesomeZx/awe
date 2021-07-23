# Grid 栅格

24栏栅格系统。

## 代码演示
### 基础栅格
:::demo
```html
<template>
  <awe-row>
    <awe-col span="24">
      <div :style="style1">24</div>
    </awe-col>
  </awe-row>
  <awe-row>
    <awe-col span="12">
      <div :style="style1">12</div>
    </awe-col>
    <awe-col span="12">
        <div :style="style2">12</div>
    </awe-col>
  </awe-row>
  <awe-row>
    <awe-col span="8">
      <div :style="style1">8</div>
    </awe-col>
    <awe-col span="8">
      <div :style="style2">8</div>
    </awe-col>
    <awe-col span="8">
      <div :style="style1">8</div>
    </awe-col>
  </awe-row>
  <awe-row>
    <awe-col span="6">
      <div :style="style1">6</div>
    </awe-col>
    <awe-col span="6">
      <div :style="style2">6</div>
    </awe-col>
    <awe-col span="6">
      <div :style="style1">6</div>
    </awe-col>
    <awe-col span="6">
      <div :style="style2">6</div>
    </awe-col>
  </awe-row>
   <awe-row>
    <awe-col span="4">
      <div :style="style1">4</div>
    </awe-col>
    <awe-col span="4">
      <div :style="style2">4</div>
    </awe-col>
    <awe-col span="4">
      <div :style="style1">4</div>
    </awe-col>
    <awe-col span="4">
      <div :style="style2">4</div>
    </awe-col>
    <awe-col span="4">
      <div :style="style1">4</div>
    </awe-col>
    <awe-col span="4">
      <div :style="style2">4</div>
    </awe-col>
  </awe-row>
</template>

<script>
  export default {
    data: function () {
      return {style1: {
          background: `rgba(193,243,214,1)` ,
          width:'100%',
          color: 'rgb(69,97,80)',
          'text-align':'center',
          height:'50px',
          'line-height':'50px',
          'border-radius':'10px'
        },
        style2: {
          background: `rgba(103,212,136,0.6)` ,
          color: 'rgb(69,97,80)',
          'text-align':'center',
          height:'50px',
          'line-height':'50px',
          'border-radius':'10px'
        }
      }
    }
  }
</script>
```
:::

### 左右偏移
列偏移。使用 offset 可以将列向右侧偏移。例如，offset="8" 将元素向右侧偏移了 8 个 Col 的宽度。

:::demo
```html
<template>
  <awe-row>
    <awe-col span="8">
      <div :style="style1">8</div>
    </awe-col>
    <awe-col span="8" offset="8">
      <div :style="style1">8</div>
    </awe-col>
  </awe-row>
</template>

<script>
  export default {
    data: function () {
      return {
       style1: {
          background: `rgba(193,243,214,1)` ,
          width:'100%',
          color: 'rgb(69,97,80)',
          'text-align':'center',
          height:'50px',
          'line-height':'50px',
          'border-radius':'10px'
        }
      }
    }
  }
</script>
```
:::

### flex对齐
子元素垂直方向 flex 对齐。
:::demo
```html
<template>
  <awe-row align="top">
    <awe-col span="8">
      <div v-bind:style="style1">8</div>
    </awe-col>
    <awe-col span="8" >
      <div v-bind:style="style2">8</div>
    </awe-col>
    <awe-col span="8" >
      <div v-bind:style="style1">8</div>
    </awe-col>
  </awe-row>
    <awe-row align="middle">
    <awe-col span="8">
      <div v-bind:style="style1">8</div>
    </awe-col>
    <awe-col span="8" >
      <div v-bind:style="style2">8</div>
    </awe-col>
    <awe-col span="8" >       
      <div v-bind:style="style1">8</div>
    </awe-col>
  </awe-row>
  <awe-row align="bottom">
    <awe-col span="8">
      <div v-bind:style="style1">8</div>
    </awe-col>
    <awe-col span="8" >
      <div v-bind:style="style2">8</div>
    </awe-col>
    <awe-col span="8" >
      <div v-bind:style="style1">8</div>
    </awe-col>
  </awe-row>
</template>
<script>
  export default {
    data: function () {
      return {
        style1: {
          background: `rgba(193,243,214,1)` ,
          width:'100%',
          color: 'rgb(69,97,80)',
          'text-align':'center',
          height:'50px',
          'line-height':'50px',
          'border-radius':'10px'
        },
        style2: {
          background: `rgba(103,212,136,0.6)` ,
          color: 'rgb(69,97,80)',
          'text-align':'center',
          height:'50px',
          'line-height':'50px',
          'border-radius':'10px'
        }
      }
    }
  }
</script>
```
:::

## API

### Row

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| align | flex 布局下的垂直对齐方式：`top`,`middle`,`bottom` | String | middle |
| gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔  | Number \| String |  |
| justify    | flex 布局下的水平排列方式：`start`,`end`,`center`,`space-around`,`space-between` | String | center |

### Col
| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| span | 栅格占位格数 | String \| Number |  |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格  | Number \| String |  |

