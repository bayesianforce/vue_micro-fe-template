<template>
	<div ref="root" />
</template>

<script>
import { mount } from 'dashboard/DashboardApp';

export default {
	mounted() {
		mount(this.$refs.root);
	},
};
</script>
