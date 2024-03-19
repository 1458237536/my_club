<template>

    <div class="subject">
        <!-- 题目数量 -->
        <div class="subject-top">题目数量111</div>
        <!-- 题目 -->

        <div class="subject-main">
            <SubjectItem />
            <SubjectItem />
        </div>
    </div>

</template>

<script>
import SubjectItem from './SubjectItem.vue'
export default {
    components: {
        SubjectItem
    },
}
</script>

<style scoped>
.subject {
    width: 925px;
    height: 600px;
    background-color: rgb(99, 21, 31);
    position: relative;
}

.subject-top {
    width: 100%;
    height: 55px;
    background-color: teal;
}

.subject-main {
    width: 100%;
    height: 120px;
    text-align: left;
    background-color: rgb(172, 23, 159);
}
</style>