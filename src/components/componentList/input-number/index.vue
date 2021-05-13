<template>
  <el-input-number
    v-if="model" 
    v-model="model[data.fieldId]" 
    :min="data.setting.min" 
    :max="data.setting.max" 
    :step="data.setting.step"
    :step-strictly="data.setting.stepStrictly"
    :size="data.setting.size"
    :disabled="data.setting.disabled"
    :controls-position="data.setting.controlsPosition"
  ></el-input-number>
  <el-input-number
    v-else
    v-model="data.value" 
    :min="data.setting.min" 
    :max="data.setting.max" 
    :step="data.setting.step"
    :step-strictly="data.setting.stepStrictly"
    :size="data.setting.size"
    :disabled="data.setting.disabled"
    :controls-position="data.setting.controlsPosition"
  ></el-input-number>
</template>

<script>
export default {
  name: 'TpInputNumber',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>