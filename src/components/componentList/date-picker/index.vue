<template>
  <el-date-picker
    v-if="model"
    v-model="model[data.fieldId]"
    :type="data.setting.type"
    :prefix-icon="data.setting.prefixIcon"
    :format="data.setting.format"
    :placeholder="data.placeholder">
  </el-date-picker>
  <el-date-picker
    v-else
    v-model="data.value"
    :type="data.setting.type"
    :prefix-icon="data.setting.prefixIcon"
    :format="data.setting.format"
    :placeholder="data.placeholder">
  </el-date-picker>
</template>

<script>
export default {
  name: 'TpDatePicker',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>