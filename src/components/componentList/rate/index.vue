<template>
  <el-rate 
    v-if="model"
    v-model="model[data.fieldId]"
    :max="data.setting.max"
    :allow-half="data.setting.allowHalf"
    :colors="data.setting.colors"
    :void-color="data.setting.voidColor"
    :icon-classes="data.setting.iconClasses"
    :void-icon-class="data.setting.voidIconClass"
    :show-text="data.setting.showText"
    :text-color="data.setting.textColor"
    :texts="data.setting.texts"
    :show-score="data.setting.showScore"
    :score-template="data.setting.scoreTemplate"
  ></el-rate>
  <el-rate 
    v-else
    v-model="data.value"
    :max="data.setting.max"
    :allow-half="data.setting.allowHalf"
    :colors="data.setting.colors"
    :void-color="data.setting.voidColor"
    :icon-classes="data.setting.iconClasses"
    :void-icon-class="data.setting.voidIconClass"
    :show-text="data.setting.showText"
    :text-color="data.setting.textColor"
    :texts="data.setting.texts"
    :show-score="data.setting.showScore"
    :score-template="data.setting.scoreTemplate"
  ></el-rate>
</template>

<script>
export default {
  name: 'TpRate',
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>