import React from 'react';
import Card from '../common/Card';

const DoneCards = (props) => {
    const {doneList} = props
    return (
        <div className="done-wrapper">
            <div className="d-flex done-header">
                <h3>Done</h3>
            </div>
            {
                doneList.map((item) => {
                    return (
                        <Card type="done" key={item.hash} {...item} onFilter={(tag) => { props.onFilter(tag) }} />
                    )
                })
            }
            {
                // to have a placeholder in case no card is there
                doneList.length < 1 ? (
                    <div className="empty-placeholder">Nothing is Done yet.</div>
                ) : null
            }
        </div>

    )
}

export default DoneCards;