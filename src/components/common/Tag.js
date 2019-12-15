import React from 'react';

const styles = {
    tag: {
        fontSize: '80%',
        marginRight: 10
    }
}
const Tag = (props) => {
    return (
        <span className="badge badge-pill badge-primary" style={styles.tag}>{props.value}</span>
    )
}

export default Tag;