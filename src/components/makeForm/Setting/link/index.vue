<template>
  <item-box classSuffix="tp-link" :model="data">
    <el-form-item label="标签">
      <el-input v-model="data.label"></el-input>
    </el-form-item>
    <el-form-item label="链接文本">
      <el-input v-model="data.setting.text"></el-input>
    </el-form-item>
    <el-form-item label="链接">
      <el-input v-model="data.setting.href"></el-input>
    </el-form-item>
    <el-form-item label="打开方式">
      <el-select v-model="data.setting.target" placeholder="请选择打开方式">
        <el-option label="新标签打开" value="_blank"></el-option>
        <el-option label="本标签打开" value="_self"></el-option>
        <el-option label="父框架打开" value="_parent"></el-option>
        <el-option label="顶部框架打开" value="_top"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="链接主题">
      <el-select v-model="data.setting.type" placeholder="请选择链接主题">
        <el-option label="默认" value="default"></el-option>
        <el-option label="主要" value="primary"></el-option>
        <el-option label="成功" value="success"></el-option>
        <el-option label="警告" value="warning"></el-option>
        <el-option label="危险" value="danger"></el-option>
        <el-option label="信息" value="info"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图标">
      <el-input v-model="data.setting.icon">
        <el-button slot="append" @click="openSelectIcon()">选择图标</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="下划线">
      <el-switch v-model="data.setting.underline" active-text="开启" inactive-text="关闭"></el-switch>
    </el-form-item>
    <el-form-item label="禁用">
      <el-switch v-model="data.setting.disabled" active-text="是" inactive-text="否"></el-switch>
    </el-form-item>
    <select-icon ref="select_icon" @select-icon="selectIconItem"></select-icon>
  </item-box>
</template>

<script>
import ItemBox from '../common/ItemBox';
import SelectIcon from '../common/select-icon';
export default {
  name: 'LinkConfig',
  components: { ItemBox, SelectIcon },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    openSelectIcon(prop) {
      this.$refs.select_icon.open();
    },
    selectIconItem(item) {
      this.data.setting.icon = item;
    }
  }
}
</script>