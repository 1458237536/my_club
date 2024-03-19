<template>
    <div class="category-main">
        <div class="category-all" ref="parentDivAll" :class="{ 'toggleShowAll': isShowAll }">
            <CategoryItem v-for="(i, index) in categoryList" :key="i.id" :id="i.id" :categoryName="i.title"
                :categoryCount="i.total" :isClick="userInput === i.id" @category-item-id="handleReceivedValue" />
        </div>

        <div class="category-5" ref="parentDiv5" :class="{ 'toggleShow5': isShowAll }">
            <CategoryItem v-for="(i, index) in categoryListShow" :key="i.id" :id="i.id" :categoryName="i.title"
                :categoryCount="i.total" :isClick="userInput === i.id" @category-item-id="handleReceivedValue" />
        </div>

        <div class="isShowAll" @click="toggleShowAll">更多</div>

    </div>
</template>

<script>
import CategoryItem from './CategoryItem.vue';
import { ref, reactive, onMounted, watchEffect } from 'vue';
import { mockCategoryList } from './constant';
export default {
    components: {
        CategoryItem
    },
    setup() {
        const categoryList = reactive([]);
        const isShowAll = ref(false);
        const receivedValue = ref('');
        // 引用父级 div
        const parentDivAll = ref(null);
        const parentDiv5 = ref(null);
        const handleReceivedValue = (id) => {
            userInput.value = id;
            if (isShowAll.value) {
                isShowAll.value = false
                updateGroupedArrays();
            }
        };


        // 获取第 i 个 div
        // const getIthDiv = (str, parentDiv, id) => {
        //     console.log("-----------------------开始--------------------------");
        //     console.log(parentDiv.value);
        //     if (parentDiv.value) {
        //         // 假设 parentDiv.value.children 返回一个类数组对象
        //         // 遍历类数组对象并为每个元素添加样式类
        //         for (let i = 0; i < parentDiv.value.children.length; i++) {
        //             const divElement = parentDiv.value.children[i];
        //             console.log(divElement);
        //             const CurrentDiv = divElement.getAttribute('category-item');

        //             divElement.classList.remove('is-selected');
        //             if (CurrentDiv == id) {
        //                 divElement.classList.add('is-selected');
        //             }

        //         }
        //     }

        //     console.log("-----------------------结束--------------------------");
        // };

        const userInput = ref(1);
        // 创建一个新的响应式引用，用于存储分组数组
        const categoryListShow = ref([]);

        // 计算属性，根据用户输入将数组分组并赋给新数组
        const updateGroupedArrays = () => {
            // console.log("000");
            // console.log(userInput.value);
            const groupSize = 5; // 每组元素数量
            const end = Math.ceil((userInput.value - 1 < 5 ? 5 : userInput.value) / groupSize) * 5;

            if (categoryList.length < end) {
                categoryListShow.value = categoryList.slice(-5);
            } else {
                const start = Math.floor(userInput.value - 1 < 5 ? 0 : (userInput.value - 1) / groupSize) * 5;
                categoryListShow.value = [...categoryList.slice(start, end)]; // 更新新数组的值
            }


        };

        const toggleShowAll = () => {
            isShowAll.value = !isShowAll.value;
        };


        onMounted(() => {
            categoryList.splice(0, categoryList.length, ...mockCategoryList);
            categoryListShow.value = categoryList.slice(0, 5);
        });

        watchEffect(() => {
        });
        return {
            categoryList,
            handleReceivedValue,
            parentDivAll,
            categoryListShow,
            parentDiv5,
            isShowAll,
            toggleShowAll,
            userInput
        }
    }

}
</script>

<style scoped>
.category-main {
    width: 950px;
    /* height: 122px; */
    height: 105px;
    background-color: blue;
    /* width: 112px;
    height: 82px;
    display: inline-block;
    background-color: burlywood;
    border-radius: 5px; */
    /* border-radius: 0; */
    /* overflow:hidden; */
    position: relative;
    /* display: inline-block;
    top: 0;
    left: 0; */
    text-align: left;

    /* vertical-align: middle; */

}

.category-all {
    width: 720px;
    height: auto;
    background-color: wheat;
    position: relative;
    z-index: 99;
    top: 0;
    left: 0;
    text-align: left;
    padding-bottom: 20px;
    /* overflow: ; */
    /* display: block; */
    display: none;

}

.category-5 {
    width: 720px;
    height: 105px;
    background-color: turquoise;
    display: inline-block;
}

.isShowAll {
    width: 66px;
    height: 105px;
    background-color: springgreen;
    display: inline-block;
    vertical-align: top;
}

.toggleShowAll {
    display: inline-block;
}

.toggleShow5 {
    display: none;
}

.category-main-card {
    width: 112px;
    height: 30px;
    background-color: aquamarine;
    vertical-align: middle;
    /* display: ; */
}
</style>