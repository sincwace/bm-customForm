# bm-customForm

用于本末项目的自定义表单设计组件, 该组件依赖element-ui、axios、vue-json-viewer、vuedraggable、lodash、less以及sass, 可以实现表单的自定义设计

原插件 tpForm 地址[click this](//underline.gitee.io/tp-form)

# 安装

```shell
npm install bm-customform-design -s
```

```javascript
import Vue from 'vue'
import bmCustomFormDraw from 'bm-customform-draw' // 自定义表单渲染组件
Vue.use(bmCustomFormDraw)

import bmCustomFormDesign from 'bm-customform-design' // 自定义表单设计组件
import 'bm-customform-design/style/index.scss'
Vue.use(bmCustomFormDesign)
```

```html
<template>
    <div>
        <!-- 设计组件 -->
        <bm-custom-form-design></bm-custom-form-design> 

        <!-- 渲染组件 -->
        <bm-custom-form-draw :formData="formData.project"
                             :customFormOptions="customFormOptions"
                             v-if="ShowForm"
                             ref="customForm"></bm-custom-form-draw>
    </div>
</template>
```

## 使用指南
设计组件直接调用

渲染组件请参考npm上 bm-customform-draw 组件的使用方法

注: 渲染组件的参数来自于接口, 这个项目的参数由一个测试接口提供, 你需要在你的项目中开发用来存自定义表单配置数据的接口

formData 是一个存于store的对象, peroject是功能模块名, 你可以定义任何一个名称, 然后把接口传来的配置存于store, 渲染组件只能绑定store里的数据

不可使用vue实例中定义的变量(不然组件不会渲染), ShowForm是控制组件何时开始渲染的参数, 一定要等接口数据存入store之后再把ShowForm设为true

customFormOptions 是一个自由配置表单前端展示的参数, 请参考组件内代码实例, 应用场景: 当某个表单需要特殊处理某个业务时, 在该参数内定义一个对象配置该字段的特殊业务

# 演示地址
[click this](http://1.117.79.182:8082/)