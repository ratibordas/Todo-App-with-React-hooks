import React, { useState } from 'react'
import "./item-add-form.scss"

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
        else if (label.length >= 15) {
            return alert("So many letters =(");
        }
        onItemAdded(label);
        changeLabel("");
    }


    return (
        <form onSubmit={onSubmit}>

            <input type="text"
                onChange={onLabelChange}
                placeholder="Do it"
                value={label}/>

            <button type="submit">Add</button>

        </form>
    )






}

export default ItemAddForm;