<template>
    <div class="team-wrapper">
        <div class="team-list">
            <v-carousel height="calc(100vh - 120px)" class="team-carousel" hide-delimiters>

                <v-carousel-item cover v-for="member in members">
                    <MemberCard :member="member"></MemberCard>
                </v-carousel-item>

            </v-carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { storeToRefs } from 'pinia';

    import { useBaseStore } from '../store/modules/base';
    import MemberCard from '../components/MemberCard.vue';


    const baseStore = useBaseStore();
    const { members } = storeToRefs(baseStore);

    onMounted(async () => {
        await baseStore.getMembers();
    })
</script>

<style scoped>

</style>