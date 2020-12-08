import React from 'react'

function searchRobots({searchfield ,searchChange}) {
  return (
    <div className = 'pa2 '>
    <input 
    className = 'pa2'
     type ='search'
     placeholder='search-robots'
     onChange = {searchChange}
     />
    </div>
  )
}

export default searchRobots
