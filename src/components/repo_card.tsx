import React from 'react'
import type { GithubRepo } from '../data/github_repo.repository'

function RepoCard({ repo }: { repo: GithubRepo }) {
    return (
        <a href={repo.html_url} className='repo-card'>
            <div className="repo-header">
                <span className='repo-name'>{repo.name}</span>
                {repo.language && <span className='repo-lang'>{repo.language}</span>}
            </div>
            <p className='repo-desc'>{repo.description ?? 'No description.'}</p>
            <div className="repo-footer">
                <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
        </a>
    )
}

export default function RepoCardList({ repos }: { repos: GithubRepo[] }) {
    const filtered = repos.filter(r => !r.fork)

    return (
        <div className="repo-section">
            <h3>Top Repository</h3>
            <div className="repo-grid">
                {filtered.map(repo => (<RepoCard key={repo.id} repo={repo} />))}
            </div>
        </div>
    )
}