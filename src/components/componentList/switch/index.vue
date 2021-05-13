<template>
  <el-switch
    v-if="model"
    v-model="model[data.fieldId]"
    :width="data.setting.width"
    :active-icon-class="data.setting.activeIconClass"
    :inactive-icon-class="data.setting.inactiveIconClass"
    :active-text="data.setting.activeText"
    :inactive-text="data.setting.inactiveText"
    :active-value="data.setting.activeValue"
    :inactive-value="data.setting.inactiveValue"
    :active-color="data.setting.activeColor"
    :inactive-color="data.setting.inactiveColor"
    :disabled="data.setting.disabled"
  >
  </el-switch>
  <el-switch
    v-else
    v-model="data.value"
    :width="data.setting.width"
    :active-icon-class="data.setting.activeIconClass"
    :inactive-icon-class="data.setting.inactiveIconClass"
    :active-text="data.setting.activeText"
    :inactive-text="data.setting.inactiveText"
    :active-value="data.setting.activeValue"
    :inactive-value="data.setting.inactiveValue"
    :active-color="data.setting.activeColor"
    :inactive-color="data.setting.inactiveColor"
    :disabled="data.setting.disabled"
  >
  </el-switch>
</template>

<script>
export default {
  name: 'TpSwitch',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>