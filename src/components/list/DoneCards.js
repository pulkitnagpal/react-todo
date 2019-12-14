import React from 'react';
import Card from '../common/Card';

const DoneCards = (props) => {
    return (
        <div className="done-wrapper">
            <div className="d-flex done-header">
                <h3>Done</h3>
            </div>
            {
                [1,2,3,4].map(()=> {
                    return (
                        <Card type="done"/>
                    )
                })
            }
        </div>
       
    )
}

export default DoneCards;