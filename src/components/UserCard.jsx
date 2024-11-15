import React from 'react';
import { useSelector } from 'react-redux';

const UserCard = () => {
    const { user, status, error } = useSelector((state) => state.github);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;
    if (!user) return <p>No user data to display</p>;

    return (
        <div>
            <img src={user.avatar_url} alt={`${user.name}'s avatar`} width="100" />
            <h2>{user.name || 'No name provided'}</h2>
            <p>Username: {user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Public Repos: {user.public_repos}</p>
        </div>
    );
};

export default UserCard;
