<template>
	<div ref="root" />
</template>

<script>
import { mount } from "marketing/MarketingApp";

export default {
	date() {
		return {
			onParentNavigate: null
		}
	},
	watch: {
		$route(to, from) {
			if (this.onParentNavigate) {
				if (to.path !== from.path) {
					this.onParentNavigate({ pathname: to.path });
				}
			}
		},
	},
	mounted() {
		const { onParentNavigate } = mount(this.$refs.root, {
			onNavigate: ({ pathname: nextPathName }) => {
				const { path: pathname } = this.$router.currentRoute.value

				if (pathname !== nextPathName) {
					this.$router.push(nextPathName)
				}
			},
			initialPath: this.$router.currentRoute.value.path,
		});

		this.onParentNavigate = onParentNavigate;
	},
};
</script>