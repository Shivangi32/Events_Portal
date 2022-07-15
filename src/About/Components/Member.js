import React from 'react'
import "./Member.css" 
import Team from "./Team"
export default function Member() {
  return (
<div className='team'>
<div  class="container">
{Team.map((item,index)=>{
    return(
        
        <div key={index} class="card">
            <div class="content">
                <div class="imgbox">
                    <img src={item.img} alt=""/>
                </div>
                <div class="detail">
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
