<template>
	<div class="home-wrap">
		这是首页
		<router-link class="btn" to="/detail">去详情页</router-link>
		<div class="li" v-for="v in list" :key="v.id">{{v.name}}</div>
		<button class="form" @click="addByMapmutation({amount:1})">辅助函数点击+1</button>
		<button class="form" @click="addByCommit">点击+1</button>
		<button class="form" @click="minusByMapaction({amount:4})">辅助函数异步点击-1</button>
		<button class="form" @click="minusByAction">异步点击-1</button>
		<div v-for="(v,i) in formatList" :key="i">{{v.name}}</div>
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
			list: this.$store.state.a.list,
			formatList:this.$store.getters.formatList
		};
	},
	mounted() {
		console.log(import.meta.env);
		console.log(this.$store.state.a.count);
		console.log(this.$store.state.a.list);
		console.log(this.$store.getters.formatList);
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

<style lang="scss" scoped>
.home-wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.btn {
		margin-top: .2rem;
	}
	.li{
		font-size: .3rem;
		margin-top: .2rem;
	}
	.form{
		width: 4rem;
		height: .5rem;
		background: hsl(197, 72%, 66%);
		outline: none;
		border: none;
		padding: 0;
		margin-top: .2rem;
		border-radius: .1rem;
		box-shadow: .06rem .06rem #ccc;
		&:active{
			background: #23b3ec;
		}
	}
}
</style>