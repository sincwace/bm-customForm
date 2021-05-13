<template>
	<div>
		<item-box classSuffix="input">
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
			<el-form-item label="最大长度">
				<el-input v-model="data.maxlength"></el-input>
			</el-form-item>
			<el-form-item label="字数统计">
				<el-col :span="12">
					<el-switch v-model="data.showWordLimit"
							   active-text="有"
							   inactive-text="无">
					</el-switch>
				</el-col>
			</el-form-item>
			<el-form-item label="单位">
				<el-col :span="12">
					<el-switch v-model="data.isHaveUnit"
							   active-text="有"
							   inactive-text="无"
							   :disabled="data.setting.isHaveSuffixComponent">
					</el-switch>
				</el-col>
				<el-col :span="12">
					<el-input v-model="data.unitName"
							  v-if="data.isHaveUnit"
							  placeholder="单位名称">
					</el-input>
				</el-col>
			</el-form-item>
			<el-form-item label="前图标">
				<el-switch v-model="data.setting.isHavePrefixIcon"
						   @change="isHavePrefixIconChange"
						   active-text="有"
						   inactive-text="无">
				</el-switch>
				<el-input v-model="data.setting.prefixIcon"
						  v-if="data.setting.isHavePrefixIcon">
					<el-button slot="append"
							   @click="openSelectIcon('prefixIcon')">选择图标</el-button>
				</el-input>
			</el-form-item>
			<el-form-item label="后图标">
				<el-switch v-model="data.setting.isHaveSuffixIcon"
						   @change="isHaveSuffixIconChange"
						   active-text="有"
						   inactive-text="无">
				</el-switch>
				<el-input v-model="data.setting.suffixIcon"
						  v-if="data.setting.isHaveSuffixIcon">
					<el-button slot="append"
							   @click="openSelectIcon('suffixIcon')">选择图标</el-button>
				</el-input>
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
			<el-form-item label="过滤"
						  v-if="required">
				<el-select v-model="data.filter"
						   placeholder="请选择"
						   style="width: 100%">
					<el-option v-for="(i, index) in filters"
							   :key="'rules' + index"
							   :label="i.label"
							   :value="i.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="验证规则"
						  v-if="required">
				<el-select v-model="data.rule"
						   placeholder="请选择"
						   style="width: 100%">
					<el-option v-for="(i, index) in rules"
							   :key="'rules' + index"
							   :label="i.label"
							   :value="i.value">
					</el-option>
				</el-select>
			</el-form-item>
			<!-- <regx-add v-model="data.rules"></regx-add> -->
		</item-box>

		<select-icon ref="select_icon"
					 @select-icon="selectIconItem"></select-icon>
	</div>
</template>

<script>
import ItemBox from '../common/ItemBox'
import SelectIcon from '../common/select-icon'
import RegxAdd from '../common/regx-add'
import Mixins from '../common/mixins'

export default {
	name: 'InputConfig',
	mixins: [Mixins],
	components: { ItemBox, SelectIcon, RegxAdd },
	data() {
		return {
			currentProp: '',
			rules: [
				{ label: '无', value: '' },
				{ label: '数字', value: 'number' },
				{ label: '邮箱', value: 'email' },
				{ label: '身份证', value: 'idCard' },
				{ label: '座机', value: 'phone' },
				{ label: '手机', value: 'mobilePhone' },
				{ label: '密码', value: 'pwd' },
				{ label: '邮编', value: 'postal' },
				{ label: '大写', value: 'upper' },
				{ label: '小写', value: 'lower' }
			],
			filters: [
				{ label: '无', value: '' },
				{ label: '保留整数', value: 'keepInt' },
				{ label: '去标点符号、空格、特殊字符', value: 'removeAllSpecial' },
				{ label: '去特殊字符', value: 'removeSpecialChar' },
				{ label: '去空格', value: 'removeSpace' },
				{ label: '去标点符号', value: 'removePunctuation' },
				{ label: '去中文', value: 'removeChinese' },
				{ label: '保留中文', value: 'keepChinese' },
				{ label: '去英文', value: 'removeEnglish' },
				{ label: '保留英文', value: 'keepEnglish' },
			]
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	watch: {
		data(v) {
			this.required = v.rules.required ? v.rules.required.required : false
		}
	},
	methods: {
		openSelectIcon(prop) {
			this.currentProp = prop
			this.$refs.select_icon.open()
		},

		selectIconItem(item) {
			if (this.currentProp) {
				this.data.setting[this.currentProp] = item
			}
		},

		isHavePrefixIconChange(val) {
			if (!val) {
				this.data.setting.prefixIcon = ''
			}
		},

		isHaveSuffixIconChange(val) {
			if (!val) {
				this.data.setting.suffixIcon = ''
			}
		}
	}
}
</script>