import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

import { BaseState } from '../types';

import { postApi } from '../../api/post';
import { memberApi } from '../../api/member';

import { IPost, IPostUpdate, IPostAdd } from '../../interfaces/PostInterface';
import { IMember, IMemberAdd, IMemberUpdate } from '../../interfaces/MemberInterface';


const defaultState: BaseState = {
    posts: [],
    members: [],
    theme: 'light',
    adminAccessToken: false,
};

export const useBaseStore = defineStore('base-store', {
    state: (): BaseState => defaultState,
    actions: {
        toggleTheme() {
            if (this.theme == 'light') {
                this.theme = 'dark';
            } else {
                this.theme = 'light';
            }
        },

        setAdminAccessToken() {
            const lifeTerm = 10;
            document.cookie = `admin_access_token=${uuidv4()}; max-age=${lifeTerm}`;
            this.adminAccessToken = true;
        },

        getAdminAccessToken() {
            console.log(document.cookie);
            if (document.cookie) {
                this.adminAccessToken = true;
            } else {
                this.adminAccessToken = false;
            }
        },

        // Posts
        async getPosts() {
            try {
                const response = await postApi.getPosts();
                this.posts = response.data;
                this.posts.sort((a: IPost, b: IPost) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
            } catch (err) {
                console.debug(err);
            }
        },
        async addPost(item: IPostAdd) {
            try {
                await postApi.addPost(item);
                await this.getPosts();
            } catch (err) {
                return err;
            }
        },
        async updatePost(item: IPostUpdate) {
            try {
                await postApi.updatePost(item);
                await this.getPosts();
            } catch (err) {
                return err;
            }
        },
        async deletePost(itemId: number) {
            try {
                await postApi.deletePost(itemId);
                await this.getPosts();
            } catch (err) {
                alert(err);
            }
        },
        async getPostImage(uuid: string | null) {
            try {
                return await postApi.getPostImage(uuid);
            } catch (err) {
                console.debug(err);
            }
        },

        // Members
        async getMembers() {
            try {
                const response = await memberApi.getMembers();
                this.members = response.data;
            } catch (err) {
                console.debug(err);
            }
        },
        async addMember(item: IMemberAdd) {
            try {
                await memberApi.addMember(item);
                await this.getMembers();
            } catch (err) {
                return err;
            }
        },
        async updateMember(item: IMemberUpdate) {
            try {
                await memberApi.updateMember(item);
                await this.getMembers();
            } catch (err) {
                return err;
            }
        },
        async deleteMember(itemId: number) {
            try {
                await memberApi.deleteMember(itemId);
                await this.getMembers();
            } catch (err) {
                console.debug(err);
            }
        },
        async getMemberImage(uuid: string) {
            try {
                return await memberApi.getMemberImage(uuid);
            } catch (err) {
                console.debug(err);
            }
        },
    }
})

