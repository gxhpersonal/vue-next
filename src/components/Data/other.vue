<template>
	<div>
		<p class="num">{{$store.state.a.count}}</p>
		<ul>
			<li v-for="(v,i) in $store.state.a.list" :key="i">
				<h6>{{v.name}}</h6>
				<p>{{v.age}}</p>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	setup() {
		return {};
	},
	data() {
		return {};
	},
	mounted() {},
});
</script>

<style scoped>
.num {
	margin-top: 0.1rem;
}
li {
	list-style: korean-hanja-formal;
}
</style>