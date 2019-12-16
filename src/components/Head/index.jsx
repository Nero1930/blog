import React from 'react';
import './index.scss';

function Head(props, ref) {
    const {add, num} = props;

    return (
        <div className="head" onClick={() => add(num + 1)}>标题</div>
    )
}

export default Head
