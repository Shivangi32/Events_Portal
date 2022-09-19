import React from 'react';
import "./Name.css";
function Name({admin}){

    return(
        <div className='intro'>
            <div className='hello'>Hello {admin}</div>
            <div className='welcome'>Welcome !</div>
        </div>

    )

}

export default Name;