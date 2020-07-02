import React, { useState } from 'react';
import './search-panel.scss'


const SearchPanel = ({ onSearchChange }) => {

  const [termChild, addTerm] = useState("")

  const addSearch = (e) => {
    const termChild = e.target.value;
    addTerm(termChild);
    onSearchChange(termChild)
  }


  return (
    <div className="search-panel">
      
      <span role="img" aria-labelledby="search">&#128270;</span>
      
      <input
        placeholder="search"
        type="text"
        value={termChild}
        onChange={addSearch}
      />

    </div>

  )
};

export default SearchPanel;
