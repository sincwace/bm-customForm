import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', name: 'base', redirect: '/desagin' },

		// 设计
		{ path: '/desagin', name: 'desagin', component: resolve => require(['@/views/desagin'], resolve) },

		// 示例
		{ path: '/demo', name: 'demo', component: resolve => require(['@/views/demo'], resolve) }
	]
})
