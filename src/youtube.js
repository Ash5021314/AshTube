import React from 'react'

const Search = ({onSearchPress, value, onChange}) => {
  return (
    <>
      <input type="text" value={value} onChange={onChange}/>
      <button type='button' onClick={onSearchPress}>Search</button>
    </>
  )
}

export default Search