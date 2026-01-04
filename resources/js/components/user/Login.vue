<template>
    <div class="d-flex flex-column gap-2 w-25 mt-2">
        <h1>Login</h1>
        <p :class="this.error ? 'text-danger mb-0' : 'd-none'">
            {{ this.error }}
        </p>
        <input
            v-model="email"
            type="email"
            class="form-control"
            placeholder="Enter email"
        />
        <input
            v-model="password"
            type="password"
            class="form-control"
            placeholder="Enter password"
        />
        <button @click.prevent="login" class="btn btn-primary">Sign in</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        login() {
            this.error = "";
            axios
                .post("/api/auth/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    this.email = "";
                    this.password = "";
                    localStorage.access_token = res.data.access_token;
                    this.$router.push({ name: "main.index" });
                })
                .catch((error) => {
                    this.error = error.response.data.error;
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
