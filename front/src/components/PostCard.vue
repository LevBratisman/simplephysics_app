<template>
    <div class="post-wrapper">
        <div v-if='theme.global.name.value == "light"' class="post-block">
            <div class="post-created-data">
                <p style="opacity: 0.4; font-style: italic;">{{ post.createdAt }}</p>
                <h2>{{ post.title }}</h2>
            </div>
            <div v-if="postImageUrl" class="post-img-block">
                <v-img class="post-img" :src="postImageUrl"></v-img>
            </div>
            <div class="post-content">
                <p>{{ post.description }}</p>
            </div>
        </div>
        <div v-else class="post-block dark">
            <div class="post-created-data">
                <p>{{ post.createdAt }}</p>
                <h2>{{ post.title }}</h2>
            </div>
            <div v-if="postImageUrl" class="post-img-block">
                <v-img class="post-img" :src="postImageUrl"></v-img>
            </div>
            <div class="post-content">
                <p>{{ post.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { useTheme } from 'vuetify';

    import { IPost } from '../interfaces/PostInterface';
    import { useBaseStore } from '../store/modules/base';

    const theme = useTheme(); 

    const props = defineProps<{
        post: IPost
    }>();

    const baseStore = useBaseStore();
    const postImageUrl = ref<string | null>(null);

    onMounted (async() => {
        if (props.post.imageId) {
            const imageObj = await baseStore.getPostImage(props.post.imageId);
            if (imageObj) {
                const blob = new Blob([imageObj.data], { type: 'image/webp' });
                postImageUrl.value = URL.createObjectURL(blob);
            }
        }
    })

</script>

<style scoped>

    .post-block {
        background-color: rgb(239, 236, 236);
        width: 500px;
        padding: 20px;
        border-radius: 10px;
        white-space: normal;
    }

    .post-img {
        width: 500px;
    }

    .post-content {
        margin-top: 20px;
        opacity: 0.8;
    }

    .post-created-data {
        margin-bottom: 10px;
    }

    .dark {
        background-color: rgb(52, 51, 51);
    }

    @media (max-width: 800px) {
        .post-block {
            width: 350px;
        }
    }

</style>