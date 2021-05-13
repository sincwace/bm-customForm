<template>
	<div>
		<item-box classSuffix="tphone"
				  :model="data">
			<el-form-item label="标签">
				<el-input v-model="data.label"></el-input>
			</el-form-item>
			<el-form-item label="字段">
				<el-input v-model="data.field"></el-input>
			</el-form-item>
			<el-form-item label="默认值"
						  prop="value"
						  :rules="rule">
				<el-input v-model="data.value"></el-input>
			</el-form-item>
			<el-form-item label="提示">
				<el-input v-model="data.placeholder"></el-input>
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
		</item-box>
		<select-icon ref="select_icon"
					 @select-icon="selectIconItem"></select-icon>
	</div>
</template>

<script>
import ItemBox from '../common/ItemBox'
import SelectIcon from '../common/select-icon'
import RegxAdd from '../common/regx-add'
import Mixins from '../common/mixins'
export default {
	name: 'PhoneConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon, RegxAdd },
	data() {
		return {
			rule: {
				validator(rule, value, callback) {
					const reg = /^1[3|4|5|7|8|9][0-9]{9}$/
					if (!reg.test(value)) {
						callback(new Error('格式不正确'))
					}
					callback()
				},
				trigger: 'blur'
			},
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
		}
	}
}
</script>