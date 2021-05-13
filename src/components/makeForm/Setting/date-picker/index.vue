<template>
	<item-box classSuffix="date-picker">
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
		<el-form-item label="提示">
			<el-input v-model="data.placeholder"></el-input>
		</el-form-item>
		<el-form-item label="类型格式">
			<el-select v-model="data.setting.type"
					   placeholder="请选择格式">
				<el-option label="年"
						   value="year"></el-option>
				<el-option label="年月"
						   value="month"></el-option>
				<el-option label="年月日"
						   value="date"></el-option>
				<el-option label="年月日周"
						   value="week"></el-option>
				<el-option label="年月日 时间"
						   value="datetime"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="前图标">
			<el-input v-model="data.setting.prefixIcon">
				<el-button slot="append"
						   @click="openSelectIcon('prefixIcon')">选择图标</el-button>
			</el-input>
		</el-form-item>
		<el-form-item label="显示格式">
			<el-input v-model="data.setting.format"></el-input>
		</el-form-item>
		<el-form-item label="值绑定格式">
			<el-input v-model="data.setting.valueFormat"></el-input>
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
		<regx-add v-model="data.rules"></regx-add>
		<select-icon ref="select_icon"
					 @select-icon="selectIconItem"></select-icon>
	</item-box>
</template>

<script>
import ItemBox from '../common/ItemBox'
import SelectIcon from '../common/select-icon'
import RegxAdd from '../common/regx-add'
import Mixins from '../common/mixins'
export default {
	name: 'DatePickerConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon, RegxAdd },
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
			this.data.value = this.defaultValue
		}
	}
}
</script>