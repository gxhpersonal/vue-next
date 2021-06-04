<template>
  <div>
    这是详情页
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    

    return {}
  },
  mounted() {
		console.log(this.$store.state.count);
	},
})
</script>

<style scoped>

</style>