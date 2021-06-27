<template>
	<div class="signup-form">
		<Card style="width: 45rem">
			<template #title>
				<div style="text-align: center">
					<img
						alt="logo form"
						width="100"
						src="https://s-media-cache-ak0.pinimg.com/564x/37/0e/f3/370ef35071dbc2e305014ad17560dcb3.jpg"
					/>
					<h3>Sign Up</h3>
				</div>
			</template>
			<template #content>
				<form class="p-fluid">
					<div class="p-d-flex p-jc-between">
						<span class="p-float-label p-mb-4" style="width: 45%">
							<InputText id="firstName" type="text" />
							<label for="firstName">First name</label>
						</span>

						<span class="p-float-label p-mb-4" style="width: 45%">
							<InputText id="lastName" type="text" />
							<label for="lastName">Last Name</label>
						</span>
					</div>

					<span class="p-float-label p-mb-4">
						<InputText id="username" type="text" class="p-mb-2" />
						<label for="username">Email address</label>
					</span>

					<span class="p-float-label p-mb-4">
						<InputText autocomplete id="password" type="password" class="p-mb-2" />
						<label for="password">password</label>
					</span>
				</form>

				<div class="p-field-checkbox">
					<Checkbox id="signUpPromo" value="false" />
					<label for="signUpPromo">I want to receive updateds via email</label>
				</div>
			</template>

			<template #footer>
				<div class="p-fluid">
					<router-link to="/auth/signin">
						<Button label="SIGN UP" iconPos="right" class="p-button-rounded" />
					</router-link>
					<router-link to="/auth/signin">
						<Button
							label="Already have an account? Sign in"
							class="p-button-link p-text-right"
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
import Password from "primevue/password";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";

const SIGN_IN_PATH = "/auth/signup";

export default {
	components: {
		Card,
		Button,
		InputText,
		Password,
		Checkbox,
	},
};
</script>

<style scoped>
	.signup-form {
		left: 50%;
		top: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
	}
</style>