<template>
  <item-box classSuffix="input-number">
    <el-form-item label="标签">
      <el-input v-model="data.label"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input-number v-model="data.value" :controls="false"></el-input-number>
    </el-form-item>
    <el-form-item label="最大值">
      <el-input-number v-model="data.setting.max" :controls="false"></el-input-number>
    </el-form-item>
    <el-form-item label="最小值">
      <el-input-number v-model="data.setting.min" :controls="false"></el-input-number>
    </el-form-item>
    <el-form-item label="步长">
      <el-input-number v-model="data.setting.step"></el-input-number>
    </el-form-item>
    <el-form-item label="尺寸">
      <el-radio-group v-model="data.setting.size">
        <el-radio-button label="">偏大</el-radio-button>
        <el-radio-button label="medium">中等</el-radio-button>
        <el-radio-button label="small">偏小</el-radio-button>
        <el-radio-button label="mini">迷你</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="按钮位置">
      <el-radio-group v-model="data.setting.controlsPosition">
        <el-radio-button label="">默认</el-radio-button>
        <el-radio-button label="right">靠右</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="data.setting.disabled" active-text="是" inactive-text="否"></el-switch>
    </el-form-item>
  </item-box>
</template>

<script>
import ItemBox from '../common/ItemBox';
export default {
  name: 'InputNumberConfig',
  components: { ItemBox },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>