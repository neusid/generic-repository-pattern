import BaseRepository from "../domain/repository/base_repository";

export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    bio: string;
    public_repos: number;
    name: string;
    followers: number;
    following: number;
    html_url: string;
}


export class GitHubUserRepository extends BaseRepository {
    constructor() {
        super('https://api.github.com/users/')
    }

    searchUser(username: string): Promise<GitHubUser> {
        return this.get<GitHubUser>(username)
    }

}

export const gitHubUserRepository = new GitHubUserRepository()