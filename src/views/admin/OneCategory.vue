<template>
    <el-table :data="categoryList" stripe style="width: 100%">
        <el-table-column fixed prop="id" label="ID" width="150" />
        <el-table-column prop="categoryName" label="名称" />
        <el-table-column prop="imageUrl" label="icon" />
        <el-table-column fixed="right" label="操作" width="150">
            <template #default>
                <el-button link type="primary" size="small" @click="handleClick">Detail</el-button>
                <el-button link type="primary" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
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

        const handleClick = () => {
            console.log('click')
        }
        const getQueryPrimaryCategory = () => {
            req({
                method: 'post',
                url: '/subject' + apiName.queryPrimaryCategory,
                data: { 'categoryType': 1 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        categoryList.splice(0, categoryList.length, ...res.data)
                        console.log('!! ', categoryList);
                    } else {
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        const getQueryCategoryByPrimary = () => {
            req({
                method: 'post',
                url: '/subject' + apiName.queryCategoryByPrimary,
                data: { 'parentId': 1, 'categoryType': 2 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        // categoryList.splice(0, categoryList.length, ...res.data)
                        // console.log('!! ', categoryList);
                    } else {
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }
        onMounted(() => {
            getQueryPrimaryCategory();
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
            handleClick, categoryList
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