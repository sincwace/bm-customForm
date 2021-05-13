<template>
	<el-tabs v-model="activeName"
			 @tab-click="handleClick">
		<el-tab-pane label="组件设置"
					 name="componentSetting">
			<which-component :data="data"></which-component>
		</el-tab-pane>
		
		<el-tab-pane label="表单设置"
					 name="formSetting"
					 class="tpf-mf-layout--right--form-setting">
			<el-form label-position="right"
					 :model="formStyle"
					 label-width="85px"
					 size="small">
				<el-form-item label="隐藏标签">
					<el-switch v-model="formStyle.hideLabel"
							   active-text="是"
							   inactive-text="否">
					</el-switch>
				</el-form-item>
				<el-form-item label="标签宽度"
							  prop="labelWidth"
							  :rules="[{required: true, message: '必填', trigger: 'blur'}]">
					<el-input v-model="formStyle.labelWidth"
							  placeholder="标签字段宽度单位px"></el-input>
				</el-form-item>
				<el-form-item label="标签后缀"
							  prop="labelSuffix">
					<el-input v-model="formStyle.labelSuffix"
							  placeholder="标签字段后缀"></el-input>
				</el-form-item>
				<el-form-item label="标签位置">
					<el-radio-group v-model="formStyle.labelPosition">
						<el-radio-button label="top">居上</el-radio-button>
						<el-radio-button label="left">居左</el-radio-button>
						<el-radio-button label="right">居右</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="组件尺寸">
					<el-radio-group v-model="formStyle.size">
						<el-radio-button label="">偏大</el-radio-button>
						<el-radio-button label="medium">中等</el-radio-button>
						<el-radio-button label="small">偏小</el-radio-button>
						<el-radio-button label="mini">迷你</el-radio-button>
					</el-radio-group>
				</el-form-item>
				<el-form-item label="必填星号">
					<el-switch v-model="formStyle.showRequiredAsterisk"
							   active-text="显示"
							   inactive-text="隐藏">
					</el-switch>
				</el-form-item>
				<el-form-item label="验证提示">
					<el-switch v-model="formStyle.showVerificationMessage"
							   active-text="显示"
							   inactive-text="隐藏">
					</el-switch>
				</el-form-item>
			</el-form>
		</el-tab-pane>
	</el-tabs>
</template>

<script>
import WhichComponent from './WhichComponent'

export default {
	name: 'Setting', // 组件与表单设置
	components: { WhichComponent },
	inject: ['formData'],
	data() {
		return {
			activeName: 'componentSetting',
			formStyle: this.formData.formStyle
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	watch: {
		'formStyle.hideLabel': function(v) {
			if (v) {
				this.formStyle.labelWidth = '0'
			} else {
				this.formStyle.labelWidth = '85px'
			}
		}
	},
	methods: {
		handleClick(tab) {
			// console.log(tab);
		}
	}
}
</script>