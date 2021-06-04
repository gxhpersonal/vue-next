<template>
	<div class="home-wrap">
		这是首页
		<router-link class="btn" to="/detail">去详情页</router-link>
		<div v-for="v in list" :key="v.id">{{v.name}}</div>
    <button @click="add">点击+1</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		title: String,
	},
	setup(props) {
		return {
			mounted() {},
		};
	},
	data() {
		return {
			list: this.$store.state.list,
		};
	},
	mounted() {
		console.log(this.$store.state.count);
		console.log(this.$store.state.list);
		console.log(this.$store.getters.formateList);
	},
  methods:{
    add(){
      this.$store.commit("increment",100)
    }
  }
});
</script>

<style scoped>
.home-wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.btn {
	margin-top: 2rem;
}
</style>