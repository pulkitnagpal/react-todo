import React from 'react';

const styles = {
    tag: {
        fontSize: '80%',
        marginRight: 10
    }
}
const ListTags = (props) => {
    return (
        <span class="badge badge-pill badge-primary" style={styles.tag}>{props.value}</span>
    )
}

export default ListTags;