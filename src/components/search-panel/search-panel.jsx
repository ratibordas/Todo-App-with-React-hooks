import React, {useState} from 'react';

const SearchPanel = ({onSearchChange}) => {
  
    const [termChild, addTerm] = useState("")
  
  const addSearch = (e) => {
    const termChild = e.target.value;
    addTerm(termChild);
    onSearchChange(termChild)
     }


  return <input
    placeholder="search"
    type="text"
    value={termChild}
    onChange={addSearch}
  />;
};

export default SearchPanel;
