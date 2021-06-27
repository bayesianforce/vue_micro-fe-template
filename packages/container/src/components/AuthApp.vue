<template>
	<div ref="root" />
</template>

<script>
import { mount } from 'auth/AuthApp';

export default {
	date() {
		return {
			onParentNavigate: null
		};
	},
	props: {
    onLogin : {
			type: Function
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
			onNavigate: ({ path: nextPathName }) => {
				const {path: pathname} = this.$router.currentRoute.value

				if (pathname !== nextPathName) {
					this.$router.push(nextPathName)
				}
			},
			initialPath: this.$router.currentRoute.value.path,
			onLogin: this.onLogin
		});

		this.onParentNavigate = onParentNavigate
	},
};
</script>