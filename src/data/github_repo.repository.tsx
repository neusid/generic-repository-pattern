import React, { Component } from 'react'
import BaseRepository from '../domain/repository/base_repository'

export interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    stargazers_count: number;
    language: string | null;
    html_url: string;
    fork: boolean;
}

export default class GitHubRepoRepository extends BaseRepository {
    constructor() { super('https://api.github.com/users/') }

    searchRepo(username: string): Promise<GithubRepo[]> {
        return this.get<GithubRepo[]>(username + '/repos?sort=stars&per_page=6')
    }
}

export const gitHubRepoRepository = new GitHubRepoRepository()
