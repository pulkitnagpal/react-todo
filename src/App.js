import React from 'react';
import './assets/bootstrap.min.css';
import './assets/mystyles.css'
import TodoCards from './components/list/TodoCards';
import DoneCards from './components/list/DoneCards';

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div style={{marginTop: '2rem'}}>
        <h1 className="display-3">ToDo List</h1>
        <p className="lead">This is a simple utility app for adding daily todo tasks and mark as done when completed</p>
        <hr className="my-4"/>
        <div className="row">
          <div className="col-md-6">
            <TodoCards/>
          </div>
          <div className="col-md-6">
            <DoneCards/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
