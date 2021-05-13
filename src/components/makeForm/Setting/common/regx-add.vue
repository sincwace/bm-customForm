<template>
	<el-form-item label="正则">
		<div class="tpf-mf-setting-regx"
			 v-if="inputing">
			<el-row>
				<el-col :span="20">
					<el-input v-model="addForm.regx"
							  @blur="blur"
							  placeholder="输入要匹配的正则">
						<template slot="prepend">/</template>
						<template slot="append">/</template>
					</el-input><br>
					<el-input v-model="addForm.message"
							  @blur="blur"
							  placeholder="匹配不成功的提示"></el-input>
				</el-col>
				<el-col :span="4"
						class="tpf-mf-setting-regx--delete-col">
					<i class="el-icon-delete"
					   @click.stop="delRegx(value.regx)"
					   style="cursor:pointer;"></i>
				</el-col>
			</el-row>
		</div>
		
		<el-button type="text"
				   icon="el-icon-plus"
				   size="mini"
				   v-else
				   @click="add">添加正则项</el-button>
	</el-form-item>
</template>

<script>
import _ from 'lodash'

export default {
	name: 'RegxAdd',
	props: {
		value: Object
	},
	data() {
		return {
			inputing: false,
			addForm: {
				regx: '',
				message: ''
			},
			rules: {
				regx: [
					{
						required: true,
						message: '请输入正则表达式',
						trigger: 'blur'
					}
				],
				message: [
					{ required: true, message: '请输入提示', trigger: 'blur' }
				]
			}
		}
	},
	watch: {
		value: {
			handler(v) {
				if (v.regx) {
					this.inputing = true
					Object.assign(this.addForm, v.regx)
				}
			},
			immediate: true
		}
	},
	methods: {
		add() {
			this.addForm = {
				regx: '',
				message: ''
			}
			this.inputing = true
		},
		blur() {
			if (_.trim(this.addForm.regx) === '') {
				this.$delete(this.value, 'regx')
				return
			}
			const obj = {
				...this.addForm,
				trigger: 'blur'
			}
			this.$set(this.value, 'regx', obj)
			this.inputing = true
		},
		delRegx(item) {
			this.$delete(this.value, 'regx')
			this.inputing = false
		}
	}
}
</script>