<template>

    <div class="subject-item">
        <!-- 题目数量 -->
        <div class="subject-item-info">
            <div class="subject-item-info-name">mysql是什么？</div>
            <div class="subject-item-info-label">
                <!-- 即使不设置backgroundColor，也会使用默认的背景色#d9ecff -->
                <!-- <el-tag effect="plain">Large Tag</el-tag> -->
                <Tag size="large">Large Tag</Tag>
                <Tag>Default Tag</Tag>
                <Tag size="small">Small Tag</Tag>
            </div>
        </div>
        <!-- 题目难度 -->

        <div class="subject-item-difficulty">
            <div>初级</div>
        </div>
    </div>

</template>

<script>
import Tag from "@/components/Tag.vue"
export default {
    components: {
        Tag
    },
}
</script>

<style scoped>
.subject-item {
    width: 925px;
    height: 62px;
    background-color: rgb(117, 167, 38);
}

.subject-item-info {
    width: 770px;
    height: 62px;
    display: inline-block;
    margin-left: 20px;
    background-color: rgb(231, 84, 16);
}

.subject-item-info-name {
    width: 100%;
    height: 22px;
    background-color: slategrey;

}

.subject-item-info-label {
    width: 100%;
    height: 30px;
    line-height: 30px;
    background-color: rgb(40, 13, 136);

}

.subject-item-difficulty {
    width: 90px;
    height: 62px;
    line-height: 62px;
    text-align: center;
    display: inline-block;
    background-color: rgb(199, 160, 196);
    vertical-align: top;
}
</style>