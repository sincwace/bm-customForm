<template>
  <div>
    <item-box classSuffix="divider">
      <el-form-item label="内容">
        <el-input v-model="data.setting.content"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-input v-model="data.setting.icon">
          <el-button slot="append" @click="openSelectIcon('icon')">选择图标</el-button>
        </el-input>
      </el-form-item>
      <el-form-item label="文案位置">
        <el-radio-group v-model="data.setting.contentPosition">
          <el-radio-button label="left">居左</el-radio-button>
          <el-radio-button label="center">居中</el-radio-button>
          <el-radio-button label="right">居右</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="方向">
        <el-radio-group v-model="data.setting.direction">
          <el-radio-button label="horizontal">水平</el-radio-button>
          <el-radio-button label="vertical">垂直</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </item-box>
    <select-icon ref="select_icon" @select-icon="selectIconItem"></select-icon>
  </div>
</template>

<script>
import ItemBox from '../common/ItemBox';
import SelectIcon from '../common/select-icon';
export default {
  name: 'DividerConfig',
  components: { ItemBox, SelectIcon },
  data() {
    return {
      currentProp: ''
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    openSelectIcon(prop) {
      this.currentProp = prop;
      this.$refs.select_icon.open();
    },
    selectIconItem(item) {
      if (this.currentProp) {
        this.data.setting[this.currentProp] = item;
      }
    }
  }
}
</script>