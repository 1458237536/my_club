<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="单选" name="radio">
            <AddRadio />
        </el-tab-pane>
        <el-tab-pane label="多选" name="multiple">多选</el-tab-pane>
        <el-tab-pane label="判断" name="judge">判断</el-tab-pane>
        <el-tab-pane label="简答" name="brief">简答</el-tab-pane>
    </el-tabs>
</template>

<script>
import { ref } from 'vue'
// import type  { TabsPaneContext } from 'element-plus'
import AddRadio from './AddRadio.vue'
export default {
    components: {
        // Document, IconMenu, Location, Setting
        AddRadio
    },
    setup() {
        const activeName = ref('radio')
        // const handleClick = (tab: TabsPaneContext, event: Event) => {
        //     console.log(tab, event)
        // }
        return {
            activeName,
            // handleClick
        }
    }

}
</script>

<style scoped>
.demo-tabs>.el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
}
</style>