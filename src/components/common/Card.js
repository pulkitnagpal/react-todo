import React, { useState } from 'react';
import Tag from './Tag';

const Card = (props) => {
    const [hover, setHover] = useState(false);
    const toggleActionIcons = () => {
        const prevState = hover
        setHover(!prevState);
    }
    const { type, title, description, tagList } = props;
    const linkedText = (text) => {
        const words = text.split(" ");
        return words.map((word) => {
            if (word[0] === '#'){
                return (
                    <span><a href="#">{word + ' '}</a></span>
                )
            }
            else{
                return (
                    <span>{word + ' '}</span>
                )
            }
        })
    }
    return (
        <div className={`card border-${type === 'todo' ? 'secondary' : 'success'} mb-3`} onMouseEnter={toggleActionIcons} onMouseLeave={toggleActionIcons}>
            <div className="card-header">{linkedText(title)}</div>
            <div className="card-body">
                <p className="card-text">{linkedText(description)}</p>
                <div className="d-flex">
                    {
                        tagList.map((tag) => {
                            return (
                                <Tag value={tag}/>
                            )
                        })
                    }
                </div>

            </div>
            <div className="do-action-wrapper" style={hover && type === 'todo' ? {transform: 'translate(0%)'}: null}>
            {
                hover && type === 'todo' ? 'DO IT' : null
            }
            </div>
        </div>
    )
}

export default Card