<template>
	<div>
		<Menubar :model="items">
			<template #start>
				<img
					alt="logo"
					src="https://toppng.com/uploads/preview/assassins-creed-logo-assassins-creed-unity-symbol-11562928846pfso5lm8o0.png"
					height="40"
					class="p-mr-2"
				/>
			</template>
			<template #item="{ item }">
				<Button
					v-if="item.type !== 'loginBtn'"
					:label="item.label"
					class="p-button-text p-button-plain container-button-menu"
					@click="redirectTo(item.path)"
				/>
			</template>
			<template #end>
				<Button
					:label="isLogged ? 'Logout' : 'Login'"
					class="p-button-text p-button-plain container-button-menu"
					@click="isLogged ? handleLogin(): redirectTo('/auth/signin') "
				/>
			</template>
		</Menubar>
	</div>
</template>

<script>
import Menubar from "primevue/menubar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

export default {
	components: {
		Menubar,
		InputText,
		Button,
	},
	props: {
		isLogged: {
			type: Boolean,
		},
	},
	data() {
		return {
			items: [
				{
					label: "Home",
					path: "/",
				}
			],
		};
	},
	methods: {
		redirectTo(path) {
			this.$router.push({ path });
		},
		handleLogin() {
			if (this.isLogged) {
				this.$emit('onLogout');
			}
		},
	},
};
</script>
