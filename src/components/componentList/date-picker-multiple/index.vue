<template>
  <el-date-picker
    v-if="model"
    v-model="model[data.fieldId]"
    :type="data.setting.type"
    :align="data.setting.align"
    :range-separator="data.setting.rangeSeparator"
    :start-placeholder="data.setting.startPlaceholder"
    :end-placeholder="data.setting.endPlaceholder"
    :format="data.setting.format"
    :prefix-icon="data.setting.prefixIcon"
  >
  </el-date-picker>
  <el-date-picker
    v-else
    v-model="data.value"
    :type="data.setting.type"
    :range-separator="data.setting.rangeSeparator"
    :start-placeholder="data.setting.startPlaceholder"
    :end-placeholder="data.setting.endPlaceholder"
    :format="data.setting.format"
    :value-format="data.setting.valueFormat"
    :prefix-icon="data.setting.prefixIcon"
  >
  </el-date-picker>
</template>

<script>
export default {
  name: 'TpDatePickerMultiple',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>