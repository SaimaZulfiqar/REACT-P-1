import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { setTweets } = useContext(AppContext);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setTweets((prevTweets) =>
      prevTweets.filter((tweet) => tweet.toLowerCase().includes(e.target.value.toLowerCase()))
    );
  };

  return (
    <header style={{ padding: '10px', backgroundColor: '#1da1f2', color: 'white' }}>
      <h1>Twitter Clone</h1>
      <input
        type="text"
        placeholder="Search Tweets..."
        value={search}
        onChange={handleSearch}
        style={{ padding: '5px', width: '100%' }}
      />
    </header>
  );
};

export default Header;
