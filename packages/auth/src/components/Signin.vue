<template>
	<div class="signin-form">
		<Card style="width: 25rem">
			<template #title>
				<div style="text-align: center">
					<img
						alt="logo form"
						width="100"
						src="https://toppng.com/uploads/preview/assassins-creed-logo-assassins-creed-unity-symbol-11562928846pfso5lm8o0.png"
					/>
					<h3>Sign In</h3>
				</div>
			</template>
			<template #content>
				<form class="p-fluid">
					<span class="p-float-label p-mb-4">
						<InputText id="username" type="text" />
						<label for="username">Email address</label>
					</span>

					<span class="p-float-label p-mb-4">
						<InputText autocomplete id="password" type="password" />
						<label for="password">password</label>
					</span>
				</form>

				<div class="p-field-checkbox">
					<Checkbox id="signInRemember" value="false" />
					<label for="signInRemember">Remember me</label>
				</div>
			</template>

			<template #footer>
				<div class="p-fluid">
					<Button
						label="SIGN IN"
						icon="pi pi-check"
						iconPos="right"
						class="p-button-rounded"

						@click="onLogin"
					/>
					<router-link to="/auth/signup">
						<Button
							label="Don't have an account? Sign up"
							class="p-button-link p-text-left"
						/>
					</router-link>
				</div>
			</template>
		</Card>
	</div>
</template>

<script>
import Card from "primevue/card";
import Button from "primevue/button";
import Checkbox from "primevue/checkbox";
import InputText from "primevue/inputtext";
import Password from "primevue/password";

export default {
	components: {
		Card,
		Button,
		InputText,
		Password,
		Checkbox,
	},
	props: {
		onLogin: {
			type: Function
		}
	}
};
</script>

<style scoped>
	.signin-form {
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
</style>