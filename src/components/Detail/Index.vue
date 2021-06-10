<template>
  <div>
    这是详情页
    <p>让我看看从状态管理中心获取到的数据</p>
    <p>{{$store.state.a.count}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  },
  mounted() {
		console.log(this.$store.state.a.count);
	},
})
</script>

<style scoped>

</style>