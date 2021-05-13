<template>
  <el-select v-if="data.setting.isRemote && model" v-model="model[data.fieldId]" :multiple="data.multiple" :placeholder="data.placeholder">
    <el-option
      v-for="item in remoteData"
      :key="item[data.setting.remoteDataProps.value]"
      :label="item[data.setting.remoteDataProps.label]"
      :value="item[data.setting.remoteDataProps.value]">
    </el-option>
  </el-select>
  <el-select v-else-if="data.setting.isRemote && !model" v-model="data.value" :multiple="data.multiple" :placeholder="data.placeholder">
    <el-option
      v-for="item in remoteData"
      :key="item[data.setting.remoteDataProps.value]"
      :label="item[data.setting.remoteDataProps.label]"
      :value="item[data.setting.remoteDataProps.value]">
    </el-option>
  </el-select>
  <el-select v-else-if="!data.setting.isRemote && model" v-model="model[data.fieldId]" :multiple="data.multiple" :placeholder="data.placeholder">
    <el-option
      v-for="item in data.selections"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-select v-else v-model="data.value" :multiple="data.multiple" :placeholder="data.placeholder">
    <el-option
      v-for="item in data.selections"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
import RemoteMixin from '../../utils/remote-mixin';
export default {
  name: 'TpSelect',
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