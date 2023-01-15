import React from 'react'
import "./Card.css"
import Ques from "./ques"

export default function Card() {
    return (
        <div className='FAQs'>
            <div className="FAQ_Header"><h1>FAQs</h1></div>
            <div className="container">
                {Ques.map((item, index) => {
                    return (

                        <div key={index} className="faq_card">
                            <div className='faq-card-inner'>
                                <div className="faq_content">
                                    <div className="detail_ques">
                                        <p className='ques-para'>{item.ques}</p>
                                    </div>
                                </div>
                                <div className='flip'>
                                    <div className="detail_ans">
                                        <p className='ans-para'>{item.ans}</p>
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
