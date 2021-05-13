<template>
	<div>
		<item-box classSuffix="password">
			<el-form-item label="标签">
				<el-input v-model="data.label"></el-input>
			</el-form-item>
			<el-form-item label="字段">
				<el-input v-model="data.field"></el-input>
			</el-form-item>
			<el-form-item label="默认值">
				<el-input v-model="data.value"></el-input>
			</el-form-item>
			<el-form-item label="提示">
				<el-input v-model="data.placeholder"></el-input>
			</el-form-item>
			<el-form-item label="前图标">
				<el-input v-model="data.setting.prefixIcon">
					<el-button slot="append"
							   @click="openSelectIcon('prefixIcon')">选择图标</el-button>
				</el-input>
			</el-form-item>
			<el-form-item label="后图标">
				<el-input v-model="data.setting.suffixIcon">
					<el-button slot="append"
							   @click="openSelectIcon('suffixIcon')">选择图标</el-button>
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
	name: 'PasswordConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon, RegxAdd },
	data() {
		return {
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