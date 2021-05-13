<template>
  <div v-if="isMakeForm" :class="['tpf-mf-item', {'tpf-mf-item__active': data.makeStyle.active}]">
    <div class="tpf-mf-item--mask" v-if="showMask"></div>
    <div class="tpf-mf-item--op" v-show="data.makeStyle.active">
      <span class="tpf-mf-item--op--copy" @click="copy"><i class="el-icon-document-copy"></i></span>
      <span class="tpf-mf-item--op--delete" @click="del"><i class="el-icon-delete"></i></span>
    </div>
    <el-form-item :label="formData.formStyle.hideLabel || data.style.hideLabel ? '' : data.label" :label-width="formData.formStyle.hideLabel || data.style.hideLabel ? '0' : ''" :class="{'required': required && formData.formStyle.showRequiredAsterisk}">
      <slot></slot>
    </el-form-item>
  </div>
  <el-form-item v-else :label="formData.formStyle.hideLabel || data.style.hideLabel ? '' : data.label" :label-width="formData.formStyle.hideLabel || data.style.hideLabel ? '0' : ''" :prop="prop" :class="{'required': required && formData.formStyle.showRequiredAsterisk}">
    <slot></slot>
  </el-form-item>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'ItemBox',
  inject: ['formData'],
  props: {
    data: {
      type: Object,
      required: true
    },
    isMakeForm: {
      type: Boolean,
      default: true
    },
    prop: String,
    showMask: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    required() {
      return Reflect.has(this.data, 'rules') && Reflect.has(this.data.rules, 'required');
    }
  },
  methods: {
    copy() {
      const data = _.cloneDeep(this.data);
      data.fieldId = `${data.name}_${new Date().getTime()}`;
      const i = this.formData.formDataList.findIndex(li => li === this.data);
      if (i > -1) this.formData.formDataList.splice(i, 0, data);
      else {
        const allColList = this.formData.formDataList.filter(li => li.name === 'Layout');
        for (let x = 0; x < allColList.length; x++) {
          const j = allColList[x].setting.colList.findIndex(c => c === this.data);
          if (j > -1) allColList[x].setting.colList.splice(j, 0, data);
        }
      }
      // this.formData.model[data.fieldId] = data.value;
      // this.$set(this.formData.model, data.fieldId, data.value);
    },
    del() {
      const i = this.formData.formDataList.findIndex(li => li === this.data);
      if (i > -1) this.formData.formDataList.splice(i, 1);
      else {
        const allColList = this.formData.formDataList.filter(li => li.name === 'Layout');
        for (let x = 0; x < allColList.length; x++) {
          const j = allColList[x].setting.colList.findIndex(c => c === this.data);
          if (j > -1) allColList[x].setting.colList.splice(j, 1);
        }
      }
    }
  }
}
</script>