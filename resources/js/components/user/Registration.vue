<template>
    <div class="d-flex flex-column gap-2 w-25">
        <h1>Registration</h1>
        <p :class="this.error ? 'text-danger mb-0' : 'd-none'">
            {{ this.error }}
        </p>
        <input
            v-model="name"
            type="text"
            class="form-control"
            placeholder="Username"
        />
        <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Email"
        />
        <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Password"
        />
        <input
            v-model="password_confirmation"
            type="password"
            class="form-control"
            placeholder="Confirm password"
        />
        <button
            class="btn btn-primary"
            :disabled="
                this.name === '' ||
                this.email === '' ||
                this.password === '' ||
                this.password_confirmation === ''
            "
            @click.prevent="store"
        >
            Sign up
        </button>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            name: "",
            email: "",
            password: "",
            password_confirmation: "",
            error: "",
        };
    },
    methods: {
        store() {
            this.error = "";
            if (!this.name.match(/^[a-zA-Z ]{2,30}$/)) {
                this.error =
                    "Please use English letters only (2-30 characters).";
                return;
            }

            if (this.password !== this.password_confirmation) {
                this.error = "Passwords do not match.";
                return;
            }
            axios
                .post("/api/user", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then((res) => {
                    localStorage.access_token = res.data.access_token;
                    this.$router.push({ name: "main.index" });
                })
                .catch((error) => {
                    this.error = error.response.data.message;
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
