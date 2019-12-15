import React, {useState, useEffect} from 'react';
import './assets/bootstrap.min.css';
import './assets/mystyles.css';
import global from './Global';
import TodoCards from './components/list/TodoCards';
import DoneCards from './components/list/DoneCards';
import Filter from './components/filter/Filter';
import {filterWithTags} from './helpers/methods';

const todoStore = () => global.store.getItems()['todoList'] || [];
const doneStore = () => global.store.getItems()['doneList'] || [];
function App() {
  const [todoList, setTodoList] = useState(todoStore());
  const [doneList, setDoneList] = useState(doneStore());
  const [selectedTags, setSelectedTags] = useState(global.store.getItems()['selectedTags'] || []);
  useEffect(()=> {
    // filter the lists with tags from local storage
    if (selectedTags.length > 0) {
      // filter the items in todo and done list from tags;
      const filteredTodo = filterWithTags(todoStore(), selectedTags);
      const filteredDone = filterWithTags(doneStore(), selectedTags);
      // update the items according to the tags selected or previous local storage state
      setTodoList(filteredTodo);
      setDoneList(filteredDone);
    }
    else{
      // if nothing is selected show all the saved todos and dones
      setTodoList(todoStore());
      setDoneList(doneStore());
    }
  }, [selectedTags])
  const handleAdd = (item) => {
    // add item to 'todo' list in front for recent addition
    let updatedList = todoList;
    updatedList.unshift(item);
    // update local state
    setTodoList(updatedList);
    // update the local storage
    global.store.updateItems(updatedList, 'todo')
  }
  const handleDone = (hash) => {
    // find item in todo list
    const index = todoList.findIndex((item)=> item.hash === hash);
    // add to done list
    let updatedDone = Object.assign([], doneList);
    updatedDone.unshift(todoList[index]);
    // update done list state;
    setDoneList(updatedDone);
    // update the local storage
    global.store.updateItems(updatedDone, 'done');
    // splice the todo list
    let updatedTodo =Object.assign([], todoList);
    updatedTodo.splice(index, 1);
    setTodoList(updatedTodo);
    global.store.updateItems(updatedTodo, 'todo');
  }
  const handleChangeFilter = (tag, action) => {
    const newTagList = Object.assign([], selectedTags);
    if (action === 'add'){
      newTagList.push(tag)
    }
    else if (action === 'remove'){
      const index = newTagList.findIndex((tagItem)=> tagItem === tag);
      newTagList.splice(index,1);
    }
    setSelectedTags(newTagList);
    global.store.setSelectedTags(newTagList)
  }
  const handleReset = () => {
    global.store.resetStore();
    setTodoList([]);
    setDoneList([]);
    setSelectedTags([]);
  }
  return (
    <div className="container d-flex justify-content-center">
      <div style={{marginTop: '2rem'}}>
        <div className='d-flex align-items-center justify-content-between'>
          <h1 className="display-3">ToDo List</h1>
          <button type="button" class="btn btn-primary btn-lg" onClick={handleReset}>RESET APP</button>
        </div>
        <p className="lead">This is a simple utility app for adding daily todo tasks and mark as done when completed</p>
        <hr className="my-4"/>
        <Filter selectedTags={selectedTags} onRemove={(tag)=> {handleChangeFilter(tag, 'remove')}}/>
        <div className="row">
          <div className="col-md-6">
            <TodoCards todoList={todoList} onAdd={handleAdd} onDone={handleDone} onFilter={(tag)=> {handleChangeFilter(tag, 'add')}}/>
          </div>
          <div className="col-md-6">
            <DoneCards doneList={doneList} onFilter={(tag)=> {handleChangeFilter(tag, 'add')}}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
