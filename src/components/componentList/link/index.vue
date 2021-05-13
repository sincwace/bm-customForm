<template>
  <el-link 
    :icon="data.setting.icon"
    :type="data.setting.type"
    :disabled="data.setting.disabled"
    :underline="data.setting.underline"
    :href="data.setting.href"
    :target="data.setting.target"
  >{{data.setting.text}}</el-link>
</template>

<script>
export default {
  name: 'TpLink',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>