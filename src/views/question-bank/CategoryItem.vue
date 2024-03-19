<template>
    <div class="category-item-main" @click="handleClick(id)" :style="{ backgroundColor: categoryBackColor[id] }"
        :class="{ 'is-selected': isClick }">
        <div class="category-item-main-top">{{ categoryName }}</div>
        <div class="category-item-main-bottom">{{ categoryCount }}道题</div>
    </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from 'vue';
import { categoryBackColor } from './constant';
export default {
    props: {
        // 声明从父组件接收的两个数据
        categoryName: String,
        categoryCount: Number,
        id: Number,
        index: Number, // 添加一个 index 属性来接收父组件传递的索引值
        isClick: Boolean,
        // backgroundColor: {
        //     type: String,
        //     default: '#d9ecff' // 默认背景色
        // },
    },
    setup(props, { emit }) {
        const handleClick = (id) => {
            // console.log(props.index); // 使用 props.index 而不是 index
            emit('category-item-id', id);
        };


        onMounted(() => {
            // 打印 categoryBackColor
            // console.log('categoryBackColor:', categoryBackColor);
        });

        return {
            handleClick, categoryBackColor
        };
    }

}

</script>

<style scoped>
.category-item-main {
    width: 120px;
    height: 75px;
    display: inline-block;
    background-color: burlywood;
    border-radius: 5px;
    margin: 20px 0 0 20px;
}

.category-item-main:hover {
    /* 设置阴影效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.is-selected {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.category-item-main-top {
    width: 120px;
    height: 30px;
    line-height: 30px;
    /* background-color: tomato; */
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.category-item-main-bottom {
    width: 120px;
    height: 45px;
    line-height: 45px;
    font-size: 12px;
    /* background-color: rgb(29, 173, 94); */
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;

}
</style>