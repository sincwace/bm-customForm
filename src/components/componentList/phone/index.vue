<template>
  <el-input v-if="model" v-model="model[data.fieldId]" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
  <el-input v-else v-model="data.value" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
</template>

<script>
export default {
  name: 'TpPhone',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  },
  created() {
    this.data.rules['phone'] = {
      validator(rule, value, callback) {
        const reg = /^1[3|4|5|7|8|9][0-9]{9}$/;
        if (!reg.test(value)) {
          callback(new Error('格式不正确'));
        }
        callback();
      },
      trigger: 'blur'
    }
  }
}
</script>