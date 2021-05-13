<template>
	<item-box classSuffix="time-picker-multiple">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="默认值">
			<el-input v-model="defaultValue"></el-input>
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
		<el-form-item label="范围">
			<el-input v-model="selectableRange"
					  placeholder="如：00:00:00-23:59:59,00:00:00-23:59:59"></el-input>
		</el-form-item>
		<el-form-item label="显示格式">
			<el-input v-model="data.setting.format"></el-input>
		</el-form-item>
		<el-form-item label="值绑定格式">
			<el-input v-model="data.setting.valueFormat"></el-input>
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
	name: 'TimePickerConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon },
	data() {
		return {
			defaultValue: '',
			selectableRange: '',
			currentProp: ''
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	created() {
		this.selectableRange = `${this.data.setting.selectableRange[0]},${
			this.data.setting.selectableRange[1]
		}`
	},
	watch: {
		defaultValue(v) {
			if (v.includes(',')) {
				const y = v.split(',')
				if (
					y.length >= 2 &&
					/^(([0-1][0-9])|(2[0-3])):[0-9][0-9]:[0-9][0-9]$/.test(
						y[0]
					) &&
					/^(([0-1][0-9])|(2[0-3])):[0-9][0-9]:[0-9][0-9]$/.test(y[1])
				) {
					const t0 = new Date()
					const x0 = y[0].split(':')
					t0.setHours(x0[0], x0[1], x0[2])
					const t1 = new Date()
					const x1 = y[1].split(':')
					t1.setHours(x1[0], x1[1], x1[2])
					this.data.value = [t0, t1]
					return
				}
			}
			this.data.value = ''
		},
		selectableRange(v) {
			if (v.includes(',')) {
				const y = v.split(',')
				if (
					y.length >= 2 &&
					/^(([0-1][0-9])|(2[0-3])):[0-9][0-9]:[0-9][0-9]$/.test(
						y[0]
					) &&
					/^(([0-1][0-9])|(2[0-3])):[0-9][0-9]:[0-9][0-9]$/.test(y[1])
				) {
					this.data.setting.selectableRange = `${y[0]},${y[1]}`
					return
				}
			}
			this.data.setting.selectableRange = ''
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