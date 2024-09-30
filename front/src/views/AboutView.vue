<template>
    <div id="start"></div>
    <v-container v-if="theme.global.name.value == 'dark'" class="bg-image">

        <div class="introduce__content">
            <h1 class="content-title">
            SIMPLE PHYSICS
            </h1>
            <p style="margin-bottom: 15px;">
            Добро пожаловать! Перед вами проект Московского политехнического университета «Simple physics», 
            направленный на популяризацию физики среди широкой аудитории школьников и студентов. 
            <router-link :to="{ name: 'Admin-login' }">Ф</router-link>изика окружает нас повсюду и влияет на нашу повседневную жизнь. 
            </p>
            <p style="margin-bottom: 15px;">
            Мы уверены, что она намного интереснее, чем вы думаете, поэтому хотим показать вам это воочию. 
            Данная разработка включает в себя интерактивные уроки и видео, которые помогают учащимся лучше 
            понять и визуализировать сложные физические концепции. 
            </p>
            <p style="margin-bottom: 15px;">
            Проект «Simple physics» призван вдохновить людей на изучение науки, показать её увлекательную 
            сторону и дать возможность каждому увидеть, какую важную роль играет физика в нашем мире. 
            C нами вы полюбите физику, а она - откроется для вас совсем с другой стороны!
            </p>
        </div>
    
    </v-container>
    <v-container v-else class="bg-image light">
        
        <div class="introduce__content">
            <h1 style="margin-bottom: 15px;">
            SIMPLE PHYSICS
            </h1>
            <p style="margin-bottom: 15px;">
            Добро пожаловать! Перед вами проект Московского политехнического университета «Simple physics», 
            направленный на популяризацию физики среди широкой аудитории школьников и студентов. 
            <router-link :to="{ name: 'Admin-login' }">Ф</router-link>изика окружает нас повсюду и влияет на нашу повседневную жизнь. 
            </p>
            <p style="margin-bottom: 15px;">
            Мы уверены, что она намного интереснее, чем вы думаете, поэтому хотим показать вам это воочию. 
            Данная разработка включает в себя интерактивные уроки и видео, которые помогают учащимся лучше 
            понять и визуализировать сложные физические концепции. 
            </p>
            <p style="margin-bottom: 15px;">
            Проект «Simple physics» призван вдохновить людей на изучение науки, показать её увлекательную 
            сторону и дать возможность каждому увидеть, какую важную роль играет физика в нашем мире. 
            C нами вы полюбите физику, а она - откроется для вас совсем с другой стороны!
            </p>
        </div>
    
    </v-container>
</template>

<script setup lang="ts">

    import { useTheme } from 'vuetify';

    const theme = useTheme();

</script>

<style scoped>

    a {
        text-decoration: none;
        color: inherit;
    }

    @keyframes appear{
        0%{
            opacity:0;
        }
        100% {
            opacity:1;
            transform: scale(1);
        }
    }

    .bg-image {
        height: calc(100vh - 120px);
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: 
        linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
        url('../../public/back-dark-tablet.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: top; 
    }

    .light {
        background: 
        linear-gradient(rgba(246, 245, 245, 0.7), rgba(241, 241, 241, 0.8)), 
        url('../../public/back-light-tablet.webp');
    }

    .introduce__content {
        opacity: 0;
        text-align: center;
        padding: 50px 65px;
        max-width: 600px;

        transform: scale(0.8);
        animation: appear 1s 1;
        animation-fill-mode: forwards;
    }

    @media (max-width: 601px) {
        .introduce__content {
            padding: 20px 20px;
            font-size: 12px;
        }

        .content-title {
            margin-bottom: 10px;
        }
    }

    @media (max-width: 500px) and (max-height: 1000px) {
        .bg-image {
            background: 
            linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
            url('../../public/back-dark-phone.jpg');
        }
        .light {
            background: 
            linear-gradient(rgba(246, 245, 245, 0.7), rgba(241, 241, 241, 0.8)), 
            url('../../public/back-light-pc.jpg');
        }
    }

    @media (min-height: 890px) {
        .introduce__content {
            font-size: 16px;
        }
    }

    @media (min-height: 1000px) {
        .introduce__content {
            font-size: 20px;
        }
        .content-title {
            margin-bottom: 25px;
        }
    }

</style>
