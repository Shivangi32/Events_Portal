import React from 'react'
import "./Card.css"
import Ques from "./ques"

export default function Card() {
    return (
        <div className='faq'>
            <div className="container2">
                {Ques.map((item, index) => {
                    return (

                        <div key={index} className="faq_card">
                            <div className='faq_card-inner'>
                                <div className="faq_content">
                                <div className="faq_detail">
                                        <p>{item.ques}</p>
                                    </div>
                                </div>
                                <div className='faq_flip'>
                                    <div className="faq_detail_ans">
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
