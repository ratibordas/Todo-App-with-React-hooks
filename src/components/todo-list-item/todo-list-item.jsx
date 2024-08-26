import React from 'react';
import "./todo-list-item.scss"





const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleHighlight, done, highlight }) => {

  
  
  return (

    <span className="todo-list-item">
      <span  
        onClick={onToggleDone}
      className={`${done ? " done" : ""} ${highlight ? " highlight" : ""}`}>
        {label}
      </span>
      <button type="button" onClick={onToggleHighlight}>!</button>
      <button onClick={onDeleted} >X</button>

    </span>
  )
};

export default TodoListItem;
