import React, { useState } from 'react';
import { search } from '../assets';

const SearchBar = ({ items }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setQuery(searchTerm);

    // Perform search logic here
    const results = items.filter(item =>
      item.toLowerCase().includes(searchTerm)
    );

    setSearchResults(results);
  };

  return (
    <div className="relative flex items-center rounded-full overflow-hidden bg-gray-200 w-full">
      <button className="absolute left-0 p-2 bg-gray-200">
        <img src={search} alt="search" className="w-7 h-7" />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleSearch}
        className="py-2 pl-12 pr-4 bg-transparent text-gray-800 placeholder-gray-600 outline-none w-full border-2"
      />

      {/* Display search results, you can customize the rendering */}
      <div className="absolute top-full bg-white w-full mt-1 p-2 rounded border border-gray-300">
        {searchResults.map((result, index) => (
          <div key={index} className="py-1">
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
