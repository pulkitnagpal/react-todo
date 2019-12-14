import React from 'react';

const Filter = () => {
    return (
        <div className="filter-wrapper">
            <div className="modal-content" style={{ border: 0 }}>
                <div className="modal-header">
                    <h5 className="modal-title">By Tags</h5>
                    <button type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search by Tags" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Filter