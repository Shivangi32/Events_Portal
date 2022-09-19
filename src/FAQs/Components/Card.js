import React from 'react'
import "./Card.css"
import Ques from "./ques"

export default function Card() {
    return (
        <div className='team'>
            <div className="container">
                {Ques.map((item, index) => {
                    return (

                        <div key={index} className="card">
                            <div className='card-inner'>
                                <div className="content">
                                <div className="detail">
                                        <p>{item.ques}</p>
                                    </div>
                                </div>
                                <div className='flip'>
                                    <div className="detail">
                                        <p>{item.ans}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )

                })}
            </div>
        </div>


    )
}
