import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search events..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      style={searchBarStyle}
    />
  );
}

const searchBarStyle = {
  padding: '10px',
  fontSize: '16px',
  marginRight: '10px',
};

export default SearchBar;
