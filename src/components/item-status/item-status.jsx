import React from 'react';

const ItemStatus = ({ filterData, onFilterChange }) => {

  const buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
    { name: "highlight", label: "Important" }
  ]





  const ButtonGroup = buttons.map(({ name, label }) => {
    const isActive = filterData === name;
    const clazz = isActive ? "active" : "";
    return (
      <button type="button"
        className={clazz}
        key={name}
        onClick={() => onFilterChange(name)}
      >{label}</button>
    )
  })


  return (
    <div className="btn-group">
      {ButtonGroup}
    </div>
  )


};

export default ItemStatus;