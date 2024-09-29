<template>
    <div class="resources-wrapper">
        <div class="resources-block">

            <div class="flex-double-block">
                <div class="telegram-block">
                    <v-img v-if="theme.global.name.value == 'light'" src="https://www.svgrepo.com/show/342287/telegram-plane.svg"></v-img>
                    <v-img v-else src="https://static.tildacdn.com/tild3838-3438-4465-b138-313631616236/Mask_group3_1.png"></v-img>
                </div>
            </div>
            <div class="flex-double-block">
                <div class="link-block telegram-bot-block">
                    <v-icon style="height: 100px;" icon="mdi-robot"></v-icon>
                </div>
                <div class="link-block vk-group-block">
                    <v-img v-if="theme.global.name.value == 'light'" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7916096/media-icon-md.png"></v-img>
                    <v-img v-else src="https://www.titanminsk.by/assets/images/template/universal/icons/vk.png"></v-img>
                </div>
            </div>
            <div class="flex-double-block">
                <div class="link-block youtube-block">
                    <v-icon icon="mdi-youtube"></v-icon>
                </div>
                <div class="link-block rutube-block">
                    <v-icon icon="mdi-alpha-r-box"></v-icon>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

    import { useTheme } from 'vuetify';

    const theme = useTheme();

</script>

<style scoped>

    .resources-wrapper {
        height: calc(100vh - 120px);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .resources-block {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .flex-double-block {
        display: flex;
        gap: 20px;
    }

    .link-block {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 120px;
        width: 120px;
        border-radius: 10px;
        padding: 20px;
        font-size: 60px;
    }

    .telegram-block {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 120px;
        width: 260px;
        border-radius: 10px;
        padding: 20px;
        background-color: rgb(107, 147, 249);
    }

    .vk-group-block {
        background-color: rgb(126, 189, 251);
    }

    .youtube-block {
        background-color: rgb(251, 126, 126);
    }

    .rutube-block {
        background-color: rgb(60, 80, 131);
    }

    .telegram-bot-block {
        background-color: rgb(186, 187, 190);
    }

</style>