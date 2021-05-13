<template>
	<div class="tpf-mf-layout">
		<div class="tpf-mf-layout--left">
			<Items :componentsList="componentsList"></Items>
		</div>
		<div class="tpf-mf-layout--center">
			<Content @change="contentChange"
					 @select-change="contentSelectChange"></Content>
		</div>
		<div class="tpf-mf-layout--right">
			<Setting :data="settingData"
					 v-if="form.formDataList.length && settingData"></Setting>
		</div>
	</div>
</template>

<script>
import Items from './Items'
import Content from './Content'
import Setting from './Setting'
import componentsList from '../configForm'

const exceptComponents = ['Link', 'Divider']

export default {
	name: 'BmCustomFormDesign',
	components: { Items, Content, Setting },
	provide() {
		return {
			formData: this.form,
			contentSelectChange: this.contentSelectChange
		}
	},
	data() {
		return {
			componentsList: componentsList,
			form: {
				formDataList: [],
				formStyle: {
					hideLabel: false,
					labelWidth: '85px',
					labelPosition: 'right',
					showRequiredAsterisk: true,
					showVerificationMessage: true,
					size: 'medium',
					labelSuffix: ':'
				},
				model: {}
			},
			settingData: null
		}
	},
	methods: {
		$getFormDataJSON() {
			// console.log(123)
			this.form.formDataList.forEach(item => {
				if (item.name === 'Layout') {
					item.setting.colList.forEach(col => {
						if (col && exceptComponents.indexOf(col.name) === -1) {
							this.form.model[col.fieldId] = col.value
						}
					})
				} else if (exceptComponents.indexOf(item.name) === -1) {
					this.form.model[item.fieldId] = item.value
				}
			})
			return JSON.stringify(this.form)
		},

		$getFormDataByVueSet() {
			this.form.model = {}
			this.form.formDataList.forEach(item => {				
				if (item.name === 'Layout') {
					item.setting.colList.forEach(col => {
						if (col && exceptComponents.indexOf(col.name) === -1) {
							// console.log(col)
							if (col.field.length > 0) {
								col.fieldId = col.field
							}
							this.$set(this.form.model, col.fieldId, col.value)
						}
					})
				} else if (exceptComponents.indexOf(item.name) === -1) {
					if (item.field.length > 0) {
						item.fieldId = item.field
					}
					this.$set(this.form.model, item.fieldId, item.value)
				}
			})
			return this.form
		},

		contentSelectChange(item) {
			this.settingData = item
		},
		
		contentChange(list) {
			this.form.formDataList = list
		}
	}
}
</script>