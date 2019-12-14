import React from 'react';

const styles = {
    tag: {
        fontSize: '80%'
    }
}
const ListTags = (props) => {
    return (
        <span class="badge badge-pill badge-primary" style={styles.tag}>Primary</span>
    )
}

export default ListTags;