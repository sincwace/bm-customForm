<template>
	<item-box classSuffix="time-picker">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="默认值">
			<el-input v-model="defaultValue"></el-input>
		</el-form-item>
		<el-form-item label="提示">
			<el-input v-model="data.placeholder"></el-input>
		</el-form-item>
		<el-form-item label="范围">
			<el-input v-model="data.setting.selectableRange"
					  placeholder="如：00:00:00-23:59:59"></el-input>
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
	name: 'TimePickerConfig',
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
	watch: {
		defaultValue(v) {
			if (/^(([0-1][0-9])|(2[0-3])):[0-9][0-9]:[0-9][0-9]$/.test(v)) {
				const t = new Date()
				const x = v.split(':')
				t.setHours(x[0], x[1], x[2])
				this.data.value = t
			} else {
				this.data.value = ''
			}
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
		}
	}
}
</script>