<template>
    <div>
        <nav class="d-flex gap-2 mb-2">
            <router-link :to="{ name: 'main.index' }">Home</router-link>
            <router-link :to="{ name: 'furniture.index' }">Blog</router-link>
            <router-link :to="{ name: 'user.login' }">Login</router-link>
            <router-link :to="{ name: 'user.registration' }"
                >Registration</router-link
            >
        </nav>

        <router-view />
    </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
