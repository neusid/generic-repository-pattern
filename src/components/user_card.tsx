import React from 'react'
import type { GitHubUser } from '../data/github_user.repository'
import '../App.css'

export default function UserCard({ user }: { user: GitHubUser }) {
    return (
        <div className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <div className="user-info">
                <h2>{user.name ?? user.login}</h2>
                <a href="">@{user.login}</a>
                <p className='bio'>{user.bio}</p>
                <div className="stat">
                    <span className='stat-label'>Followers</span>
                    <span className='stat-value'>{user.followers}</span>
                </div>
                <div className="stat">
                    <span className='stat-label'>Following</span>
                    <span className='stat-value'>{user.following}</span>
                </div>
            </div>
        </div>
    )
}
