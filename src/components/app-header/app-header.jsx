import React from 'react';
import "./app-header.scss"




const AppHeader = ({toDo, done}) => {
  return (

    <div className="app-header">
      <h2>Todo React App </h2>
      <h1>{toDo} &#8734; | {done} &#10004;</h1>
    </div>

  )
};

export default AppHeader;