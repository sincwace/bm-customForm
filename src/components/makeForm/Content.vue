<template>
	<div class="tpf-mf-layout--content">
		<div class="tpf-mf-layout--content--header">
			<div class="tpf-mf-layout--content--header--place"></div>
			<el-button class="tpf-mf-layout--content--header--btn"
					   type="text"
					   icon="el-icon-copy-document"
					   @click="showForm">查看表单</el-button>
			<el-button class="tpf-mf-layout--content--header--btn"
					   type="text"
					   icon="el-icon-view"
					   @click="showJSON">查看JSON</el-button>
			<el-button class="tpf-mf-layout--content--header--btn"
					   type="text"
					   icon="el-icon-upload"
					   @click="sendJSON">发送至服务器</el-button>
			<el-button class="tpf-mf-layout--content--header--btn"
					   type="text"
					   icon="el-icon-s-unfold"
					   @click="goToDemo">前往demo</el-button>		   		   
		</div>

		<tp-form-box class="tpf-mf-layout--content--form"
					 :formData="formData">
			<draggable class="tpf-mf-layout--content--draggable"
					   v-model="formData.formDataList"
					   group="TpFormGroup"
					   animation="300">
				<which-component v-for="li in formData.formDataList"
								 :key="li.fieldId"
								 :data="li"
								 @click.native="clickComponent(li)"></which-component>
			</draggable>
		</tp-form-box>

		<el-dialog title="查看表单"
				   :visible.sync="showFormVisible"
				   width="80%">
			<tp-form v-if="showFormVisible"
					 :formData="form"></tp-form>
		</el-dialog>

		<el-dialog title="查看JSON"
				   :visible.sync="showJSONVisible"
				   width="600px">
			<json-viewer v-if="showJSONVisible"
						 :value="json"
						 :expand-depth="2"></json-viewer>
		</el-dialog>
	</div>
</template>

<script>
import draggable from 'vuedraggable'
import TpFormBox from '../componentList/common/FormBox'
import WhichComponent from '../componentList/WhichComponent.vue'
import JsonViewer from 'vue-json-viewer'
import _ from 'lodash'
import axios from 'axios'
import querystring from 'qs'
import { isHaveKey } from '../utils/tool'

export default {
	name: 'Content',
	components: { draggable, TpFormBox, WhichComponent, JsonViewer },
	inject: ['formData'],
	provide() {
		return {
			customFormOptions: this.customFormOptions,
			componentChange: this.componentChange
		}
	},
	data() {
		return {
			showFormVisible: false,
			showJSONVisible: false,
			json: '{}',
			form: {},
			customFormOptions: {}
		}
	},
	watch: {
		'formData.formDataList': {
			handler(v) {
				this.$emit('change', v)
			},
			deep: true
		}
	},
	methods: {
		clickComponent(item) {
			this.formData.formDataList.forEach(f => {
				if (f.name === 'Layout') {
					f.setting.colList.forEach(c => {
						if (c) {
							// console.log('abc:', c)
							c && (c.makeStyle.active = false)
						}
					})
				}
				if (f === item) f.makeStyle.active = true
				else f.makeStyle.active = false
			})
			this.$emit('select-change', item)
		},

		showForm() {
			this.form = this.$parent.$getFormDataByVueSet()
			this.showFormVisible = true
			// this.$store.state.formData = this.formData;
			// this.$router.push('/show')
		},

		showJSON() {
			this.json = this.$parent.$getFormDataByVueSet()
			// console.log(JSON.stringify(this.json))
			this.showJSONVisible = true
		},

		sendJSON() {
			this.json = this.$parent.$getFormDataByVueSet()
			axios.post('http://172.16.3.164:3000/form/addFormJson', querystring.stringify({
				jsonCode: JSON.stringify(this.json)
			})).then(res => {
				// console.log(res)
				if (res.data.type === 'success') {
					this.$message({
						type: 'success',
						message: '上传配置成功'
					})
				}
			}).catch(err => {
				console.log(err)
			})
		},

		goToDemo() {
			this.$router.push({ name: 'demo' })
		},

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