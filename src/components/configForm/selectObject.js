import _ from 'lodash'

function selectObject(options) {
	return _.merge({
		fieldId: '',
		name: '',
		field: '',
		label: '',
		multiple: false,
		placeholder: '请选择',
		value: options.multiple ? [] : '',
		selections:
			options.selections === 'unset'
				? undefined
				: Object.prototype.toString.call(options.selections) === '[object Array]' ? options.selections : [{ label: '选项一', value: '1' }, { label: '选项二', value: '2' }],
		rules: {},
		makeStyle: {  // 制作表单的时候，页面的样式控制
			active: false
		},
		style: {},  // 组件的样式
		setting: {}
	}, options)
}

export default selectObject