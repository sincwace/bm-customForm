<template>
	<item-box classSuffix="textarea">
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
</template>

<script>
import ItemBox from '../common/ItemBox'
import RegxAdd from '../common/regx-add'
import Mixins from '../common/mixins'
export default {
	name: 'TextareaConfig',
	mixins: [Mixins],
	components: { ItemBox, RegxAdd },
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>