import React from 'react';
import Card from '../common/Card';

const DoneCards = (props) => {
    return (
        <div className="done-wrapper">
            <div className="d-flex done-header">
                <h3>Done</h3>
            </div>
            {
                props.doneList.map((item)=> {
                    return (
                        <Card type="done" key={item.hash} {...item} onFilter={(tag)=> {props.onFilter(tag)}}/>
                    )
                })
            }
        </div>
       
    )
}

export default DoneCards;