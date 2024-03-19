<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
        style="width: 1200px;margin-left: 0px;" @select="handleSelect">
        <el-menu-item index="0">
            <img style="width: 100px" src="../assets/element-plus-logo.svg" alt="Element logo" />
        </el-menu-item>

        <!-- <div class="flex-grow" /> -->
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="2">练题</el-menu-item>
        <el-menu-item index="3">论坛</el-menu-item>
        <el-menu-item index="4">待定</el-menu-item>
        <div class="search-div">
            <el-input v-model="search" name="search" class="search-input" placeholder="请输入感兴趣的内容~" clearable
                type="password" />
            <el-button type="primary" @click="searchData">搜索</el-button>
        </div>
        <div class="user-div">
            <el-dropdown class="user-dropdown" :hide-on-click="false">

                <div class="user-img"></div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <!-- <el-icon :size="20"> -->
                            <User style="width: 1em; height: 1em; margin-right: 8px" />
                            <!-- </el-icon> -->
                            个人中心
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <Pointer style="width: 1em; height: 1em; margin-right: 8px" />
                            我的点赞
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <SwitchButton style="width: 1em; height: 1em; margin-right: 8px" />
                            退出
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div class="user-name">n你好</div>
        </div>

    </el-menu>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
// 引入指定图标
import { User, Pointer, SwitchButton } from '@element-plus/icons-vue'
export default {
    components: {
        User, Pointer, SwitchButton
    },
    setup() {
        const search = ref('');
        const activeIndex = ref('1')

        const handleSelect = (key, keyPath) => {
            console.log(key, keyPath)
        }

        // 搜索
        const searchData = async () => {
            axios.post('/uuser/search?search=' + search.value).then(res => {
                console.log(res.data.success);
                // ElMessage.success(res.data.data);
                let messageType = res.data.success ? 'success' : 'error';
                ElMessage({
                    message: res.data.data,
                    type: messageType,
                })
            }).catch(error => {
                ElMessage.error("系统错误");
            });
        };

        // 在 setup() 函数中，我们需要返回那些需要在模板中访问的变量或函数
        return {
            activeIndex,
            handleSelect,
            search,
            searchData,
            // UserFilled
        }
    }
}
</script>

<style scoped>
.flex-grow {
    flex-grow: 1;
}

.search-div {
    width: 335px;
    height: 60px;
    line-height: 60px;
    margin-left: 60px;
    display: inline-block;
    background-color: bisque;
}

.search-input {
    width: 240px;
    height: 35px;
    margin-right: 10px;
}

.user-div {
    width: 393px;
    height: 60px;
    line-height: 60px;
    display: inline-block;
    background-color: yellow;
    /* overflow: hidden; */
}

.user-dropdown,
.user-img {
    width: 45px;
    height: 45px;
    line-height: 45px;
    display: inline-block;
    background-color: violet;
    vertical-align: middle;
}

.user-dropdown {}

.user-name {
    width: 60px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin-left: 10px;
    background-color: rgb(30, 167, 160);
}
</style>