import React from 'react';


const styles = {
    tag: {
        fontSize: '1.3rem',
        marginRight: 10
    }
}
const Filter = (props) => {
    return (
        <div className='d-flex mb-4'>
            {
                props.selectedTags.map((tag)=> {
                    return (
                        <span className="badge badge-pill badge-success" style={styles.tag}>
                        {tag}<i class="fas fa-times remove-filter" onClick={()=> {props.onRemove(tag)}}></i></span>
                    )
                })
            }
        </div>
    )
}

export default Filter