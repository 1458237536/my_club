<template>
    <div class="add-main">
        <div class="add-main-content">
            <!-- 大纲 -->
            <div class="one-category">
                <div class="left-category-name">大纲：</div>
                <div class="one-category-select">
                    <el-select v-model="categoryName" placeholder="请选择" style="width: 240px"
                        @change="handleCheckSelect">
                        <el-option v-for="item in categoryList" :key="item.id" :label="item.categoryName"
                            :value="item.id" />
                    </el-select>
                </div>
            </div>
            <!-- 分类 -->
            <div class="two-category">
                <div class="left-category-name">类别：</div>
                <div class="two-category-select">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox v-for="item in checkboxList" :key="item.id" :label="item.categoryName"
                            :value="item.id" />
                        <!-- <el-checkbox label="Option B" value="Value B" />
                        <el-checkbox label="Option C" value="Value C" /> -->
                    </el-checkbox-group>
                </div>
            </div>


            <!-- ----------- -->
            <el-form :model="form" label-width="auto" style="max-width: 600px">
                <el-form-item label="大纲">
                    <el-select v-model="categoryName" placeholder="请选择" style="width: 240px"
                        @change="handleCheckSelect">
                        <el-option v-for="item in categoryList" :key="item.id" :label="item.categoryName"
                            :value="item.id" />
                    </el-select>
                </el-form-item>
                <el-form-item label="类别">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox v-for="item in checkboxList" :key="item.id" :label="item.categoryName"
                            :value="item.id" border style="margin: 5px" />
                    </el-checkbox-group>
                </el-form-item>
                <!-- <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item> -->
            </el-form>


        </div>
    </div>
</template>

<script>
import req from '@/utils/request'
import { ref, onMounted, reactive } from 'vue'
import { apiName } from './constant'
export default {
    components: {
    },
    setup() {
        const categoryList = reactive([]);
        const checkboxList = reactive([]);
        const categoryName = ref('');
        const checkList = ref([]);
        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
        });

        const getQueryPrimaryCategory = () => {
            req({
                method: 'post',
                url: '/subject' + apiName.queryPrimaryCategory,
                data: { 'categoryType': 1 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        // console.log(res.data);
                        // primaryCategoryId.value = res.data[0].id
                        categoryList.splice(0, categoryList.length, ...res.data)
                        // console.log('!! ', categoryList);
                        // props.changePrimaryId(res.data[0].id)
                    } else {
                        // primaryCategoryId.value = mockCategoryList[0].id
                        // categoryList.splice(0, categoryList.length, ...mockCategoryList)
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        const handleCheckSelect = (id) => {
            console.log('Select 被点击', id);
            req({
                method: 'post',
                url: '/subject' + apiName.queryCategoryByPrimary,
                data: { 'parentId': id, 'categoryType': 2 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        console.log(res.data);
                        // primaryCategoryId.value = res.data[0].id
                        checkboxList.splice(0, checkboxList.length, ...res.data)
                        console.log('!! ', checkboxList);
                        // props.changePrimaryId(res.data[0].id)
                    } else {
                        // primaryCategoryId.value = mockCategoryList[0].id
                        // categoryList.splice(0, categoryList.length, ...mockCategoryList)
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
        return {
            categoryList, categoryName, handleCheckSelect, checkList, checkboxList, form
        }
    }

}
</script>

<style scoped>
.add-main {
    width: 900px;
    height: 500px;
    background-color: rgb(207, 21, 83);
    overflow: hidden;
}

.add-main-content {
    width: 800px;
    height: 400px;
    background-color: springgreen;
    margin: 20px 0 0 50px;
}

.one-category {
    width: 750px;
    height: 50px;
    text-align: left;
    background-color: cornflowerblue;
}

.left-category-name {
    width: 120px;
    height: 100%;
    /* height: 50px;
    line-height: 50px; */
    vertical-align: top;
    display: inline-block;
    background-color: rgb(221, 224, 21);
}

.one-category-select {
    display: inline-block;
    line-height: 50px;
    background-color: rgb(33, 13, 90);
}

.two-category {
    width: 750px;
    /* height: 50px; */
    text-align: left;
    /* vertical-align: middle; */
    background-color: rgb(194, 85, 13);
}

.two-category-select {
    width: 630px;
    /* height: 100%; */
    display: inline-block;
    background-color: rgb(33, 13, 90);
}
</style>