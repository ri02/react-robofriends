import React from 'react';


const SearchBox = ({searchField, searchChange}) => {
    return(
    <div className='pa2'>
      <input
        className='pa3 ba b--grey bg-lightest-blue'
        type='text'
        placeholder='Search the robots'
        onChange={searchChange} />
    </div>
    )
}

export default SearchBox
