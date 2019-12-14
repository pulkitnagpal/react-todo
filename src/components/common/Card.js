import React, { useState } from 'react';
import Tag from './Tag';

const Card = (props) => {
    const [hover, setHover] = useState(false);
    const toggleActionIcons = () => {
        const prevState = hover
        setHover(!prevState);
    }
    const { type } = props;
    return (
        <div className={`card border-${type === 'todo' ? 'secondary' : 'success'} mb-3`} onMouseEnter={toggleActionIcons} onMouseLeave={toggleActionIcons}>
            <div className="card-header">Header</div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div className="d-flex justify-content-between">
                    {
                        [1, 2, 3, 4].map(() => {
                            return (
                                <Tag />
                            )
                        })
                    }
                </div>

            </div>
            {
                hover && type === 'todo' ? (
                    <div className="todo-overlay">
                        <i class="fas fa-check-circle"></i>
                    </div>
                ) : null
            }

        </div>
    )
}

export default Card