import React from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

const App = ({ username }) => {
  return (
    <div>
      <h1>GitHub User Finder</h1>
      <SearchBar />
      <UserCard />
    </div>
  );
};

export default App;
