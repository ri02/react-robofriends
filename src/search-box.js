import React from 'react';


const SearchBox = ({searchField, searchChange}) => {
    return(
    <div className='pa 2'>
      <input
        className='pa 3 ba b--green bg-lightest-blue'
        type='text'
        placeholder='Search the robots'
        onChange={searchChange} />
    </div>
    )
}

export default SearchBox
