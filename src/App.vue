<template>
	<div>
    <router-view></router-view>
		<!-- <img alt="Vue logo" src="./assets/logo.png" />
		<HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
	name: "App",
	components: {
		HelloWorld,
	},
});
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: .4rem;
	color: #2c3e50;
}
</style>
