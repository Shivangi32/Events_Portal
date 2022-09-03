import React from 'react'
import "./Member.css"
import Team from "./Team"
export default function Member() {
    return (
        <div className='team'>
            <div className="Header"><h1>TEAM</h1></div>
            <div className="container">
                {Team.map((item, index) => {
                    return (

                        <div key={index} className="card">
                            <div className="content">
                                <div className="imgbox">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="detail">
                                    <h4>{item.name}</h4>
                                    <h5>{item.position}</h5>
                                </div>
                            </div>
                        </div>

                    )

                })}
            </div>
        </div>


    )
}
