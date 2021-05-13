<template>
  <el-row v-if="type==='MakeForm'" :gutter="data.setting.gutter" class="tpf-mf-layout--row">
    <div class="tpf-mf-layout--row--tip">col: {{data.setting.col}}, gutter: {{data.setting.gutter}}</div>
    <el-col v-for="i in data.setting.col" :span="24 / data.setting.col" :key="i" class="tpf-mf-layout--col__make">
      <draggable 
        class="tpf-mf-layout--content--draggable" 
        v-model="arr[i-1]" 
        group="TpFormGroup"
        animation="300"
      >
        <which-component v-if="data.setting.colList[i-1]" :type="type" :data="data.setting.colList[i-1]" @click.native.stop="clickComponent(data.setting.colList[i-1])"></which-component>
      </draggable>
    </el-col>
  </el-row>
  <el-row v-else :gutter="data.setting.gutter" class="tpf-mf-layout--row">
    <el-col v-for="i in data.setting.col" :key="i" :span="24 / data.setting.col" class="tpf-mf-layout--col">
      <which-component v-if="data.setting.colList[i-1]" :type="type" :data="data.setting.colList[i-1]" :model="model" :prop="data.setting.colList[i-1].fieldId"></which-component>
    </el-col>
  </el-row>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: 'TpLayout',
  components: { draggable, WhichComponent: _ => import('../WhichComponent.vue') },
  inject: ['formData', 'contentSelectChange'],
  props: {
    data: {
      type: Object,
      required: true
    },
    type: String,
    model: Object
  },
  data() {
    return {
      arr: [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
    }
  },
  watch: {
    arr: {
      handler(v) {
        for(let i = 0; i < this.data.setting.col; i++) {
          this.data.setting.colList[i] = v[i][0];
        }
      },
      deep: true
    }
  },
  methods: {
    clickComponent(item) {
      this.formData.formDataList.forEach(f => f.makeStyle.active = false);
      this.data.setting.colList.forEach(f => {
        if (!f) {
          //暂未逻辑
        } else if (f === item) f.makeStyle.active = true;
        else f.makeStyle.active = false;
      });
      // this.$emit('select-change', item);
      this.contentSelectChange(item);
    }
  }
}
</script>