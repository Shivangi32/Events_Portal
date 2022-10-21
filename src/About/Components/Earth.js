import React from 'react'
import planet from "./earth_image.png"
import "./Earth.css"

export default function Earth() {
    return (
            <div id="planet_div" >
                <img src={planet} id="planet"></img>
            </div>
    )
}