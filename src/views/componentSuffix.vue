<template>
    <div>
        <el-button @click="search">搜索</el-button>
    </div>
</template>

<script>
export default {
    inject: [ 'componentSuffixChange' ],
    methods: {
        search() {
            this.componentSuffixChange()
        }
    }
}
</script>

