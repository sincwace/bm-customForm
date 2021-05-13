<template>
  <el-checkbox-group v-if="data.setting.isRemote && model" v-model="model[data.fieldId]">
    <el-checkbox v-for="item in remoteData" :key="item[data.setting.remoteDataProps.value]" :label="item[data.setting.remoteDataProps.value]"><span v-text="item[data.setting.remoteDataProps.label]"></span></el-checkbox>
  </el-checkbox-group>
  <el-checkbox-group v-else-if="data.setting.isRemote && !model" v-model="data.value">
    <el-checkbox v-for="item in remoteData" :key="item[data.setting.remoteDataProps.value]" :label="item[data.setting.remoteDataProps.value]"><span v-text="item[data.setting.remoteDataProps.label]"></span></el-checkbox>
  </el-checkbox-group>
  <el-checkbox-group v-else-if="!data.setting.isRemote && model" v-model="model[data.fieldId]">
    <el-checkbox v-for="item in data.selections" :key="item.value" :label="item.value"><span v-text="item.label"></span></el-checkbox>
  </el-checkbox-group>
  <el-checkbox-group v-else v-model="data.value">
    <el-checkbox v-for="item in data.selections" :key="item.value" :label="item.value"><span v-text="item.label"></span></el-checkbox>
  </el-checkbox-group>
</template>

<script>
import RemoteMixin from '../../utils/remote-mixin';
export default {
  name: 'TpCheckbox',
  mixins: [ RemoteMixin ],
  props: {
    data: {
      type: Object,
      required: true
    },
    model: Object
  }
}
</script>