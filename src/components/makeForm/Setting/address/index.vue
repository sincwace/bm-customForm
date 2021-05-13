<template>
	<item-box classSuffix="select">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="详情展示">
			<el-switch v-model="data.showDetail"
					   active-text="有"
					   inactive-text="无">
			</el-switch>
		</el-form-item>
	</item-box>
</template>

<script>
import _ from 'lodash'
import ItemBox from '../common/ItemBox'
import RemoteMixin from '../../../utils/remote-mixin'

export default {
	name: 'AddressConfig',
	mixins: [RemoteMixin],
	components: { ItemBox },
	data() {
		return {}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	methods: {}
}
</script>