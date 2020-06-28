import React from 'react';
import "./todo-list-item.scss"


// `${done ? "todo-list-item done" : "todo-list-item"} ${highlight ? "highlight" : ""}`
  //state 
  // const [done, setDone] = useState(false);
  // const [highlight, setHighlight] = useState(false);

  //done func
  // const onClickDone = () => setDone(done => !done);

  //highlight func
  // const onClickHighlight = () => setHighlight(highlight => !highlight);
  


const TodoListItem = ({ label, onDeleted, onToggleDone, onToggleHighlight, done, highlight }) => {

  
  
  return (

    <span className={`${done ? "todo-list-item done" : "todo-list-item"} ${highlight ? "highlight" : ""}`}>
      <span  
        onClick={onToggleDone}>
        {label}
      </span>
      <button type="button" onClick={onToggleHighlight}>!</button>
      <button onClick={onDeleted} >X</button>

    </span>
  )
};

export default TodoListItem;
