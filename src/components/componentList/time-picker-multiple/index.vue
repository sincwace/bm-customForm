<template>
  <el-time-picker
    v-if="model"
    is-range
    v-model="model[data.fieldId]"
    :range-separator="data.setting.rangeSeparator"
    :start-placeholder="data.setting.startPlaceholder"
    :end-placeholder="data.setting.endPlaceholder"
    :picker-options="{
      selectableRange: data.setting.selectableRange,
      format: data.setting.format
    }"
    :prefix-icon="data.setting.prefixIcon"
    :placeholder="data.placeholder"
    @focus="focus"
  >
  </el-time-picker>
  <el-time-picker
    v-else
    is-range
    v-model="data.value"
    :range-separator="data.setting.rangeSeparator"
    :start-placeholder="data.setting.startPlaceholder"
    :end-placeholder="data.setting.endPlaceholder"
    :picker-options="{
      selectableRange: data.setting.selectableRange,
      format: data.setting.format
    }"
    :prefix-icon="data.setting.prefixIcon"
    :placeholder="data.placeholder"
    @focus="focus"
  >
  </el-time-picker>
</template>

<script>
export default {
  name: 'TpTimePickerMultiple',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  },
  methods: {
    focus() {
      if (Array.isArray(this.data.value) && this.data.value.length === 0) this.data.value = [new Date(), new Date()]
    }
  }
}
</script>