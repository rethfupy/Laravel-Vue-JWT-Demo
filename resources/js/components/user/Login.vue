<template>
    <div class="d-flex flex-column gap-2 w-25 mt-2">
        <h1>Login</h1>
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
        };
    },
    methods: {
        login() {
            axios
                .post("/api/auth/login", {
                    email: this.email,
                    password: this.password,
                })
                .then((res) => {
                    localStorage.access_token = res.data.access_token;
                    this.$router.push({ name: "main.index" });
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
