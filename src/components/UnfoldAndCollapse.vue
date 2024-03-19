<template>

    <div class="e-w">
        <div class="e-w-main" :class="{ 'e-w-expand': isExpand }" ref="ewRef">
            <div class="e-w-main-content">
                <!-- 类别 -->
                <div class="e-w-main-content-category">
                    <Category :parentData="dataString" :numberValue="dataNumber" />
                </div>
                <!-- 分类 -->
                <div class="e-w-main-content-label" :style="isExpand ? 'padding-bottom: 20px;' : ''">
                    <Label />
                    <Label />
                    <Label />
                    <Label />
                    <Label />
                    <Label />
                    <Label />
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
<script>
import req from '@/utils/request'
import { ref, onMounted, defineComponent } from 'vue';
import { CaretTop, CaretBottom } from '@element-plus/icons-vue';
import Category from './Category.vue';
import Label from './Label.vue';
export default defineComponent({
    data() {
        return {
            // 这是来自父组件的数据
            dataString: '后端', dataNumber: 123,
        };
    },
    components: {
        CaretTop,
        CaretBottom,
        Category, Label
    },
    setup() {
        const ewRef = ref(null); // 实例
        const isExpand = ref(false); // 是否展开

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
            loading.value = true
            req({
                method: 'post',
                url: '/subject' + apiName.queryPrimaryCategory,
                data: { categoryType: 1 }
            })
                .then(res => {
                    if (res.data && res.data.length > 0) {
                        primaryCategoryId.value = res.data[0].id
                        categoryList.splice(0, categoryList.length, ...res.data)
                        props.changePrimaryId(res.data[0].id)
                    } else {
                        primaryCategoryId.value = mockCategoryList[0].id
                        categoryList.splice(0, categoryList.length, ...mockCategoryList)
                    }
                    loading.value = false
                })
                .catch(err => {
                    console.log(err)
                    loading.value = false
                })
        }


        onMounted(() => {
            console.log('ewRef =>', ewRef.value);
            if (ewRef.value.scrollHeight > ewRef.value.clientHeight) {
                // 在这里进行你需要执行的操作
                // 例如，可以设置一个标志来显示或隐藏按钮

            }
        });

        // 返回所有模板中需要使用的响应式数据和方法
        return {
            ewRef,
            isExpand,
            toggleExpand,
            CaretTop,
            CaretBottom,
        };
    },
});
</script>

<style scoped>
.e-w {
    width: 925px;
    /* padding: 100px; */
    border-bottom: 1px solid #eee;

}

.e-w .e-w-main {
    height: 270px;
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
    height: 125px;
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
