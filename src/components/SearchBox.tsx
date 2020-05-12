import React from 'react';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
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