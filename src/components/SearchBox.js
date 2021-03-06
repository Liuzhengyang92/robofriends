import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
    <label>
      Search Robots:
      <input 
        className='pa3 ba b--green bg-light-blue'
        type='search' 
        placeholder="search robots" 
        onChange={searchChange}
      />
      </label>
    </div>
  );
};

export default SearchBox;