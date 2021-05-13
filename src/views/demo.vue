<template>
	<div class="demo">
		<div>
			<el-tabs v-model="tabsActiveName"
					 @tab-click="tabsHandleClick">
				<el-tab-pane label="这是你刚配置的表单"
							 name="first"></el-tab-pane>
				<el-tab-pane label="全部表单功能展示"
							 name="second"></el-tab-pane>
			</el-tabs>
		</div>

		<div v-loading="!ShowForm">
			<bm-custom-form-draw :formData="formData.project"
								 :customFormOptions="customFormOptions"
								 v-if="ShowForm"
								 ref="customForm"
								 style="margin-top: 20px"></bm-custom-form-draw>

			<div class="mt20">
				<p>配置代码:</p>
				<json-viewer :value="json"
							 :expand-depth="2"></json-viewer>
			</div>					 
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import config from './config'
import { mapState, mapMutations } from 'vuex'
import JsonViewer from 'vue-json-viewer'

export default {
	components: { JsonViewer },
	data() {
		return {
			ShowForm: false,
			tabsActiveName: 'first',
			jsonCode: {},
			customFormOptions: {},
			json: '{}'
		}
	},
	computed: {
		...mapState('common', {
			formData: state => state.formData
		})
	},
	methods: {
		// 初始化自定义表单定制化参数
		initcustomFormOptions() {
			let _this = this
			this.customFormOptions = {
				sname: {
					component_prepend: require('./component'),
					component_prepend_change: (keyName, val) => {
						// console.log(keyName)
						// console.log(val)
						_this.jsonCode.model[keyName] = val
					},
					component_suffix: require('./componentSuffix'),
					component_suffix_change: keyName => {
						console.log(keyName, 'search')
					},
					change: val => {
						// console.log(val)
					}
				},
				select: {
					options: [
						{ label: '自定义选项一', value: 'c1' },
						{ label: '自定义选项二', value: 'c2' }
					],
					disabled: val => {
						// if (_this.jsonCode.model.tel.length > 0) return false
						return false
					},
					change: val => {
						// console.log(val)
					}
				},
				checkbox: {
					options: [
						{ label: '多选1', value: 'c1' },
						{ label: '多选2', value: 'c2' }
					],
					change: val => {
						// console.log(val)
					}
				},
				radio: {
					options: [
						{ label: '单选1', value: 'c1' },
						{ label: '单选2', value: 'c2' }
					],
					change: val => {
						// console.log(val)
					}
				},
				timeChose: {
					change: val => {
						// console.log(val)
					}
				},
				dateRange: {
					change: val => {
						// console.log(val)
					}
				},
				address: {
					change: val => {
						// console.log(val)
					}
				},
				cascader: {
					options: [
						{
							value: 'zhinan',
							label: '指南',
							children: [
								{
									value: 'shejiyuanze',
									label: '设计原则',
									children: [
										{
											value: 'yizhi',
											label: '一致'
										},
										{
											value: 'fankui',
											label: '反馈'
										},
										{
											value: 'xiaolv',
											label: '效率'
										},
										{
											value: 'kekong',
											label: '可控'
										}
									]
								},
								{
									value: 'daohang',
									label: '导航',
									children: [
										{
											value: 'cexiangdaohang',
											label: '侧向导航'
										},
										{
											value: 'dingbudaohang',
											label: '顶部导航'
										}
									]
								}
							]
						},
						{
							value: 'zujian',
							label: '组件',
							children: [
								{
									value: 'basic',
									label: 'Basic',
									children: [
										{
											value: 'layout',
											label: 'Layout 布局'
										},
										{
											value: 'color',
											label: 'Color 色彩'
										},
										{
											value: 'typography',
											label: 'Typography 字体'
										},
										{
											value: 'icon',
											label: 'Icon 图标'
										},
										{
											value: 'button',
											label: 'Button 按钮'
										}
									]
								},
								{
									value: 'form',
									label: 'Form',
									children: [
										{
											value: 'radio',
											label: 'Radio 单选框'
										},
										{
											value: 'checkbox',
											label: 'Checkbox 多选框'
										},
										{
											value: 'input',
											label: 'Input 输入框'
										},
										{
											value: 'input-number',
											label: 'InputNumber 计数器'
										},
										{
											value: 'select',
											label: 'Select 选择器'
										},
										{
											value: 'cascader',
											label: 'Cascader 级联选择器'
										},
										{
											value: 'switch',
											label: 'Switch 开关'
										},
										{
											value: 'slider',
											label: 'Slider 滑块'
										},
										{
											value: 'time-picker',
											label: 'TimePicker 时间选择器'
										},
										{
											value: 'date-picker',
											label: 'DatePicker 日期选择器'
										},
										{
											value: 'datetime-picker',
											label:
												'DateTimePicker 日期时间选择器'
										},
										{
											value: 'upload',
											label: 'Upload 上传'
										},
										{
											value: 'rate',
											label: 'Rate 评分'
										},
										{
											value: 'form',
											label: 'Form 表单'
										}
									]
								},
								{
									value: 'data',
									label: 'Data',
									children: [
										{
											value: 'table',
											label: 'Table 表格'
										},
										{
											value: 'tag',
											label: 'Tag 标签'
										},
										{
											value: 'progress',
											label: 'Progress 进度条'
										},
										{
											value: 'tree',
											label: 'Tree 树形控件'
										},
										{
											value: 'pagination',
											label: 'Pagination 分页'
										},
										{
											value: 'badge',
											label: 'Badge 标记'
										}
									]
								},
								{
									value: 'notice',
									label: 'Notice',
									children: [
										{
											value: 'alert',
											label: 'Alert 警告'
										},
										{
											value: 'loading',
											label: 'Loading 加载'
										},
										{
											value: 'message',
											label: 'Message 消息提示'
										},
										{
											value: 'message-box',
											label: 'MessageBox 弹框'
										},
										{
											value: 'notification',
											label: 'Notification 通知'
										}
									]
								},
								{
									value: 'navigation',
									label: 'Navigation',
									children: [
										{
											value: 'menu',
											label: 'NavMenu 导航菜单'
										},
										{
											value: 'tabs',
											label: 'Tabs 标签页'
										},
										{
											value: 'breadcrumb',
											label: 'Breadcrumb 面包屑'
										},
										{
											value: 'dropdown',
											label: 'Dropdown 下拉菜单'
										},
										{
											value: 'steps',
											label: 'Steps 步骤条'
										}
									]
								},
								{
									value: 'others',
									label: 'Others',
									children: [
										{
											value: 'dialog',
											label: 'Dialog 对话框'
										},
										{
											value: 'tooltip',
											label: 'Tooltip 文字提示'
										},
										{
											value: 'popover',
											label: 'Popover 弹出框'
										},
										{
											value: 'card',
											label: 'Card 卡片'
										},
										{
											value: 'carousel',
											label: 'Carousel 走马灯'
										},
										{
											value: 'collapse',
											label: 'Collapse 折叠面板'
										}
									]
								}
							]
						},
						{
							value: 'ziyuan',
							label: '资源',
							children: [
								{
									value: 'axure',
									label: 'Axure Components'
								},
								{
									value: 'sketch',
									label: 'Sketch Templates'
								},
								{
									value: 'jiaohu',
									label: '组件交互文档'
								}
							]
						}
					],
					change: val => {
						// console.log(val)
					}
				}
			}
		},

		tabsHandleClick() {
			this.ShowForm = false
			setTimeout(() => {
				if (this.tabsActiveName === 'first') {
					this.SET_FORMDATA({
						key: 'project',
						data: this.jsonCode
					})
					this.json = this.jsonCode
				} else {
					this.SET_FORMDATA({
						key: 'project',
						data: config.jsonCode
					})
					this.initcustomFormOptions()
					this.json = config.jsonCode
				}
				this.ShowForm = true
			}, 1000)
		},

		...mapMutations('common', ['SET_FORMDATA'])
	},
	created() {
		axios
			.post('http://1.117.79.182:3000/form/getFormJson')
			.then(res => {
				// console.log(res.data)
				let data = res.data.data
				this.jsonCode = data.formData[data.formData.length - 1].jsonCode
				this.SET_FORMDATA({
					key: 'project',
					data: this.jsonCode
				})
				// 测试
				this.initcustomFormOptions()
				this.json = this.jsonCode
				this.ShowForm = true
			})
			.catch(err => {
				console.log(err)
			})
	}
}
</script>

<style lang="less">
.demo {
	padding: 20px;
	height: 100%;
}
</style>
