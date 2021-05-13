<template>
  <el-input v-if="model" v-model="model[data.fieldId]" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
  <el-input v-else v-model="data.value" :placeholder="data.placeholder" :prefix-icon="data.setting.prefixIcon" :suffix-icon="data.setting.suffixIcon"></el-input>
</template>

<script>
export default {
  name: 'TpInput',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>