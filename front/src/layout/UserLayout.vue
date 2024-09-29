<template>
    <div class="user-layout-wrapper">
        <Header v-if="route.path == '/'" class="header" title="SIMPLE PHYSICS"></Header>
        <Header v-else title="SIMPLE PHYSICS"></Header>

        <div v-if="route.path == '/'" class="greeting-content">
            <v-img v-if="theme.global.name.value == 'dark'" src="../../public/ava_light.png"></v-img>
            <v-img v-else src="../../public/ava_dark.png"></v-img>
            <div class="nav-arrow">
                <v-icon icon="mdi-arrow-down-thick"></v-icon>
            </div>
        </div>

        <div v-if="route.path == '/'" class="user-layout-navbar">
            <NavBar class="navbar"></NavBar>
        </div>
        <div v-else class="user-layout-navbar">
            <NavBar></NavBar>
        </div>
    </div>
</template>

<script setup lang="ts">
    import NavBar from '../components/NavBar.vue';
    import Header from '../components/Header.vue';
    import { useTheme } from 'vuetify';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const theme = useTheme();

</script>

<style scoped>

    @keyframes appear{
        0%{
            opacity:0;
        }
        100% {
            opacity:1;
            transform: scale(1);
        }
    }

    @keyframes header-show{
        0%{
            transform: translateY(-100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes navbar-show{
        0%{
            transform: translateY(100px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes arrow-nav{
        0% {
            opacity: 0;
        }
        20% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        40% {
            opacity: 1;
            transform: translateY(10px);
        }
        60% {
            opacity: 1;
            transform: translateY(-10px);
        }
        80% {
            opacity: 1;
            transform: translateY(10px);
        }
        100% {
            transform: translateY(-10px);
        }
    }

    .user-layout-wrapper {
        height: calc(100vh - 120px);
    }

    .greeting-content {
        opacity: 0;
        transition: 1s;
        animation: appear 1s 1;
        animation-fill-mode: forwards;
        transform: scale(0.9);

        height: calc(100vh - 120px);
        display: flex;
        justify-content: center;
        padding: 0 20px;
    }

    .nav-arrow {
        opacity: 0;
        transition: 1s;
        animation: arrow-nav 5s 1s infinite;
        transform: translateY(-40px);
        position: fixed;
        bottom: 20px;
        z-index: 999;
    }

    .header {
        opacity: 0;
        animation: header-show 1s 1s 1;
        animation-fill-mode: forwards;
    }

    .navbar {
        opacity: 0;
        animation: navbar-show 1s 1s 1;
        animation-fill-mode: forwards;
    }

</style>