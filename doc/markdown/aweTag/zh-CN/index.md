
# Tag 标签

进行标记和分类的小标签

## 何时使用

用于标记事物的属性和维度。

进行分类。

## 代码演示

### 基本使用

:::demo
```html
<template>
  <awe-tag >标签1</awe-tag>
  <awe-tag color="#409eff">标签2</awe-tag>
  <awe-tag v-if="show" closable @click="handleClose">标签3</awe-tag>
  <awe-tag >
    <a target="_blank" href="https://github.com/awesomeZx/awe.git">
      Link
    </a>
  </awe-tag>
</template>
<script>
  export default {
        data () {
            return {
                show: true,
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            }
        }
    }
</script>
```
:::

## API

| 参数 | 说明 | 类型 |默认值 |
| :--- | :--- | :--- | :--- |
| type | 类型 | String | `normal` |
| color | 颜色 | String | `blue` |
| closable | 是否可关闭 |  |  |


