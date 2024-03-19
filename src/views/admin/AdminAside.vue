<template>
    <el-row class="tac">
        <el-col>
            <h5 class="mb-2">Default colors</h5>
            <el-menu default-active="1" class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <el-icon><icon-menu /></el-icon>
                    <span>类别标签管理</span>
                </el-menu-item>
            </el-menu>

            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-menu-item index="1">
                    <el-icon><icon-menu /></el-icon>
                    <span>添加题目</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
export default {
    components: {
        Document, IconMenu, Location, Setting
    },
    setup() {

        return {
            // Document, IconMenu, Location, Setting
        }
    }

}
</script>

<style></style>