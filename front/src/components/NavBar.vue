<template>
    <v-layout class="overflow-visible" style="height: 56px;">
        <v-bottom-navigation
          style="position: fixed;"
          class="navbar"
          v-model="navbar"
          color="teal"
          grow
        >
            <v-btn to="/about">
                <v-icon>mdi-home</v-icon>
        
                О проекте
            </v-btn>

            <v-btn to="/resources">
                <v-icon>mdi-atom</v-icon>
        
                Ресурсы
            </v-btn>
      
            <v-btn to="/team">
                <v-icon>mdi-account-group-outline</v-icon>
        
                Команда
            </v-btn>
      
            <v-btn to="/news">
                <v-icon>mdi-new-box</v-icon>
        
                Новости
            </v-btn>
        </v-bottom-navigation>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-layout>
</template>

<script setup>
    import { ref } from 'vue';

    const navbar = ref(1);
</script>

<style scoped>

</style>