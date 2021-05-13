<template>
	<input-config v-if="data.name === 'Input'"
				  :data="data"></input-config>
	<textarea-config v-else-if="data.name === 'Textarea'"
					 :data="data"></textarea-config>
	<phone-config v-else-if="data.name === 'Phone'"
				  :data="data"></phone-config>
	<password-config v-else-if="data.name === 'Password'"
					 :data="data"></password-config>

	<radio-config v-else-if="data.name === 'Radio'"
				  :data="data"></radio-config>
	<checkbox-config v-else-if="data.name === 'Checkbox'"
					 :data="data"></checkbox-config>
	<select-config v-else-if="data.name === 'Select'"
				   :data="data"></select-config>
	<time-picker-config v-else-if="data.name === 'TimePicker'"
						:data="data"></time-picker-config>
	<time-picker-multiple-config v-else-if="data.name === 'TimePickerMultiple'"
								 :data="data"></time-picker-multiple-config>
	<date-picker-config v-else-if="data.name === 'DatePicker'"
						:data="data"></date-picker-config>
	<date-picker-multiple-config v-else-if="data.name === 'DatePickerMultiple'"
								 :data="data"></date-picker-multiple-config>

	<rate-config v-else-if="data.name === 'Rate'"
				 :data="data"></rate-config>
	<switch-config v-else-if="data.name === 'Switch'"
				   :data="data"></switch-config>
	<input-number-config v-else-if="data.name === 'InputNumber'"
						 :data="data"></input-number-config>

	<link-config v-else-if="data.name === 'Link'"
				 :data="data"></link-config>
	<divider-config v-else-if="data.name === 'Divider'"
					:data="data"></divider-config>
	<layout-config v-else-if="data.name === 'Layout'"
				   :data="data"></layout-config>
	<address-config v-else-if="data.name === 'address'"
				   :data="data"></address-config>
	<cascader-config v-else-if="data.name === 'cascader'"
				   :data="data"></cascader-config>			   
</template>

<script>
import AllComponents from './components'

export default {
	name: 'WhichComponents', // 组件设置
	components: { ...AllComponents },
	props: {
		data: {
			type: Object,
			required: true
		}
	}
}
</script>