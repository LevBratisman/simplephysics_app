<template>

    <v-app-bar elevation="12">
        
            <v-app-bar-title>
                {{ title }}
            </v-app-bar-title>
        
        <v-spacer></v-spacer>

        <div class="theme-switcher-block">
            <v-btn v-if="theme.global.name.value=='light'" class="theme-switcher" @click="toggleTheme" icon="mdi-weather-sunny"></v-btn>
            <v-btn v-else class="theme-switcher" @click="toggleTheme" icon="mdi-weather-night"></v-btn>
        </div>

    </v-app-bar>

</template>

<script setup>
    import { defineProps } from 'vue';
    import { useTheme } from 'vuetify';
    
    import { useBaseStore } from '../store/modules/base'

    defineProps({
        title: String,
    });

    const baseStore = useBaseStore();

    const theme = useTheme();

    const toggleTheme = () => {
        baseStore.toggleTheme();
		theme.global.name.value = baseStore.theme;
    };
</script>

<style scoped>

    .theme-switcher-block {
        margin-right: 10px;
    }

    .main-link {
        text-decoration: none;
        transition: 0.3s;
    }

</style>