import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <img className="search-icon" src="assets/search_icon.svg" alt="Search Icon" />
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBar;
