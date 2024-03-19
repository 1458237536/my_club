<template>
    <div class="category-main">
        <div class="category-name">{{ item.categoryName }}</div>
        <div class="category-number">{{ item.count }}道题</div>

    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        // 声明从父组件接收的两个数据
        categoryName: String,
        count: Number, 
        item: {
            type: Object, // 指定item的类型为对象
            required: true
        }
    },
});
</script>

<style>
.category-main {
    width: 112px;
    height: 82px;
    /* padding: 20px; */
    /* margin: 20px 0 0 20px; */
    display: inline-block;
    background-color: burlywood;
    /* border: 1px solid red; */
    border-radius: 5px;

}
</style>