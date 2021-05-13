<template>
  <item-box classSuffix="rate">
    <el-form-item label="标签">
      <el-input v-model="data.label"></el-input>
    </el-form-item>
    <el-form-item label="默认值">
      <el-input v-model="data.value" type="number"></el-input>
    </el-form-item>
    <!-- <el-form-item label="最大值">
      <el-input v-model="data.setting.max" type="number"></el-input>
    </el-form-item> -->
    <el-form-item label="半选">
      <el-switch v-model="data.setting.allowHalf" active-text="允许" inactive-text="不许"></el-switch>
    </el-form-item>
    <el-form-item label="等级颜色">
      <el-color-picker v-model="data.setting.colors[0]"></el-color-picker>
      <el-color-picker v-model="data.setting.colors[1]"></el-color-picker>
      <el-color-picker v-model="data.setting.colors[2]"></el-color-picker>
    </el-form-item>
    <el-form-item label="未选中颜色">
      <el-color-picker v-model="data.setting.voidColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="等级图标">
      <el-input v-model="data.setting.iconClasses[0]">
        <el-button slot="append" @click="openSelectIcon('iconClasses', 0)">选择图标</el-button>
      </el-input>
      <el-input v-model="data.setting.iconClasses[1]">
        <el-button slot="append" @click="openSelectIcon('iconClasses', 1)">选择图标</el-button>
      </el-input>
      <el-input v-model="data.setting.iconClasses[2]">
        <el-button slot="append" @click="openSelectIcon('iconClasses', 2)">选择图标</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="未选中图标">
      <el-input v-model="data.setting.voidIconClass">
        <el-button slot="append" @click="openSelectIcon('voidIconClass')">选择图标</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="文本">
      <el-switch v-model="data.setting.showText" active-text="显示" inactive-text="隐藏"></el-switch>
    </el-form-item>
    <el-form-item label="文本颜色">
      <el-color-picker v-model="data.setting.textColor"></el-color-picker>
    </el-form-item>
    <el-form-item label="文本文字">
      <el-input v-model="texts"></el-input>
    </el-form-item>
    <el-form-item label="分数">
      <el-switch v-model="data.setting.showScore" active-text="显示" inactive-text="隐藏"></el-switch>
    </el-form-item>
    <el-form-item label="分数格式">
      <el-input v-model="data.setting.scoreTemplate"></el-input>
    </el-form-item>
    <select-icon ref="select_icon" @select-icon="selectIconItem"></select-icon>
  </item-box>
</template>

<script>
import _ from 'lodash';
import ItemBox from '../common/ItemBox';
import SelectIcon from '../common/select-icon';
export default {
  name: 'RateConfig',
  components: { ItemBox, SelectIcon },
  data() {
    return {
      texts: '',
      currentProp: '',
      currentIndex: ''
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  watch: {
    texts(v) {
      const x = v.split(',');
      x.forEach((y, i) => {
        this.data.setting.texts[i] = y;
      })
    }
  },
  created() {
    const ts = this.data.setting.texts.join(',');
    this.texts = ts;
  },
  methods: {
    openSelectIcon(prop, i) {
      this.currentProp = prop;
      this.currentIndex = i;
      this.$refs.select_icon.open();
    },
    selectIconItem(item) {
      if (typeof this.currentIndex === 'number' && this.currentProp) {
        this.$set(this.data.setting[this.currentProp], this.currentIndex, item);
      } else if (this.currentProp) {
        this.data.setting[this.currentProp] = item;
      }
    }
  }
}
</script>