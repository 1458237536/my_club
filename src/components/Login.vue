<template>
    <div>
        <el-input v-model="username" name="username" style="width: 240px" placeholder="请输入账号" :prefix-icon="UserFilled"
            clearable />
        <br />
        <br />
        <el-input v-model="password" name="password" style="width: 240px" placeholder="请输入密码" :prefix-icon="Lock"
            clearable type="password" />
        <el-button type="primary" @click="fetchData">登录</el-button>
    </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios';
// 引入指定图标
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
export default {
    setup() {
        const username = ref('');
        const password = ref('');
        // const responseData = ref(null);


        const fetchData = async () => {
            axios.post('/uuser/login?username=' + username.value + '&password=' + password.value).then(res => {
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
        return {
            username,
            password,
            fetchData,
            UserFilled, Lock
        }
    },
}
</script>

<style></style>