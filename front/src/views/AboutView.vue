<template>
    <div id="start"></div>
    <v-container v-if="theme.global.name.value == 'dark'" class="bg-image">

        <div class="introduce__content">
            <h1 style="margin-bottom: 40px;">
            SIMPLE PHYSICS
            </h1>
            <p style="margin-bottom: 15px;">
            Добро пожаловать! Перед вами проект Московского политехнического университета «Simple physics», 
            направленный на популяризацию физики среди широкой аудитории школьников и студентов. 
            Физика окружает нас повсюду и влияет на нашу повседневную жизнь. 
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
            <h1 style="margin-bottom: 40px;">
            SIMPLE PHYSICS
            </h1>
            <p style="margin-bottom: 15px;">
            Добро пожаловать! Перед вами проект Московского политехнического университета «Simple physics», 
            направленный на популяризацию физики среди широкой аудитории школьников и студентов. 
            Физика окружает нас повсюду и влияет на нашу повседневную жизнь. 
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
        url('https://steamuserimages-a.akamaihd.net/ugc/711904814176955174/2717E1278F0BD7FB0B7D837D0DE3A6A11A3D96C0/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: top; 
    }

    .light {
        background: 
        linear-gradient(rgba(246, 245, 245, 0.7), rgba(241, 241, 241, 0.8)), 
        url('https://opp.pasteurorg.ru/img/back/bg_17.jpg');
    }

    .introduce__content {
        opacity: 0;
        text-align: center;
        padding: 50px 65px;
        max-width: 600px;

        transform: scale(1.2);
        animation: appear 1s 1;
        animation-fill-mode: forwards;
    }

    @media (max-width: 1024px) {
        .bg-image {
            background: 
            linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
            url(/background_tabletsize.jpeg);
        }
    }

    @media (max-width: 601px) {
        .introduce__content {
            margin-left: 35px;
            margin-right: 35px;
        }
    }

    @media (max-width: 450px) {
        .bg-image {
            background: 
            linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
            url(/background_smallsize.jpeg);
        }
    }

    @media (max-width: 360px) {
        .bio {
            width: 250px;
        }

        .bg-image {
            background: 
            linear-gradient(rgba(0,0, 0, 0.7), rgba(0, 0, 0, 0.8)), 
            url(`/background_smallsize.jpeg);
        }
    }

</style>
