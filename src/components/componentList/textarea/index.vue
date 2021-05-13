<template>
  <el-input 
    v-if="model"
    v-model="model[data.fieldId]" 
    :placeholder="data.placeholder"
    :rows="data.setting.rows"
    type="textarea"
  ></el-input>
  <el-input 
    v-else
    v-model="data.value" 
    :placeholder="data.placeholder"
    :rows="data.setting.rows"
    type="textarea"
  ></el-input>
</template>

<script>
export default {
  name: 'TpTextarea',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>