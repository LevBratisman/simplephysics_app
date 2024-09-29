import { IPost } from "../interfaces/PostInterface";
import { IMember } from "../interfaces/MemberInterface";

export interface BaseState {
    posts: IPost[] | null;
    members: IMember[] | null;
    theme: string;
    adminAccessToken: Boolean;
}