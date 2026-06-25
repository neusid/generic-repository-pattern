import React, { useState } from 'react'
import { gitHubUserRepository, type GitHubUser } from './data/github_user.repository';
import UserCard from './components/user_card';
import '../src/App.css'
import { gitHubRepoRepository, type GithubRepo } from './data/github_repo.repository';
import RepoCardList from './components/repo_card';

export default function GitHubSearchPage() {

    const [username, setUsername] = useState('');
    const [repo, setRepo] = useState<GithubRepo[]>([]);
    const [user, setUser] = useState<GitHubUser>();

    const [loading, setLoading] = useState<boolean>();
    const [error, setError] = useState<string>();

    const handleSearch = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!username.trim()) return

        setLoading(true);
        setUser(null);
        setRepo([]);

        Promise.all([
            gitHubUserRepository.searchUser(username),
            gitHubRepoRepository.searchRepo(username)
        ]).then(([userData, repoData]) => {
            setUser(userData)
            setRepo(repoData)
        }).catch(err => {
            setError(err.message ?? 'User not found!')
        }).finally(() => {
            setLoading(false);
        })

    }

    return (
        <div className="page">
            <div className="header">
                <h1>GitHub Search</h1>
                <p>Search any GitHub user and explore their repositories</p>
            </div>

            <form action="" className='search-form' onSubmit={handleSearch}>
                <input type="text" className='search-input' value={username} onChange={e => setUsername(e.target.value)} placeholder='Enter GitHub username...' />
                <button type="submit" className='search-btn'>
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {user && <UserCard user={user} />}
            {repo && <RepoCardList repos={repo} />}
        </div >
    )
}
