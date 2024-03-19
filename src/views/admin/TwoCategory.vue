<template>
    <div>
        <el-table :data="categoryList" stripe style="width: 100%">
            <el-table-column fixed prop="id" label="ID" width="150" />
            <el-table-column prop="categoryName" label="类别" />
            <el-table-column prop="imageUrl" label="icon" width="250" />
            <el-table-column prop="parentName" label="大类" />
            <el-table-column fixed="right" label="操作" width="150">
                <template #default>
                    <el-button link type="primary" size="small" @click="dialogVisible = true">修改</el-button>
                    <el-button link type="primary" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog v-model="dialogVisible" :title="dialogTitle" width="500">
            <el-form :model="form">
                <el-form-item label="Promotion name" :label-width="formLabelWidth">
                    <!-- <el-input v-model="form.name" autocomplete="off" /> -->
                </el-form-item>
            </el-form>

            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="dialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">
                        修改
                    </el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script>
import req from '@/utils/request'
import { ref, onMounted, reactive } from 'vue'
import { apiName } from './constant'
// import type  { TabsPaneContext } from 'element-plus'
export default {
    components: {
        // Document, IconMenu, Location, Setting
    },
    setup() {
        const categoryList = reactive([]);
        const dialogVisible = ref(false)
        const dialogTitle = ref('修改分类')
        const form = ref([])
        // const getCategory = reactive([]);
        const getCategory = () => {
            req({
                method: 'post',
                url: '/subject/category/queryCategory',
                data: { 'categoryType': 2 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        console.log(res.data);
                        categoryList.splice(0, categoryList.length, ...res.data)
                        // console.log('!! ', categoryList);
                    } else {
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }




        onMounted(() => {
            getCategory();
            // console.log('ewRef =>', ewRef.value);
            // if (ewRef.value.scrollHeight > ewRef.value.clientHeight) {
            //     // 在这里进行你需要执行的操作
            //     // 例如，可以设置一个标志来显示或隐藏按钮

            // }
        });
        // const handleClick = (tab: TabsPaneContext, event: Event) => {
        //     console.log(tab, event)
        // }
        return {
            categoryList,dialogVisible,dialogTitle,form
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