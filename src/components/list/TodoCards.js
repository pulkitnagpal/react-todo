import React, { useState, Fragment } from 'react';
import Card from '../common/Card';
import Filter from '../filter/Filter';

const TodoCards = (props) => {
    const [openForm, setOpenForm] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const handleOpenForm = () => {
        setOpenForm(true)
    }
    const handleCloseForm = () => {
        setOpenForm(false)
    }
    const toggleFilter = () => {
        setOpenFilter(!openFilter);
    }
    return (
        <Fragment>
            <div className="todo-wrapper">
                <div className="d-flex todo-header">
                    <div className="d-flex align-items-center">
                        <h3>To Do</h3>
                        <span onClick={handleOpenForm}><i className="fas fa-plus-circle add-icon" style={{ marginLeft: 10 }}></i></span>
                    </div>
                    <div className="icon-wrapper">
                        <div className="position-relative">
                            <i className="fas fa-sliders-h" onClick={toggleFilter}></i>
                            {
                                openFilter ? <Filter/> : null
                            }
                        </div>
                    </div>
                </div>
                {
                    [1, 2, 3, 4].map(() => {
                        return (
                            <Card type='todo' />
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
                                <div className="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" rows="3" placeholder="Enter Description"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary">Add</button>
                                    <button type="button" className="btn btn-secondary" onClick={handleCloseForm}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null
            }

        </Fragment>
    )
}

export default TodoCards;