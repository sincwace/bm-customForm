<!-- 
    组件使用说明:
    1. 组件使用v-model双向绑定
    2. 绑定的数据必须是对象, 可以是空对象
    3. 若需要提前向组件传入已经存在的地址, 则按照以下格式传入对象
    address: {
        province: {
            name: '',
            value: '3400001'
        },
        city: {
            name: '',
            value: '3400001'
        },
        area: {
            name: '',
            value: '3400001'
        },
        detail: 'XXXX街道XXXXX号'
    }
-->
<template>
	<!-- 省市区三级联动组件 -->
	<el-form :model="form"
			 :rules="rules"
			 ref="form"
			 label-position="top"
			 class="addressForm-main">
		<el-row class="address"
				v-if="showDetail">
			<el-col :span="4"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.province"
							   placeholder="请选择省"
							   @change="proChange"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressProvinces"
								   :key="'addressProvinces' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col :span="4"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.city"
							   placeholder="请选择市"
							   @change="cityChange"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressCitys"
								   :key="'addressCitys' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col :span="4"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.area"
							   placeholder="请选择区"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressArea"
								   :key="'addressArea' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col :span="12">
				<el-form-item class="form_wrap">
					<el-input placeholder="请填写街道地址"
							  :number="true"
							  :class="{bg_red: bg_red}"
							  :disabled="disabled"
							  v-model="form.detail">
					</el-input>
				</el-form-item>
			</el-col>
		</el-row>

		<el-row class="address"
				v-else>
			<el-col :span="8"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.province"
							   placeholder="请选择省"
							   @change="proChange"
							   :size="size"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressProvinces"
								   :key="'addressProvinces' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col :span="8"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.city"
							   placeholder="请选择市"
							   @change="cityChange"
							   :size="size"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressCitys"
								   :key="'addressCitys' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>

			<el-col :span="8"
					class="interval">
				<el-form-item class="form_wrap">
					<el-select v-model="form.area"
							   placeholder="请选择区"
							   :size="size"
							   :class="{bg_red: bg_red}"
							   :disabled="disabled">
						<el-option v-for="(item, index) in addressArea"
								   :key="'addressArea' + index"
								   :label="item.name"
								   :value="item">
						</el-option>
					</el-select>
				</el-form-item>
			</el-col>
		</el-row>
	</el-form>
</template>

<script>
import { mapState } from 'vuex'
import chinaAddress from './chinaAddress.json'

export default {
	name: 'addressForm', // 三级联动地址选择组件
	props: {
		value: {
			type: Object,
			default: () => {
				return {}
			}
		},
		disabled: {
			type: Boolean,
			default: false
		},
		bg_red: {
			type: Boolean,
			default: false
		},
		// 是否显示 详细地址
		showDetail: {
			type: Boolean,
			default: true
		},
		size: {
			type: String,
			default: 'medium'
		},
		data: {
			type: Object,
			required: true
		},
		model: Object
	},
	data() {
		return {
			chinaAddressJson: [],
			rules: {
				province: [
					{ required: true, message: '请选择省份', trigger: 'change' }
				],
				city: [
					{ required: true, message: '请选择城市', trigger: 'change' }
				],
				detail: [
					{
						required: true,
						message: '请填写详细地址',
						trigger: 'change'
					}
				]
			},
			form: {
				province: {},
				city: {},
				area: {},
				detail: ''
			},
			addressProvinces: [],
			addressCitys: [],
			addressArea: []
		}
	},
	methods: {
		// 省份切换
		proChange(val) {
			this.addressCitys = []
			this.chinaAddressJson.map(i => {
				if (i.parent && i.parent === val.value) {
					this.addressCitys.push(i)
				}
			})
			this.form.city = this.addressCitys[0]
			this.cityChange(this.form.city)
		},

		// 市切换
		cityChange(val) {
			this.addressArea = []
			this.chinaAddressJson.map(i => {
				if (i.parent && i.parent === val.value) {
					this.addressArea.push(i)
				}
			})
			this.form.area = this.addressArea[0]
		},

		format(val) {
			this.addressProvinces = []
			val.map(i => {
				if (!i.parent) {
					this.addressProvinces.push(i)
				}
			})
		}
	},
	created() {
		this.chinaAddressJson = chinaAddress
		this.format(this.chinaAddressJson)
		if (Object.prototype.toString.call(this.value) === '[object Object]') {
			if (Object.keys(this.value).length > 0) {
				this.form.province = this.value.province
				this.form.city = this.value.city
				this.form.area = this.value.area
				this.form.detail = this.value.detail
			}
		}
	},
	watch: {
		form: {
			handler(val) {
				this.$emit('input', val)
				this.$emit('change', val)
			},
			deep: true
		},

		value(val) {
			this.addressCitys = []
			this.addressArea = []
			this.form = val
			this.chinaAddressJson.map(i => {
				if (i.value === val.province.value) {
					this.form.province = i
				}
				if (i.parent && i.parent === val.province.value) {
					this.addressCitys.push(i)
				}
				if (i.value === val.city.value) {
					this.form.city = i
				}
				if (i.parent && i.parent === val.city.value) {
					this.addressArea.push(i)
				}
				if (i.value === val.area.value) {
					this.form.area = i
				}
			})
		}
	}
}
</script>

<style lang="less">
.addressForm-main {
	width: 100%;
	.address {
		.interval {
			padding-left: 0 !important;
			padding-right: 10px !important;
		}

		.interval:last-child {
			padding-right: 0 !important;
		}
	}
	.form_wrap {
		margin-bottom: 0;
	}
	.bg_red {
		background: red;
		input {
			background: red !important;
			border-radius: 0;
		}
	}
}
</style>

