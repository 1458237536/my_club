<template>
    <div class="label-main">
        <div class="label-name">缓存:</div>
        <div class="label-category">道题</div>

    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        // 声明从父组件接收的两个数据
        // parentData: String,
        // numberValue: Number,
    },
});
</script>

<style>
.number-main {
    width: 924px;
    height: 40px;
    /* padding: 20px; */
    /* margin: 20px; */
    display: inline-block;
    /* background-color: burlywood; */
    border: 1px solid rgb(133, 11, 92);
    /* border-radius: 5px; */
    background-color: cornflowerblue;
    

}

.label-name {
    width: 120px;
    height: 40px;
    display: inline-block;
    margin-left: 20px;
    background-color: blue;line-height: 40px;
}

.label-category {
    display: inline-block;
    background-color: springgreen;
    height: 40px;
    padding: 0 10px;line-height: 40px;

}
</style>