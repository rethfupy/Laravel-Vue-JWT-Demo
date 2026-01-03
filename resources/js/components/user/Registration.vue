<template>
    <div class="d-flex flex-column gap-2 w-25">
        <h1>Registration</h1>
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
        <button class="btn btn-primary" @click.prevent="store">Sign up</button>
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
        };
    },
    methods: {
        store() {
            axios
                .post("/api/user", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation,
                })
                .then((res) => {
                    console.log(res);
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>
