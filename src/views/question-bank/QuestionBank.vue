<template>

    <div class="qb-main">
        <!-- <Category /> -->
        <!-- <Label /> -->
        <Subject />

    </div>


</template>
<script>
import Category from './Category.vue';
import Label from './Label.vue';
import Subject from './Subject.vue';
export default {
    components: {
        Category,
        Label,
        Subject
    }

}
</script>

<style scoped>
.qb-main {
    width: auto;
    /* height: 100%; */
    background-color: violet;
    position: absolute;
}
</style>
