<template>
    <div>
        <nav class="d-flex gap-2 mb-2">
            <router-link :to="{ name: 'main.index' }">Home</router-link>
            <router-link
                v-if="this.accessToken"
                :to="{ name: 'furniture.index' }"
                >Furniture</router-link
            >
            <router-link v-if="!this.accessToken" :to="{ name: 'user.login' }"
                >Login</router-link
            >
            <router-link
                v-if="!this.accessToken"
                :to="{ name: 'user.registration' }"
                >Registration</router-link
            >
            <a href="#" v-if="this.accessToken" @click.prevent="logout"
                >Log out</a
            >
        </nav>

        <router-view />
    </div>
</template>

<script>
import API from "../api";

export default {
    name: "App",
    data() {
        return {
            accessToken: null,
        };
    },
    mounted() {
        this.getAccessToken();
    },
    watch: {
        $route() {
            this.getAccessToken();
        },
    },
    methods: {
        getAccessToken() {
            this.accessToken = localStorage.getItem("access_token");
        },
        logout() {
            API.post("/api/auth/logout").then((res) => {
                localStorage.removeItem("access_token");
                this.$router.push({ name: "user.login" });
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
