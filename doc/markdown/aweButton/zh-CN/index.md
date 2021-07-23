# Button 按钮
常用的操作按钮。

## 代码演示

### 按钮类型
:::demo 按钮类型有：默认按钮、主按钮、链接按钮以及三种颜色按钮。

```html
<template>
  <awe-button type="default">
    Default
  </awe-button>
  <awe-button type="primary">
    Primary
  </awe-button>
  <awe-button type="link">
    Link
  </awe-button>
  <awe-button type="successed">
    Success
  </awe-button>
  <awe-button type="warn">
    Warning
  </awe-button>
  <awe-button type="errored">
    Error
  </awe-button>
</template>
<script>
    export default {
        
    }
</script>

```
:::

### 图标按钮

:::demo 当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。
```html
<template>
  <awe-button><awe-icon name="icon-home" />主页</awe-button>
  <awe-button icon="icon-home" type="primary">主页</awe-button>
</template>
```
:::

### 长按钮

:::demo
```html
<template>
  <awe-button type="successed long">提交</awe-button>
  <awe-button type="errored long">取消</awe-button>
</template>
```
:::

### 加载中状态

:::demo 添加 loading 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
```html
<template>
  <awe-button :loading="true">loading...</awe-button>
</template>
```
:::

### 禁用状态

:::demo 添加 disabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
```html
<template>
  <awe-button :disabled="true">disable</awe-button>
</template>
```
:::


### 按钮组合

:::demo 可以将多个 Button 放入 awe-button-group 容器中。
```html
<template>
  <awe-butten-group>
    <awe-button type="primary">Primary 1</awe-button>
    <awe-button type="primary">Primary 2</awe-button>
    <awe-button>Default 1</awe-button>
    <awe-button>Default 2</awe-button>
  </awe-butten-group>
</template>
```
:::


## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| type | 按钮类型，可选择值`default`,`primary`,`link`,`success`,`warning`,`error` | String | default |
| icon | 图标按钮，可选择和图标的值一样 | String |  |
| loading    | 是否为加载状态 | Boolean     | false |
| disabled    | 禁用状态 | Boolean     | false |