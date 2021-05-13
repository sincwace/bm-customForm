<template>
  <el-radio-group v-if="data.setting.isRemote && model" v-model="model[data.fieldId]">
    <el-radio :label="r[data.setting.remoteDataProps.value]" v-for="r in remoteData" :key="r[data.setting.remoteDataProps.value]">{{r[data.setting.remoteDataProps.label]}}</el-radio>
  </el-radio-group>
  <el-radio-group v-else-if="data.setting.isRemote && !model" v-model="data.value">
    <el-radio :label="r[data.setting.remoteDataProps.value]" v-for="r in remoteData" :key="r[data.setting.remoteDataProps.value]">{{r[data.setting.remoteDataProps.label]}}</el-radio>
  </el-radio-group>
  <el-radio-group v-else-if="!data.setting.isRemote && model" v-model="model[data.fieldId]">
    <el-radio :label="r.value" v-for="r in data.selections" :key="r.value">{{r.label}}</el-radio>
  </el-radio-group>
  <el-radio-group v-else v-model="data.value">
    <el-radio :label="r.value" v-for="r in data.selections" :key="r.value">{{r.label}}</el-radio>
  </el-radio-group>
</template>

<script>
import RemoteMixin from '../../utils/remote-mixin';
export default {
  name: 'TpRadio',
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