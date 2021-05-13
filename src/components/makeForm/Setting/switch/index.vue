<template>
	<item-box classSuffix="switch">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="默认值">
			<el-select v-model="value"
					   placeholder="请选择默认值">
				<el-option v-for="(item,i) in options"
						   :key="i"
						   :label="item"
						   :value="item">
				</el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="打开图标">
			<el-input v-model="data.setting.activeIconClass">
				<el-button slot="append"
						   @click="openSelectIcon('activeIconClass')">选择图标</el-button>
			</el-input>
		</el-form-item>
		<el-form-item label="关闭图标">
			<el-input v-model="data.setting.inactiveIconClass">
				<el-button slot="append"
						   @click="openSelectIcon('inactiveIconClass')">选择图标</el-button>
			</el-input>
		</el-form-item>
		<el-form-item label="打开文字">
			<el-input v-model="data.setting.activeText"></el-input>
		</el-form-item>
		<el-form-item label="关闭文字">
			<el-input v-model="data.setting.inactiveText"></el-input>
		</el-form-item>
		<el-form-item label="值类型">
			<el-radio-group v-model="type">
				<el-radio-button label="Boolean">布尔型</el-radio-button>
				<el-radio-button label="String">字符型</el-radio-button>
				<el-radio-button label="Number">数字型</el-radio-button>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="打开值">
			<el-input v-model="activeValue"></el-input>
		</el-form-item>
		<el-form-item label="关闭值">
			<el-input v-model="inactiveValue"></el-input>
		</el-form-item>
		<el-form-item label="打开背景色">
			<el-color-picker v-model="data.setting.activeColor"></el-color-picker>
		</el-form-item>
		<el-form-item label="关闭背景色">
			<el-color-picker v-model="data.setting.inactiveColor"></el-color-picker>
		</el-form-item>
		<el-form-item label="禁用">
			<el-switch v-model="data.setting.disabled"
					   active-text="是"
					   inactive-text="否"></el-switch>
		</el-form-item>
		<select-icon ref="select_icon"
					 @select-icon="selectIconItem"></select-icon>
	</item-box>
</template>

<script>
import ItemBox from '../common/ItemBox'
import SelectIcon from '../common/select-icon'
import _ from 'lodash'
export default {
	name: 'SwitchConfig',
	components: { ItemBox, SelectIcon },
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			currentProp: '',
			type: 'Boolean',
			options: [],
			value: `${this.data.setting.activeValue}`,
			activeValue: `${this.data.setting.activeValue}`,
			inactiveValue: `${this.data.setting.inactiveValue}`
		}
	},
	watch: {
		type: {
			handler(v) {
				this.toUtilValue(v)
			},
			immediate: true
		},
		value(v) {
			this.setValue(v, true)
		},
		activeValue(v) {
			this.toUtilValue(this.type)
		},
		inactiveValue(v) {
			this.toUtilValue(this.type)
		}
	},
	methods: {
		openSelectIcon(prop, i) {
			this.currentProp = prop
			this.$refs.select_icon.open()
		},
		selectIconItem(item) {
			if (this.currentProp) {
				this.data.setting[this.currentProp] = item
			}
		},
		toBoolean(x) {
			if (
				!x ||
				x === '0' ||
				x === 'false' ||
				x === 'null' ||
				x === 'undefined' ||
				x === 'NaN'
			) {
				return false
			} else return true
		},
		setValue(v, watch) {
			if (this.type === 'Boolean') {
				this.data.value = this.toBoolean(v)
			} else if (this.type === 'Number') {
				this.data.value = _.toNumber(v)
			} else {
				this.data.value = _.toString(v)
			}
			if (!watch) this.value = v
		},
		toUtilValue(type) {
			if (type === 'Boolean') {
				this.data.setting.activeValue = this.toBoolean(this.activeValue)
				this.data.setting.inactiveValue = this.toBoolean(
					this.inactiveValue
				)
			} else if (type === 'Number') {
				this.data.setting.activeValue = _.toNumber(this.activeValue)
				this.data.setting.inactiveValue = _.toNumber(this.inactiveValue)
			} else {
				this.data.setting.activeValue = _.toString(this.activeValue)
				this.data.setting.inactiveValue = _.toString(this.inactiveValue)
			}
			this.options = [this.activeValue, this.inactiveValue]
			this.setValue(this.activeValue)
		}
	}
}
</script>