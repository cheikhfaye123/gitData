import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchGithubUser } from '../features/githubSlice';

const SearchBar = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();

    const handleSearch = () => {
        if (username.trim()) {
            dispatch(fetchGithubUser(username));
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
