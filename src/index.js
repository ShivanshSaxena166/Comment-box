import React from 'react';
import ReactDOM from 'react-dom'
const App =()=>{
    return (
        <div className="ui container comments">
<div className="comment">
    <a href="/" className="avatar">
        <img alt="avatar" />
    </a>
    <div className="content">
        <a href="/" className="author">
            Shivansh
        </a>
        <div className="metadata">
            <span className="date">
                Today at 8:02PM
            </span>

        </div>
        <div className="text">First comment</div>
    </div>
</div>

        </div>
    )

};
    ReactDOM.render(<App/>,document.querySelector('#root'))
