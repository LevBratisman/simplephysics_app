<template>
    <div class="member-info-block">
        <v-img v-if="memberImageUrl" height="calc(100vh - 120px)" :src="memberImageUrl" alt=""></v-img>
        <div class="member-info-content">
            <h1>{{ member.name }}</h1>
            <h3 style="margin-bottom: 20px;">{{ member.role }}</h3>
            <p>{{ member.classYear }}</p>
            <p>{{ member.faculty }}</p>
            <p>{{ member.major }}</p>
            <p>{{ member.majorCode }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';

    import { IMember } from '../interfaces/MemberInterface';
    import { useBaseStore } from '../store/modules/base';

    const baseStore = useBaseStore();


    const props = defineProps<{
        member: IMember
    }>()

    const memberImageUrl = ref<string | null>(null);

    onMounted (async() => {
        if (props.member.imageId) {
            const imageObj = await baseStore.getMemberImage(props.member.imageId);
            if (imageObj) {
                const blob = new Blob([imageObj.data], { type: 'image/webp' });
                memberImageUrl.value = URL.createObjectURL(blob);
            }
        }
    })

</script>

<style scoped>

    .member-info-block {
        display: flex;
        align-items: center;
        padding-right: 200px;
    }

</style>