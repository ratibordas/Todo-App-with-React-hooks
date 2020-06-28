import React, { useState } from 'react'


const ItemAddForm = ({ onItemAdded }) => {


    const [label, changeLabel] = useState("")


    const onLabelChange = (e) => {
        changeLabel(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (label === "") {
         return false
        }
        onItemAdded(label);
        changeLabel("");
    }


    return (
        <form onSubmit={onSubmit}>

            <input type="text"
                onChange={onLabelChange}
                placeholder="Add task"
                value={label}/>

            <button type="submit">Add item</button>

        </form>
    )






}

export default ItemAddForm;