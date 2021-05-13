<template>
  <el-input v-if="model" show-password v-model="model[data.fieldId]" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
  <el-input v-else show-password v-model="data.value" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
</template>

<script>
export default {
  name: 'TpPassword',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>