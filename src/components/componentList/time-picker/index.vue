<template>
  <el-time-picker
    v-if="model"
    v-model="model[data.fieldId]"
    :picker-options="{
      selectableRange: data.setting.selectableRange,
      format: data.setting.format
    }"
    :prefix-icon="data.setting.prefixIcon"
    :placeholder="data.placeholder">
  </el-time-picker>
  <el-time-picker
    v-else
    v-model="data.value"
    :picker-options="{
      selectableRange: data.setting.selectableRange,
      format: data.setting.format
    }"
    :prefix-icon="data.setting.prefixIcon"
    :placeholder="data.placeholder">
  </el-time-picker>
</template>

<script>
export default {
  name: 'TpTimePicker',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>