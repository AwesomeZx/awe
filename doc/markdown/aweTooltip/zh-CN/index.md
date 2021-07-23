# Tooltip 文字提示
常用于展示鼠标 hover 时的提示信息。
## 何时使用
用于辅助的文字提示，可代替 HTML 元素默认的 title 属性。

## 代码演示

### 基本使用
:::demo
```html
<template>
  <div class="tooltip-example">
   <div class="top">
        <awe-tooltip content="topleft 文字提示" placement="top-start"  trigger="click">
            <awe-button>上左</awe-button>
        </awe-tooltip>
        <awe-tooltip content="top 文字提示" placement="top"  trigger="click">
            <awe-button>上边</awe-button>
        </awe-tooltip>
        <awe-tooltip content="topright 文字提示" placement="top-end"  trigger="click">
            <awe-button>上右</awe-button>
        </awe-tooltip>
        </div>
     <div class="left">
      <awe-tooltip class="item" content="Tooltip 文字提示" placement="left" trigger="click">
        <awe-button>左边</awe-button>
      </awe-tooltip>
    </div>
    <div class="right">
      <awe-tooltip class="item" content="Tooltip 文字提示" placement="right" trigger="click">
        <awe-button>右边</awe-button>
      </awe-tooltip>
    </div>
    <div class="bottom">
        <awe-tooltip content="bottomleft 文字提示" placement="bottom-start" trigger="click">
            <awe-button>下左</awe-button>
        </awe-tooltip>
        <awe-tooltip content="bottom 文字提示" placement="bottom" trigger="click">
            <awe-button>下边</awe-button>
        </awe-tooltip>
        <awe-tooltip content="bottomright 文字提示" placement="bottom-end" trigger="click">
            <awe-button>下右</awe-button>
        </awe-tooltip>
        </div>
    </div>
</template>
```
:::

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| content | 提示内容 | String |  |
| placement | 位置 | String | `top` |
| trigger | 触发事件类型 | String | `hover` |