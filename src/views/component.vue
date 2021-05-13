<template>
    <el-select v-model="select" placeholder="请选择" style="width: 100px;"
               @change="selectChange">
        <el-option label="餐厅名" value="餐厅名"></el-option>
        <el-option label="订单号" value="订单号"></el-option>
        <el-option label="用户电话" value="用户电话"></el-option>
    </el-select>
</template>

<script>
export default {
    name: '',
    inject: [ 'componentPrependChange' ],
    data() {
        return {
            select: ''
        }
    },
    methods: {
        selectChange(val) {
            this.componentPrependChange(val)
        }
    }
}
</script>

