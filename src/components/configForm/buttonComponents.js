import buttonObject from './buttonObject';

export default [
	buttonObject({
		name: 'Switch', label: '开关', setting: {
			disabled: false,
			width: 40,
			activeIconClass: '',
			inactiveIconClass: '',
			activeText: '打开',
			inactiveText: '关闭',
			activeValue: true,
			inactiveValue: false,
			activeColor: '#409EFF',
			inactiveColor: '#C0CCDA'
		}
	}),
	// buttonObject({
	// 	name: 'Rate', label: '评分', value: 0, setting: {
	// 		max: 5,
	// 		allowHalf: false,
	// 		colors: ['#F7BA2A', '#F7BA2A', '#F7BA2A'],
	// 		voidColor: '#C6D1DE',
	// 		iconClasses: ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'],
	// 		voidIconClass: 'el-icon-star-off',
	// 		showText: false,
	// 		textColor: '#1F2D3D',
	// 		texts: ['极差', '失望', '一般', '满意', '惊喜'],
	// 		showScore: false,
	// 		scoreTemplate: '{value}'
	// 	}
	// }),
	// buttonObject({
	// 	name: 'InputNumber', label: '计数器', value: 0, setting: {
	// 		max: Infinity,
	// 		min: -Infinity,
	// 		step: 1,
	// 		stepStrictly: false,
	// 		size: '',
	// 		disabled: false,
	// 		controlsPosition: ''
	// 	}
	// })
]