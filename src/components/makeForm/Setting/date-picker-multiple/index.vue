<template>
	<item-box classSuffix="date-picker-multiple">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="默认值">
			<el-input v-model="defaultValue"
					  @blur="defaultValueBlur"></el-input>
		</el-form-item>
		<el-form-item label="分隔符">
			<el-input v-model="data.setting.rangeSeparator"></el-input>
		</el-form-item>
		<el-form-item label="开始占位">
			<el-input v-model="data.setting.startPlaceholder"></el-input>
		</el-form-item>
		<el-form-item label="结束占位">
			<el-input v-model="data.setting.endPlaceholder"></el-input>
		</el-form-item>
		<el-form-item label="显示格式">
			<el-input v-model="data.setting.format"></el-input>
		</el-form-item>
		<el-form-item label="值显示格式">
			<el-input v-model="data.setting.valueFormat"></el-input>
		</el-form-item>
		<el-form-item label="类型格式">
			<el-select v-model="data.setting.type"
					   placeholder="请选择格式">
				<el-option label="年月"
						   value="monthrange"></el-option>
				<el-option label="年月日"
						   value="daterange"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="前图标">
			<el-input v-model="data.setting.prefixIcon">
				<el-button slot="append"
						   @click="openSelectIcon('prefixIcon')">选择图标</el-button>
			</el-input>
		</el-form-item>
		<el-form-item label="必填">
			<el-switch v-model="required"
					   active-text="是"
					   inactive-text="否"></el-switch>
		</el-form-item>
		<el-form-item label="必填提示"
					  v-if="required">
			<el-input v-model="data.rules.required.message"
					  placeholder="必填提示文本"></el-input>
		</el-form-item>
		<select-icon ref="select_icon"
					 @select-icon="selectIconItem"></select-icon>
	</item-box>
</template>

<script>
import ItemBox from '../common/ItemBox'
import SelectIcon from '../common/select-icon'
import Mixins from '../common/mixins'
export default {
	name: 'DatePickerConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon },
	data() {
		return {
			defaultValue: '',
			currentProp: ''
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	methods: {
		openSelectIcon(prop) {
			this.currentProp = prop
			this.$refs.select_icon.open()
		},
		selectIconItem(item) {
			if (this.currentProp) {
				this.data.setting[this.currentProp] = item
			}
		},
		defaultValueBlur() {
			const dates = this.defaultValue.split(',')
			if (dates.length === 2) {
				this.data.value = dates
			}
		}
	}
}
</script>