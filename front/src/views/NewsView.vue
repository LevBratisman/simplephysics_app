<template>
    <div class="news-wrapper">
        <div class="news-list">
            <PostCard v-for="post in posts" :post="post"></PostCard>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted } from 'vue';
    import { storeToRefs } from 'pinia';

    import { useBaseStore } from '../store/modules/base';
    import PostCard from '../components/PostCard.vue';


    const baseStore = useBaseStore();
    const { posts } = storeToRefs(baseStore);

    onMounted(async () => {
        await baseStore.getPosts();
    })

</script>

<style scoped>

    .news-list {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .news-wrapper {
        padding-bottom: 100px;
        padding-top: 50px;
    } 

</style>