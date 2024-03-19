<template>
    <div>
        <el-container>
            <el-header class="header">
                <div>
                    <!-- 固钉默认固定在页面顶部。 -->
                    <el-affix :offset="0">
                        <Header />
                    </el-affix>
                </div>
            </el-header>
            <el-container>
                <el-aside class="aside">
                    <div>
                        <AdminAside />
                    </div>
                </el-aside>
                <el-main class="main">
                    <!-- <AddSubject /> -->
                    <TwoCategory />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
import Header from '../Header.vue'
import AdminAside from './AdminAside.vue'
import AddSubject from './AddSubject.vue'
import OneCategory from './OneCategory.vue'
import TwoCategory from './TwoCategory.vue'
export default {
    components: {
        Header,
        AdminAside,
        AddSubject,
        OneCategory,
        TwoCategory
    },
}
</script>

<style scoped>
footer,
.header {
    width: 1200px;
    height: 60px;
    background-color: red;
}

.header {
    --el-header-padding: 0;
}

.main {
    width: 900px;
    height: auto;
    /* overflow: hidden; */
    /* height: 600px; */
    overflow: hidden;
    background-color: aqua;
}

.aside {
    width: 200px;
    height: 600px;
    background-color: hotpink;
}
</style>