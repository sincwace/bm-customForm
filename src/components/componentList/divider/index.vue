<template>
  <el-divider :direction="data.setting.direction" :content-position="data.setting.contentPosition">
    <i v-if="data.setting.icon" :class="['tp-divider--icon', data.setting.icon]"></i>
    <span v-if="data.setting.content" v-text="data.setting.content"></span>
  </el-divider>
</template>

<script>
export default {
  name: 'TpDivider',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>