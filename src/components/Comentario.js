import React from 'react'


function Comment(props){

    return(
    <div className="comment">

        <div className='imgTag'>
            <a href="/" className="avatar">
                <img src={props.avatar} alt="avatar" height="50px" width='50px'  />
            </a>
        </div>  

        <div className="content element">

            <a href="/" className="author">
               {props.author}
            </a>

            <div className="metadata element">

                <span className="date">Date : {props.date}</span>
            </div>

            <div className="text">{props.text}</div>

        </div>
        
    </div>
    )
}

export default Comment