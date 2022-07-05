<script>
export default {
    data() {
        return {
        activeName:'',
        centerDialogVisible:true
        }
    },

    props: [],
    components: {},
    computed: {},
    methods: {
    handleClick(){
    console.log(this.activeName)    
    }

    
    },
    watch: {},

    beforeCreate() { },
    created() { },
    beforeMount() { },
    mounted() { },
    beforeUpdate() { },
    updated() { },
    beforeUnmount() { },
    unmounted() { jk},
}
</script>

<template>
    <el-dialog v-model="centerDialogVisible" title="" width="23%" :class="$style.all"  center
        :close-on-click-modal="false" :show-close="false">

 <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="手机登录" name="first">手机登录</el-tab-pane>
    <el-tab-pane label="密码登录" name="second">密码登录</el-tab-pane>
    <el-tab-pane label="扫码登录" name="third">扫码登录</el-tab-pane>
    
  </el-tabs>


    </el-dialog>>
</template>

<style module>
.all {

}
</style>