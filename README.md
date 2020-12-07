# 自定义指令——元素（文字）滚动加载动画

自定义指令，实现类似于幻灯片的效果，当文字滚动到可视区域后，执行文字进入动画；当文字离开可视区域后，隐藏文字。

> 注意：指令通过 `opacity: 0;` 隐藏元素，元素实际仍然会渲染，不适用于有交互的元素，否则可能出现不符合预期的效果。

## 基本用法

在 `main.js` 中引入指令：

```js
import Vue from "vue";
import App from "./App.vue";
import "./directive/directive";    // 引入指令

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
```

在组件中使用：

```html
<template>
  <div>
    <h1 v-slidein>title</h1>
  </div>
</template>
```
> 注意：为了方便查看动画效果，需要设置容器高度，使页面支持滚动。


## 使用 `:delay` 参数实现延迟加载

```html
<template>
  <div>
    <h1 v-slidein>title</h1>
    <p v-slidein:delay>content</p>
  </div>
</template>
```

## 使用 `.once` 修饰符指定动画只执行一次

```html
<template>
  <div>
    <h1 v-slidein.once>title</h1>
    <p v-slidein:delay.once>content</p>
  </div>
</template>
```

## 下个版本

* 支持自定义动画执行时间和延迟执行时间
* 支持多种文字进入动画