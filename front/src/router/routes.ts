import { RouteRecordRaw } from 'vue-router';
import TeamView from '../views/TeamView.vue'
import AboutView from '../views/AboutView.vue'
import NewsView from '../views/NewsView.vue';
import AdminLayout from '../layout/AdminLayout.vue';
import LoginView from '../views/admin/LoginView.vue';
import PostView from '../views/admin/PostView.vue';
import MemberView from '../views/admin/MemberView.vue';
import UserLayout from '../layout/UserLayout.vue';
import ResourcesView from '../views/ResourcesView.vue';


const routes: RouteRecordRaw[] = [
    {
        name: 'Home',
        path: '/',
        component: () => UserLayout,
        children: [
            {
                name: 'About',
                path: '/about',
                component: () => AboutView,
            },
            {
                name: 'Resources',
                path: '/resources',
                component: () => ResourcesView,
            },
            {
                name: 'Team',
                path: '/team',
                component: () => TeamView,
            },
            {
                name: 'News',
                path: '/news',
                component: () => NewsView,
            },
        ]
    },
    {
        name: 'Admin-login',
        path: '/admin',
        component: () => LoginView
    },
    {
        name: 'Admin-panel',
        path: '/admin/panel',
        component: () => AdminLayout,
        children: [
            {
                name: 'Posts',
                path: 'posts',
                component: () => PostView, 
            },
            {
                name: 'Members',
                path: 'members',
                component: () => MemberView, 
            }
        ]
    }
];

export default routes;
