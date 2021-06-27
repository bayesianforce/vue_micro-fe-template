<template>
	<div>
		<Header @onLogout="handleLogout" :isLogged="isLogged" />
		<router-view v-slot="{ Component }">
			<transition name="fade" mode="out-in">
				<component :is="Component" :onLogin="handleLogin" />
			</transition>
		</router-view>
	</div>
</template>

<script>
import Header from "./components/Header.vue";

import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

export default {
	name: "App",
	components: {
		Header,
	},
	watch: {
		isLogged(value) {
			if (value) {
				this.$router.push({ path: "/dashboard" });
			} else {
				this.$router.push({ path: "/" });
      }
		},
		$route(to) {
			if (to.meta.requiresAuth && !this.isLogged) {
				this.$router.replace({ path: "/" });
			}
		},
	},
	data() {
		return {
			isLogged: false,
		};
	},
	methods: {
		handleLogin() {
			this.isLogged = true;
		},
		handleLogout() {
			this.isLogged = false;
		},
	},
};
</script>

<style lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s ease;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>