import inputObject from './inputObject'

export default [
	inputObject({
		name: 'Input', label: '单行文本', setting: {
			isHavePrefixIcon: false,
			isHaveSuffixIcon: false,
			prefixIcon: '',
			suffixIcon: ''
		}
	}),
	inputObject({ name: 'Textarea', label: '多行文本', setting: { rows: 2 } }),
	// inputObject({
	// 	name: 'Phone', label: '手机号', placeholder: '请输入手机号', setting: {
	// 		prefixIcon: 'el-icon-mobile',
	// 		suffixIcon: ''
	// 	}
	// }),
	// inputObject({
	// 	name: 'Password', label: '密码', placeholder: '请输入密码', setting: {
	// 		prefixIcon: 'el-icon-lock',
	// 		suffixIcon: ''
	// 	}
	// })
]