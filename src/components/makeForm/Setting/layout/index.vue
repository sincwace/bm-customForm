<template>
  <item-box classSuffix="layout">
    <el-form-item label="列">
      <el-input-number v-model="data.setting.col" :min="1" :max="24"></el-input-number>
    </el-form-item>
    <el-form-item label="间隔">
      <el-input-number v-model="data.setting.gutter" :min="0" :max="24"></el-input-number>
    </el-form-item>
  </item-box>
</template>

<script>
import ItemBox from '../common/ItemBox';
export default {
  name: 'LayoutConfig',
  components: { ItemBox },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  watch: {
    'data.setting.col': function (v) {
      if (v > 0 && v <= 24) this.data.setting.colList.length = v;
    }
  }
}
</script>