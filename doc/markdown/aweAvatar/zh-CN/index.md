# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 代码演示

### 基本使用
头像有四种尺寸，两种形状可选。
:::demo

```html
<template>
  <div>
    <awe-avatar size="lg">LG</awe-avatar>
    <awe-avatar size="md">MD</awe-avatar>
    <awe-avatar size="sm">SM</awe-avatar>
    <awe-avatar size="xs">XS</awe-avatar>
  </div>
  <div style="padding-top:20px">
    <awe-avatar size="lg" shape="circle">LG</awe-avatar>
    <awe-avatar size="md" shape="circle">MD</awe-avatar>
    <awe-avatar size="sm" shape="circle">SM</awe-avatar>
    <awe-avatar size="xs" shape="circle">XS</awe-avatar>
  </div>
</template>
```
:::

### 类型
支持三种类型：图片、Icon 以及字符
:::demo
```html
<template>
  <div>
    <div><awe-avatar>MD</awe-avatar></div>
    <div><awe-avatar src="https://avatars2.githubusercontent.com/u/12592949?s=460&v=4"/></div>
    <div><awe-avatar><awe-icon name="icon-home" /></awe-avatar></div>
  </div>  
</template>
```
:::

### 带徽标的头像 
通常用于消息提示。
:::demo
```html
<template>
  <div>
    <awe-badge content="99+">
      <awe-avatar><awe-icon name="icon-user-fill" /></awe-avatar>
    </n-badge>
  </div>  
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| size | 尺寸大小，可选值`lg`,`md`,`sm`,`xs` | String | md |
| shape | 头像的形状，可选值`square`,`circle` | String | square |
| src    | 头像为图片时的src | String     |  |
