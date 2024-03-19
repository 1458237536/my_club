<template>
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="大纲" name="one-category">
            <OneCategory />
        </el-tab-pane>
        <el-tab-pane label="类别" name="two-category">类别</el-tab-pane>
        <el-tab-pane label="标签" name="label">标签</el-tab-pane>
    </el-tabs>
</template>

<script>
import { ref } from 'vue'
// import type  { TabsPaneContext } from 'element-plus'
import OneCategory from './OneCategory.vue'
export default {
    components: {
        // Document, IconMenu, Location, Setting
        OneCategory
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
</style>./CategoryAndLabel.vue