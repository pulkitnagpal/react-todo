import React, {useState} from 'react';
import './assets/bootstrap.min.css';
import './assets/mystyles.css';
import global from './Global';
import TodoCards from './components/list/TodoCards';
import DoneCards from './components/list/DoneCards';

function App() {
  const [todoList, setTodoList] = useState(global.store.getItems()['todoList'] || []);
  const [doneList, setDoneList] = useState(global.store.getItems()['doneList'] || []);
  const handleAdd = (item) => {
    // add item to 'todo' list in front for recent addition
    let updatedList = todoList;
    updatedList.unshift(item);
    // update local state
    setTodoList(updatedList);
    // update the local storage
    global.store.updateItems(updatedList, 'todo')
  }
  return (
    <div className="container d-flex justify-content-center">
      <div style={{marginTop: '2rem'}}>
        <h1 className="display-3">ToDo List</h1>
        <p className="lead">This is a simple utility app for adding daily todo tasks and mark as done when completed</p>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-md-6">
            <TodoCards todoList={todoList} onAdd={handleAdd}/>
          </div>
          <div className="col-md-6">
            <DoneCards doneList={doneList}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
