<template>
	<tp-form-box class="tpf-sf-tp-form"
				 :formData="formData">
		<which-component v-for="(li, index) in formData.formDataList"
						 :key="'formData.formDataList' + index"
						 :data="li"
						 type="ShowForm"
						 :prop="li.fieldId"
						 :model="formData.model"></which-component>
	</tp-form-box>
</template>

<script>
import WhichComponent from '../componentList/WhichComponent'
import TpFormBox from '../componentList/common/FormBox'
import { isHaveKey } from '../utils/tool'

export default {
	name: 'TpForm',
	components: { WhichComponent, TpFormBox },
	provide() {
		return {
			formData: this.formData,
			customFormOptions: this.customFormOptions,
			componentChange: this.componentChange
		}
	},
	props: {
		formData: {
			type: Object,
			required: true
			/**
			 * formDataList: [],
			 * formStyle: { }
			 */
		},

		customFormOptions: {
			type: Object,
			default: () => {
				return {}
			}
		}
	},
	methods: {
		componentChange(keyName, val) {
			if (isHaveKey(this.customFormOptions[keyName], 'component_prepend_change')) {
				this.customFormOptions[keyName].component_prepend_change(keyName, val)
			}
			if (isHaveKey(this.customFormOptions[keyName], 'component_suffix_change')) {
				this.customFormOptions[keyName].component_suffix_change(keyName, val)
			}
		}
	}
}
</script>