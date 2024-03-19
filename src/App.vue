<template>
  <div class="app bg" style="width: 200px;height: 100px">
    <!-- <Admin></Admin> -->
    <Main></Main>
    <!-- <Demo /> -->
  </div>
</template>

<script>
import Demo from './demo.vue'
import Main from './views/Main.vue'
import Admin from './views/admin/Admin.vue'
export default {
  inheritAttrs: false,
  components: {
    Main,
    Admin,
    Demo
  },
  setup() {
    console.log(add(1, 2))
    http.post('/subject/category/queryCategory', 
      { 'categoryType': 2 }
    )
      .then(res => {
        if (res.data && res.data.length > 0) {
          console.log(res.data);
          // categoryList.splice(0, categoryList.length, ...res.data)
          // console.log('!! ', categoryList);
        } else {
        }
      })
      .catch(err => {
        console.log(err)
      })
    return {
      // Main
    }
  }
}
</script>

<style scoped>
.bg {
    background-color: blue;
}
</style>
