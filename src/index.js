import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetails from './CommentDetails'
const App =()=>{
    return (
        <div className="ui container comments">


<CommentDetails author="Shivansh" timeAgo="4 hours ago" content="Nice Blog post" />
<CommentDetails author="Dev1" timeAgo="8 hours ago"  content="I like the pic"/>
<CommentDetails author="Dev2" timeAgo="17 hours ago" content="Love"/>
<CommentDetails author="Dev2" timeAgo="yesterday" content="woah!!!"/>





        </div>
    )

};
    ReactDOM.render(<App/>,document.querySelector('#root'))
