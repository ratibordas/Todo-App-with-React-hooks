import React, { useState} from 'react';
import './App.scss';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatus from '../item-status/item-status'
import ItemAddForm from '../item-add-form/item-add-form';
const App = () => {
    
  //create item func
  const createItem = (label) => {
    return {
      label,
      id: Math.random() * (20 - 10),
      done: false,
      highlight: false,
      }

  }
  // todo items
  const todoData = [
    createItem("Some text"),
    createItem("Drag me")
  ]



   //STATE
  const [todoItems, todoItemsControl] = useState(todoData);
  const [term, changeTerm] = useState("");
  const [filterData, changeFilter] = useState("all");
  
  
  
  //Search
 const onSearchChange = (term) => {
   changeTerm(term)
  }
  const search = ((items, term) => {
     if (term.length === 0) {
        return items
      }
    return  items.filter((item) => {
    return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
      })
 })
  
  
 
  
//Filter
    const onFilterChange = (filterData) => {
    changeFilter(filterData)
  }


  const filter = (items, filterData) => {
    switch (filterData) {
      case "all":
        return items
      case "active":
        return items.filter((item) => !item.done)
      case "done":
        return items.filter((item) => item.done)
      case "highlight":
        return items.filter((item) => item.highlight)
      default:
      return items
    }
  }




 const visibleItems = filter(search(todoItems, term), filterData)


//DELETE ITEM
  
  const deleteItem = (id) => {
    //find element id
    const idx = todoItems.findIndex((element) => element.id === id);
     // create new array via Array.slice
    todoItemsControl([...todoItems.slice(0, idx), ...todoItems.slice(idx + 1)])
  }


  //GET item data
  function toggleProperty(arr, id, propName) {
    const idx = todoItems.findIndex((element) => element.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] }

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]

}

 // ADD ITEM
  const addItem = (text) => {
    // create new item
    const newItem = createItem(text)
    // all array(state) + new item
    todoItemsControl([...todoItems, newItem])
  }
  
  // DATA FROM ITEM

       // info about highlighted items
  const onToggleHighlight = (id) => {
        todoItemsControl(toggleProperty(todoItems, id, "highlight"))
  }

   // info about done items
  const onToggleDone = (id) => {
    todoItemsControl(toggleProperty(todoItems, id, "done"))
  }

  //app header data
 const doneCount = todoItems.filter((item) => item.done).length;
 const toDoCount = todoItems.length - doneCount;


  return (
    <section className="wrapper">
      
      <AppHeader toDo={toDoCount} done={doneCount} />
      <div>
        <SearchPanel
        onSearchChange={onSearchChange}
        />
         
        
      </div>
      <TodoList todos={visibleItems}
        onDeleted={(id) => deleteItem(id)}
        onToggleDone={onToggleDone}
        onToggleHighlight={onToggleHighlight}
        
      />
     <ItemAddForm onItemAdded={addItem}/>
     
      
      <ItemStatus
        filterData={filterData}
        onFilterChange={onFilterChange}/>
    </section>
  );
};









export default App;
