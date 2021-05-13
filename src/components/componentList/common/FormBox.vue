<template>
  <el-form 
    :label-position="formData.formStyle.labelPosition" 
    :label-width="formData.formStyle.hideLabel ? '0' : formData.formStyle.labelWidth"
    :label-suffix="formData.formStyle.labelSuffix"
    :hide-required-asterisk="!formData.formStyle.showRequiredAsterisk"
    :show-message="formData.formStyle.showVerificationMessage"
    :size="formData.formStyle.size"
    :model="formData.model"
    :rules="rules"
  >
    <slot></slot>
  </el-form>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'TpFormBox',
  props: {
    formData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      rules: {}
    }
  },
  created() {
    this.formData.formDataList && this.formData.formDataList.forEach(li => {
      if (li.name === 'Layout') {
        li.setting.colList.forEach(col => {
          col && this.doRules(col);
        })
      } else {
        this.doRules(li);
      }
    });
  },
  methods: {
    doRules(li) {
      Object.keys(li.rules || {}).forEach(ruleKey => {
        if (ruleKey === 'regx') {
          li.rules[ruleKey].validator = function(rule, value, callback) {
            if (!new RegExp(rule.regx).test(value)) {
              callback(new Error(rule.message));
            } else {
              callback();
            }
          };
        }
        if (this.rules[li.fieldId]) {
          this.rules[li.fieldId].concat(li.rules[ruleKey]);
        } else {
          this.rules[li.fieldId] = [].concat(li.rules[ruleKey]);
        }
      });
    }
  }
}
</script>