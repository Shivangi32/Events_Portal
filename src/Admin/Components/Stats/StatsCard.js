import React from 'react';
import './StatsCard.css'
import { StatsData } from './StatsCardData';

function statsCard(fig,heading){
    return(
        <div class="main">
<div class="cardBox">
                    
                    {StatsData.map((item)=>{
                return(
                    <div class="card">
                    <div class="iconBx">
                            {item.icon}
                        </div>
                        <div>
                            <div class="numbers">{item.fig}</div>
                            <div class="cardName">{item.heading}</div>
                        </div>
    
                        
                    </div>
                )
            })}
        </div>
        </div>
        
    
                    
    
                    
    );
}


export default statsCard;

