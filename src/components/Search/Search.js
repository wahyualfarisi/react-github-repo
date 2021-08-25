import React from 'react';
import './Search.scss';

function Search({
    searchText,
    setSearchText,
    submitHandler,
    isLoadingSearch
}) {
    return (
         <form className="Search_form" onSubmit={submitHandler}>
          <input 
            type="text" 
            placeholder="Search github user"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            spellCheck="false"
          />
          <button 
            disabled={searchText.length === 0 || isLoadingSearch}
            type="submit">
            Search
          </button>
        </form>
    )
}

export default Search
