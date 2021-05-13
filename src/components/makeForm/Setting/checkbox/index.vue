<template>
	<item-box classSuffix="checkbox">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<el-form-item label="远程数据">
			<el-switch v-model="data.setting.isRemote"
					   active-text="是"
					   inactive-text="否"></el-switch>
		</el-form-item>
		<el-form-item label="选项"
					  v-if="!data.setting.isRemote">
			<el-checkbox-group v-model="data.value">
				<div class="tpf-mf-setting-checkbox--checkbox"
					 v-for="item in data.selections"
					 :key="item.value">
					<el-checkbox :label="item.value">
						<span v-text="item.label"></span>
					</el-checkbox>
					<span class="tpf-mf-setting-checkbox--checkbox--delete"><i class="el-icon-delete"
						   @click.stop="delCheckbox(item)"></i></span>
					<span class="tpf-mf-setting-checkbox--checkbox--default-text"
						  v-show="data.value.includes(item.value)">默认选择</span>
				</div>
			</el-checkbox-group>
			<div class="tpf-mf-setting-checkbox--add"
				 v-if="inputing">
				<el-form :inline="true"
						 :model="addForm"
						 class="tpf-mf-setting-checkbox--add--form"
						 :rules="rules">
					<el-form-item prop="label">
						<el-input size="mini"
								  v-model="addForm.label"
								  placeholder="请输入标签"></el-input>
					</el-form-item>
					<el-form-item prop="value">
						<el-input size="mini"
								  v-model="addForm.value"
								  placeholder="请输入值"></el-input>
					</el-form-item>
				</el-form>
				<el-button type="primary"
						   icon="el-icon-check"
						   size="mini"
						   @click="add"></el-button>
				<el-button type="info"
						   icon="el-icon-close"
						   size="mini"
						   @click="inputing=!inputing"></el-button>
			</div>
			<el-button type="text"
					   icon="el-icon-plus"
					   size="mini"
					   v-else
					   @click="inputing=!inputing;addForm.label='';addForm.value=''">添加一项</el-button>
		</el-form-item>
		<template v-else>
			<el-form-item label="请求地址">
				<el-input v-model="data.setting.remoteUrl"
						  placeholder="请输入远程地址"
						  @blur="getRemoteData"></el-input>
			</el-form-item>
			<el-form-item label="数据路径">
				<el-input v-model="data.setting.remoteDataPath"
						  placeholder="请输入远程获取路径">
					<template slot="prepend">data.</template>
				</el-input>
			</el-form-item>
			<el-form-item label="Label">
				<el-input v-model="data.setting.remoteDataProps.label"
						  placeholder="远程数据中的label"></el-input>
			</el-form-item>
			<el-form-item label="Value">
				<el-input v-model="data.setting.remoteDataProps.value"
						  placeholder="远程数据中的value"></el-input>
			</el-form-item>
			<el-form-item label="远程数据">
				<div v-if="!remoteData || remoteData.length === 0">暂无数据</div>
				<el-checkbox-group v-model="data.value">
					<div class="tpf-mf-setting-checkbox--checkbox"
						 v-for="item in remoteData"
						 :key="item[data.setting.remoteDataProps.value]">
						<el-checkbox :label="item[data.setting.remoteDataProps.value]">
							<span v-text="item[data.setting.remoteDataProps.label]"></span>
						</el-checkbox>
						<span class="tpf-mf-setting-checkbox--checkbox--delete"><i class="el-icon-delete"
							   @click.stop="delCheckbox(item)"></i></span>
						<span class="tpf-mf-setting-checkbox--checkbox--default-text"
							  v-show="data.value.includes(item[data.setting.remoteDataProps.value])">默认选择</span>
					</div>
				</el-checkbox-group>
			</el-form-item>
		</template>
	</item-box>
</template>

<script>
import _ from 'lodash'
import ItemBox from '../common/ItemBox'
import RemoteMixin from '../../../utils/remote-mixin'
export default {
	name: 'CheckboxConfig',
	mixins: [RemoteMixin],
	components: { ItemBox },
	data() {
		return {
			inputing: false,
			addForm: {
				label: '',
				value: ''
			},
			rules: {
				label: [
					{ required: true, message: '请输入标签', trigger: 'blur' }
				],
				value: [
					{ required: true, message: '请输入值', trigger: 'blur' }
				]
			}
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	watch: {},
	methods: {
		delCheckbox(item) {
			const i = this.data.selections.findIndex(s => s === item)
			this.data.selections.splice(i, 1)
			const j = this.data.value.indexOf(item.value)
			if (j > -1) {
				this.data.value.splice(j, 1)
			}
		},
		add() {
			if (
				_.trim(this.addForm.label) != '' &&
				_.trim(this.addForm.value) != ''
			) {
				this.data.selections.push({ ...this.addForm })
				this.inputing = !this.inputing
			}
		}
	}
}
</script>