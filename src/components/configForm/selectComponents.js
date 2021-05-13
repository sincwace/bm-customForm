import selectObject from './selectObject'
import addressObject from './addressObject'
import cascaderObject from './cascaderObject'

export default [
	selectObject({
		name: 'Radio', label: '单选框',
		setting: {
			isRemote: false,
			remoteUrl: '',
			remoteDataPath: '',
			remoteDataProps: {
				label: 'label',
				value: 'value'
			}
		}
	}),
	selectObject({
		name: 'Checkbox', label: '多选框', multiple: true,
		setting: {
			isRemote: false,
			remoteUrl: '',
			remoteDataPath: '',
			remoteDataProps: {
				label: 'label',
				value: 'value'
			}
		}
	}),
	selectObject({
		name: 'Select', label: '下拉框', multiple: false,
		setting: {
			isRemote: false,
			remoteUrl: '',
			remoteDataPath: '',
			remoteDataProps: {
				label: 'label',
				value: 'value'
			}
		}
	}),
	selectObject({
		name: 'TimePicker', label: '时间选择', placeholder: '请选择时间',
		setting: {
			selectableRange: '00:00:00-23:59:59',
			format: 'HH:mm:ss',
			prefixIcon: 'el-icon-time',
			valueFormat: 'HH:mm:ss'
		},
		selections: 'unset'
	}),
	selectObject({
		name: 'TimePickerMultiple', label: '时间范围', placeholder: '请选择时间',
		setting: {
			selectableRange: ['00:00:00-23:59:59', '00:00:00-23:59:59'],
			format: 'HH:mm:ss',
			valueFormat: 'HH:mm:ss',
			startPlaceholder: '开始时间',
			endPlaceholder: '结束时间',
			rangeSeparator: '至',
			prefixIcon: 'el-icon-time'
		},
		selections: 'unset',
		multiple: true
	}),
	selectObject({
		name: 'DatePicker', label: '日期选择', placeholder: '请选择日期',
		setting: {
			type: 'date',
			format: 'yyyy-MM-dd',
			valueFormat: 'yyyy-MM-dd',
			prefixIcon: 'el-icon-date'
		},
		selections: 'unset'
	}),
	selectObject({
		name: 'DatePickerMultiple', label: '日期范围', placeholder: '请选择日期',
		setting: {
			format: 'yyyy-MM-dd',
			startPlaceholder: '开始日期',
			endPlaceholder: '结束日期',
			rangeSeparator: '至',
			prefixIcon: 'el-icon-date',
			valueFormat: 'yyyy-MM-dd',
			type: 'daterange'
		},
		selections: 'unset',
		multiple: true
	}),
	addressObject({
		name: 'address', label: '地址选择', placeholder: '',
		setting: {},
		multiple: true
	}),
	cascaderObject({
		name: 'cascader', label: '级联选择', placeholder: '',
		setting: {
			showAllLevels: true,
			filterable: false,
			multiple: false,
			checkStrictly: false,
			collapseTags: false
		},
		multiple: true
	})
]