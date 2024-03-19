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
        <el-main class="main">
          <QuestionBank />
          <!-- <Subject /> -->
        </el-main>
        <el-aside class="aside">
          <div>
            Aside
          </div>
        </el-aside>
      </el-container>
      <el-footer class="footer">
        <div>
          Footer
        </div>
      </el-footer>
    </el-container>
  </div>
</template>


<script>
import Header from './Header.vue'
import QuestionBank from './question-bank/QuestionBank.vue'
import Subject from './question-bank/Subject.vue'
export default {
  components: {
    Header, QuestionBank, Subject
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