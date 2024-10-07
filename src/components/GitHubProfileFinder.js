// src/components/GitHubProfileFinder.js
import React, { useState } from 'react';
import axios from 'axios';
import './GitHupFinder.css';
const GitHubProfileFinder = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState(null);
    const [repos, setRepos] = useState([]); // New state for repositories
    const [error, setError] = useState('');

    const fetchProfile = async () => {
        setError('');
        try {
            const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
            setProfile(profileResponse.data);
            
            // Fetch user repositories
            const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
            setRepos(reposResponse.data);
        } catch (err) {
            setError('User not found');
            setProfile(null);
            setRepos([]); // Reset repos on error
        }
    };

    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchProfile();
    };

    return (
        <div className='finder-container'>
            <h1>GitHub Profile Finder</h1>
            <div className='finder-searcher'>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    className='input'
                    onChange={handleInputChange}
                    required
                /> <br/><br/>
                <button type="submit" className='submit-button'>Search</button>
            </form>
            </div>
            <div className='githup-finder'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {profile && (
                <div className='finder-name'>
                    <h2>{profile.name}</h2><br/>
                    
                    <img src={profile.avatar_url} alt={profile.name} width="100" /><br/>
                    <a href={profile.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>

                    <p>Followers: {profile.followers}</p>
                    <p>Public Repos: {profile.public_repos}</p>
                </div>
            )}
            {repos.length > 0 && (
                <div className='finder-repo'>

                    <h3>Repositories:</h3>
                    <ul>
                        {repos.map(repo => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a> - {repo.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            </div>
        </div>
    );
};

export default GitHubProfileFinder;
