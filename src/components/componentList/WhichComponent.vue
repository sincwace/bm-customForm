<template>
	<item-box :data="data"
			  :isMakeForm="type==='MakeForm'"
			  :prop="prop"
			  :showMask="data.name !== 'Layout'"
			  :style="{padding:data.name === 'Layout' ? '0!important' : undefined}">
		<tp-input v-if="data.name === 'Input'"
				  :data="data"
				  :model="model"></tp-input>
		<tp-textarea v-else-if="data.name === 'Textarea'"
					 :data="data"
					 :model="model"></tp-textarea>
		<tp-phone v-else-if="data.name === 'Phone'"
				  :data="data"
				  :model="model"></tp-phone>
		<tp-password v-else-if="data.name === 'Password'"
					 :data="data"
					 :model="model"></tp-password>

		<tp-radio v-else-if="data.name === 'Radio'"
				  :data="data"
				  :model="model"></tp-radio>
		<tp-checkbox v-else-if="data.name === 'Checkbox'"
					 :data="data"
					 :model="model"></tp-checkbox>
		<tp-select v-else-if="data.name === 'Select'"
				   :data="data"
				   :model="model"></tp-select>
		<tp-time-picker v-else-if="data.name === 'TimePicker'"
						:data="data"
						:model="model"></tp-time-picker>
		<tp-time-picker-multiple v-else-if="data.name === 'TimePickerMultiple'"
								 :data="data"
								 :model="model"></tp-time-picker-multiple>
		<tp-date-picker v-else-if="data.name === 'DatePicker'"
						:data="data"
						:model="model"></tp-date-picker>
		<tp-date-picker-multiple v-else-if="data.name === 'DatePickerMultiple'"
								 :data="data"
								 :model="model"></tp-date-picker-multiple>

		<tp-rate v-else-if="data.name === 'Rate'"
				 :data="data"
				 :model="model"></tp-rate>
		<tp-switch v-else-if="data.name === 'Switch'"
				   :data="data"
				   :model="model"></tp-switch>
		<tp-input-number v-else-if="data.name === 'InputNumber'"
						 :data="data"
						 :model="model"></tp-input-number>

		<tp-link v-else-if="data.name === 'Link'"
				 :data="data"></tp-link>
		<tp-divider v-else-if="data.name === 'Divider'"
					:data="data"></tp-divider>
		<tp-layout v-else-if="data.name === 'Layout'"
				   :data="data"
				   :type="type"
				   :model="model"></tp-layout>
		<tp-address v-else-if="data.name === 'address'"
					:data="data"
				   	:type="type"
				   	:model="model"
					:showDetail="data.showDetail"
					v-model="data.value"></tp-address>
		<tp-cascader v-else-if="data.name === 'cascader'"
					:data="data"
				   	:model="model"></tp-cascader>		   
	</item-box>
</template>

<script>
import AllComponents from './components.js'
import ItemBox from './common/ItemBox'
export default {
	name: 'WhichComponents',
	components: { ...AllComponents, ItemBox },
	props: {
		data: {
			type: Object,
			required: true
		},
		type: {
			type: String,
			default: 'MakeForm'
		},
		prop: String,
		model: Object
	}
}
</script>