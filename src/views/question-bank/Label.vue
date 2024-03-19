<template>

    <div class="e-w">
        <div class="e-w-main" :class="{ 'e-w-expand': isExpand }" ref="ewRef">
            <div class="e-w-main-content">
                <!-- 分类 -->
                <div class="e-w-main-content-label">
                    <LabelItem />
                    <LabelItem />
                    <LabelItem />
                    <LabelItem />
                    <LabelItem />
                    <LabelItem />
                </div>
            </div>


            <div class="view-more" v-if="!isExpand">
                <div class="view-more-box" @click="toggleExpand">
                    <p>展开</p>
                    <el-icon>
                        <CaretBottom />
                    </el-icon>
                </div>
            </div>

            <div class="has-more" v-if="isExpand">
                <div class="has-more-box" @click="toggleExpand">
                    <p>收起</p>
                    <el-icon>
                        <CaretTop />
                    </el-icon>
                </div>
            </div>

        </div>
    </div>


</template>
<script setup>
import req from '@/utils/request'
import { ref, onMounted, defineComponent, reactive } from 'vue';
import { CaretTop, CaretBottom } from '@element-plus/icons-vue';
import LabelItem from './LabelItem.vue';
import { apiName } from './constant';

const ewRef = ref(null); // 实例
const isExpand = ref(false); // 是否展开
// const loading = ref(false);
const categoryList = reactive([]);
const dataString = '后端';
const dataNumber = 123;
// 切换展开状态
const toggleExpand = () => {
    // if (isExpand.value) {
    //     console.log("收起了");
    // } else {
    //     console.log("展开了");
    // }
    isExpand.value = !isExpand.value;
    // 根据isExpand的状态进行额外的操作，例如调整ewRef的高度等

};

// 获取大类分类信息
const getPrimaryCategoryInfo = () => {
    // loading.value = true
    // req({
    //     method: 'post',
    //     url: '/subject' + apiName.queryPrimaryCategory,
    //     data: { categoryType: 1 }
    // })
    //     .then(res => {
    //         if (res.data && res.data.length > 0) {
    //             console.log(res.data);
    //             // primaryCategoryId.value = res.data[0].id
    //             categoryList.splice(0, categoryList.length, ...res.data)
    //             console.log('!! ', categoryList);
    //             // props.changePrimaryId(res.data[0].id)
    //         } else {
    //             // primaryCategoryId.value = mockCategoryList[0].id
    //             categoryList.splice(0, categoryList.length, ...mockCategoryList)
    //         }
    //         // loading.value = false
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         // loading.value = false
    //     })
}


onMounted(() => {
    getPrimaryCategoryInfo();
    // console.log('ewRef =>', ewRef.value);
    // if (ewRef.value.scrollHeight > ewRef.value.clientHeight) {
    //     // 在这里进行你需要执行的操作
    //     // 例如，可以设置一个标志来显示或隐藏按钮

    // }
});

</script>

<style scoped>
.e-w {
    width: 950px;
    /* padding: 100px; */
    border-bottom: 1px solid #eee;
    position: relative;
    /* top: 180px; */
    /* left: 0; */

}

.e-w .e-w-main {
    height: 143px;
    overflow: hidden;
    position: relative;
    border: 1px solid #ddd;
    /* padding: 0; */
}

.e-w-main-content {
    /* color: rgb(96, 109, 121);
    background-color: #f5ecd7; */
    font-family: '楷体';
    /* padding: 25px; */
}

.e-w .e-w-main.e-w-expand {
    height: auto;
    overflow: hidden;
    padding-bottom: 25px;
}

/* 展开样式 */
.e-w .e-w-main .view-more {
    width: 100%;
    height: 25px;
    line-height: 25px;
    /* padding-top: 60px; */
    background-color: #fff;
    /* background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #ebebebf6 100%); */
    position: absolute;
    bottom: 0;
}

.e-w .e-w-main .view-more .view-more-box {
    width: 50px;
    height: 25px;
    line-height: 25px;
    /* background-color: rgba(255, 255, 255, 1); */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
}

.e-w .e-w-main .view-more .view-more-box p,
.el-icon {
    position: absolute;
    display: block;
    margin: auto;
    cursor: pointer;
}

.e-w .e-w-main .view-more .view-more-box p {
    left: 0;
    /* bottom: 0; */
}

.e-w .e-w-main .view-more .view-more-box .el-icon {
    top: 4px;
    right: 0;
}

/* 收起样式 */
.e-w .e-w-main .has-more {
    width: 100%;
    height: 25px;
    line-height: 25px;
    position: absolute;
    bottom: 0;
}

.e-w .e-w-main .has-more .has-more-box {
    width: 50px;
    height: 25px;
    line-height: 25px;
    /* background-color: rgba(255, 255, 255, 1); */
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    position: absolute;
    display: block;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    cursor: pointer;
}

.e-w .e-w-main .has-more .has-more-box .el-icon,
p {

    position: absolute;
    display: block;
    margin: auto;
}

.e-w .e-w-main .has-more .has-more-box .p {
    left: 0;
}

.e-w .e-w-main .has-more .has-more-box .el-icon {
    right: 0;
    top: 4px;
}

.e-w-main-content-category {
    width: 100%;
    height: 82px;
    /* line-height: 112px; */
    /* padding-bottom: 20px; */
    padding: 20px 0;
    background-color: thistle;
    text-align: left;
}

.e-w-main-content-label {
    width: 100%;
    /* height: 40px; */
    background-color: rgb(159, 219, 17);
    text-align: left;

}
</style>
