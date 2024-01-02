import React, { useState } from "react";
import SearchSVG from "./image/SearchSVG";

function SearchForm({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="data-table__search-form">
      <button type="submit">
        <SearchSVG />
      </button>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </form>
  );
}

export default SearchForm;
