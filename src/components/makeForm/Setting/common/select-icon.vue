<template>
	<el-dialog class="tpf-mf-select-icon"
			   title="图标选择"
			   :visible.sync="dialogVisible"
			   width="600px">
		<div :class="['tpf-mf-select-icon--item', {'tpf-mf-select-icon--item__active': icon === i}]"
			 v-for="icon in iconList"
			 :key="icon"
			 @click="selectItem(icon)">
			<i :class="icon"></i>
		</div>
	</el-dialog>
</template>

<script>
export default {
	name: 'SelectIcon',
	data() {
		return {
			dialogVisible: false,
			iconList: [
				'el-icon-upload',
				'el-icon-error',
				'el-icon-success',
				'el-icon-warning',
				'el-icon-sort-down',
				'el-icon-sort-up',
				'el-icon-arrow-left',
				'el-icon-circle-plus',
				'el-icon-circle-plus-outline',
				'el-icon-arrow-down',
				'el-icon-arrow-right',
				'el-icon-arrow-up',
				'el-icon-back',
				'el-icon-circle-close',
				'el-icon-date',
				'el-icon-circle-close-outline',
				'el-icon-caret-left',
				'el-icon-caret-bottom',
				'el-icon-caret-top',
				'el-icon-caret-right',
				'el-icon-close',
				'el-icon-d-arrow-left',
				'el-icon-check',
				'el-icon-delete',
				'el-icon-d-arrow-right',
				'el-icon-document',
				'el-icon-d-caret',
				'el-icon-edit-outline',
				'el-icon-download',
				'el-icon-goods',
				'el-icon-search',
				'el-icon-info',
				'el-icon-message',
				'el-icon-edit',
				'el-icon-location',
				'el-icon-loading',
				'el-icon-location-outline',
				'el-icon-menu',
				'el-icon-minus',
				'el-icon-bell',
				'el-icon-mobile-phone',
				'el-icon-news',
				'el-icon-more',
				'el-icon-more-outline',
				'el-icon-phone',
				'el-icon-phone-outline',
				'el-icon-picture',
				'el-icon-picture-outline',
				'el-icon-plus',
				'el-icon-printer',
				'el-icon-rank',
				'el-icon-refresh',
				'el-icon-question',
				'el-icon-remove',
				'el-icon-share',
				'el-icon-star-on',
				'el-icon-setting',
				'el-icon-circle-check',
				'el-icon-service',
				'el-icon-sold-out',
				'el-icon-remove-outline',
				'el-icon-star-off',
				'el-icon-circle-check-outline',
				'el-icon-tickets',
				'el-icon-sort',
				'el-icon-zoom-in',
				'el-icon-time',
				'el-icon-view',
				'el-icon-upload2',
				'el-icon-zoom-out'
			]
		}
	},
	props: {
		i: String
	},
	methods: {
		open() {
			this.dialogVisible = true
		},
		
		selectItem(icon) {
			this.$emit('select-icon', icon)
			this.dialogVisible = false
		}
	}
}
</script>

<style>
</style>