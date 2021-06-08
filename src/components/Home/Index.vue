<template>
	<div class="home-wrap">
		这是首页
		<router-link class="btn" to="/detail">去详情页</router-link>
		<div v-for="v in list" :key="v.id">{{v.name}}</div>
		<button @click="addByMapmutation({amount:1})">辅助函数点击+1</button>
		<button @click="addByCommit">点击+1</button>
		<button @click="minusByAction">点击-1</button>
		<button @click="minusByMapaction({amount:4})">辅助函数点击-1</button>
		<other></other>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapMutations, mapActions } from "vuex";
import other from "./other.vue";
export default defineComponent({
	props: {
		title: String,
	},
	setup(props) {
		return {
			mounted() {},
		};
	},
	components: {
		other,
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
	methods: {
		addByCommit() {
			this.$store.commit("increment", { amount: 2 });
		},
		...mapMutations({
			addByMapmutation: "increment",
		}),
		minusByAction() {
			this.$store.dispatch("incrementAsync", { amount: 3 });
		},
		...mapActions({
			minusByMapaction: "incrementAsync",
		}),
	},
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