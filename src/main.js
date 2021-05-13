import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 设计组件(本地代码)
import '@/components/style/index.scss'
import Components from '@/components/index.js'
Vue.use(Components)

import bmCustomFormDraw from 'bm-customform-draw' // 自定义表单渲染组件
Vue.use(bmCustomFormDraw)

// import bmCustomFormDesign from 'bm-customform-design' // 自定义表单设计组件(线上引入)
// import 'bm-customform-design/style/index.scss'
// Vue.use(bmCustomFormDesign)

new Vue({
	render: h => h(App),
	router,
	store
}).$mount("#app")

