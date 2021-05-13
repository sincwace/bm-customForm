<template>
	<div class="tpf-mf-setting-textarea">
		<el-form label-position="right"
				 label-width="85px"
				 size="small"
				 :model="model">
			<slot></slot>
		</el-form>
	</div>
</template>

<script>
export default {
	name: 'ItemBox',
	props: {
		classSuffix: {
			type: String,
			default: 'common'
		},
		model: Object
	}
}
</script>