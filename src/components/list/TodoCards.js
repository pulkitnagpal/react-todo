import React, { useState, Fragment } from 'react';
import shortid from 'shortid';
import Card from '../common/Card';
import {extractTags} from '../../helpers/methods';
import global from '../../Global';

const TodoCards = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const handleOpenForm = () => {
        setOpenForm(true)
    }
    const handleCloseForm = () => {
        setOpenForm(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        if (title === '' || description === ''){
            // handle validation error here
        }
        else{
            // create object to save in todo list as default;
            const hash = shortid.generate();
            // update tags dictionary in local storage
            const tagList = extractTags(title + ' ' + description);
            tagList.forEach((tag)=> {
                global.store.updateTags(tag, hash)
            })
            const todoObj = {
                hash,
                title,
                description,
                status: 'todo',
                tagList
            }
            // update todo list
            props.onAdd(todoObj);
            // close the form
            handleCloseForm();
        }
    }
    return (
        <Fragment>
            <div className="todo-wrapper">
                <div className="d-flex todo-header">
                    <div className="d-flex align-items-center">
                        <h3>To Do</h3>
                        <span onClick={handleOpenForm}><i className="fas fa-plus-circle add-icon" style={{ marginLeft: 10 }}></i></span>
                    </div>
                </div>
                {
                    props.todoList.map((item) => {
                        return (
                            <Card type='todo' key={item.hash} {...item} />
                        )
                    })
                }
            </div>
            {
                openForm ? (
                    <div className='form-wrapper'>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Fill Task Details</h5>
                                    <button type="button" className="close" onClick={handleCloseForm}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        <div className="form-group">
                                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Title" name="title" />
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" rows="3" placeholder="Enter Description" name="description"></textarea>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn btn-primary">Add</button>
                                        <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ) : null
            }

        </Fragment>
    )
}

export default TodoCards;