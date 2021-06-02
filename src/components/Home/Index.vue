<template>
  <div class="home-wrap">
    这是首页
    <router-link class="btn" to="/detail">去详情页</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  }
})
</script>

<style scoped>
.home-wrap{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
.btn{
    margin-top: 2rem;
  }
</style>