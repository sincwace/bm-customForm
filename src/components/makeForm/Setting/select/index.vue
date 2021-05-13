<template>
	<item-box classSuffix="select">
		<el-form-item label="标签">
			<el-input v-model="data.label"></el-input>
		</el-form-item>
		<el-form-item label="字段">
			<el-input v-model="data.field"></el-input>
		</el-form-item>
		<!-- <el-form-item label="远程数据">
			<el-switch v-model="data.setting.isRemote"
					   active-text="是"
					   inactive-text="否"></el-switch>
		</el-form-item> -->
		<el-form-item label="选项"
					  v-if="!data.setting.isRemote">
			<el-checkbox-group v-model="data.value"
							   v-if="data.multiple">
				<div class="tpf-mf-setting-select--multiple"
					 v-for="item in data.selections"
					 :key="item.value">
					<el-checkbox :label="item.value">
						<span v-text="item.label"></span>
					</el-checkbox>
					<span class="tpf-mf-setting-select--multiple--delete"><i class="el-icon-delete"
						   @click.stop="delSelect(item)"></i></span>
					<span class="tpf-mf-setting-select--multiple--default-text"
						  v-show="data.value.includes(item.value)">默认选择</span>
				</div>
			</el-checkbox-group>
			<div class="tpf-mf-setting-radio--radio"
				 v-for="item in data.selections"
				 :key="item.value"
				 v-else>
				<el-radio v-model="data.value"
						  :label="item.value">
					<span v-text="item.label"></span>
				</el-radio>
				<span class="tpf-mf-setting-radio--radio--delete"><i class="el-icon-delete"
					   @click.stop="delSelect(item)"></i></span>
				<span class="tpf-mf-setting-radio--radio--default-text"
					  v-show="item.value === data.value">默认选择</span>
			</div>
			<div class="tpf-mf-setting-select--add"
				 v-if="inputing">
				<el-form :inline="true"
						 :model="addForm"
						 class="tpf-mf-setting-select--add--form"
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
				<el-checkbox-group v-model="data.value"
								   v-if="data.multiple">
					<div class="tpf-mf-setting-select--multiple"
						 v-for="item in remoteData"
						 :key="item[data.setting.remoteDataProps.value]">
						<el-checkbox :label="item[data.setting.remoteDataProps.value]">
							<span v-text="item[data.setting.remoteDataProps.label]"></span>
						</el-checkbox>
						<span class="tpf-mf-setting-select--multiple--delete"><i class="el-icon-delete"
							   @click.stop="delSelect(item)"></i></span>
						<span class="tpf-mf-setting-select--multiple--default-text"
							  v-show="data.value.includes(item[data.setting.remoteDataProps.value])">默认选择</span>
					</div>
				</el-checkbox-group>
				<div class="tpf-mf-setting-radio--radio"
					 v-for="item in remoteData"
					 :key="item[data.setting.remoteDataProps.value]"
					 v-else>
					<el-radio v-model="data.value"
							  :label="item[data.setting.remoteDataProps.value]">
						<span v-text="item[data.setting.remoteDataProps.label]"></span>
					</el-radio>
					<span class="tpf-mf-setting-radio--radio--delete"><i class="el-icon-delete"
						   @click.stop="delSelect(item)"></i></span>
					<span class="tpf-mf-setting-radio--radio--default-text"
						  v-show="item[data.setting.remoteDataProps.value] === data.value">默认选择</span>
				</div>
			</el-form-item>
		</template>
		<el-form-item label="多选支持">
			<el-switch v-model="multiple"
					   active-text="开启"
					   inactive-text="关闭"></el-switch>
		</el-form-item>
	</item-box>
</template>

<script>
import _ from 'lodash'
import ItemBox from '../common/ItemBox'
import RemoteMixin from '../../../utils/remote-mixin'
export default {
	name: 'SelectConfig',
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
			},
			multiple: this.data.multiple
		}
	},
	props: {
		data: {
			type: Object,
			required: true
		}
	},
	watch: {
		multiple(v) {
			if (v) this.data.value = []
			else this.data.value = ''
			this.data.multiple = v
		}
	},
	methods: {
		delSelect(item) {
			const i = this.data.selections.findIndex(s => s === item)
			this.data.selections.splice(i, 1)
			if (this.data.multiple) {
				const j = this.data.value.indexOf(item.value)
				if (j > -1) {
					this.data.value.splice(j, 1)
				}
			} else {
				if (this.data.value === item.value) this.data.value = ''
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
		},
		multipleChange(v) {}
	}
}
</script>