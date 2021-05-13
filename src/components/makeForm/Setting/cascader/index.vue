<template>
	<item-box classSuffix="select">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="是否只显示最后一级">
			<el-switch v-model="data.setting.showAllLevels"
					   active-text="是"
					   inactive-text="否">
			</el-switch>
		</el-form-item>
        <el-form-item label="是否可搜索">
			<el-switch v-model="data.setting.filterable"
					   active-text="是"
					   inactive-text="否">
			</el-switch>
		</el-form-item>
        <el-form-item label="选择模式">
			<el-switch v-model="data.setting.multiple"
					   active-text="多选"
					   inactive-text="单选">
			</el-switch>           
		</el-form-item>
        <el-form-item label="是否折叠" v-if="data.setting.multiple">
			<el-switch v-model="data.setting.collapseTags"
					   active-text="是"
					   inactive-text="否">
			</el-switch>           
		</el-form-item>
        <el-form-item label="父子关联">
			<el-switch v-model="data.setting.checkStrictly"
					   active-text="是"
					   inactive-text="否">
			</el-switch>           
		</el-form-item>
	</item-box>
</template>

<script>
import ItemBox from '../common/ItemBox'

export default {
	name: 'cascaderConfig',
	components: { ItemBox },
	data() {
		return {}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>