import React from 'react';
import TodoListItem from '../todo-list-item/todo-list-item';

const TodoList = ({todos, onDeleted, onToggleHighlight, onToggleDone}) => {
 
  


  const todoListElements = todos.map((todoItem) => {
    
    return (
      <li key={todoItem.id}>
        <TodoListItem
        label={todoItem.label}
          done={todoItem.done}
          highlight={todoItem.highlight}
          onDeleted={() => onDeleted(todoItem.id)}
          onToggleHighlight={() => onToggleHighlight(todoItem.id)}
          onToggleDone={() => onToggleDone(todoItem.id)}
       />
      </li>

   )
 })
 

  return (
    <ul>
      {todoListElements}
    </ul>
  );
};

export default TodoList;
