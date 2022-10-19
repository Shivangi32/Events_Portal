import React from 'react'
import "./Paragraph.css"
function Paragraph() {
  return (
    <div className='about_info'>
      <div className='img_rocket'></div>
      <div className='about_content'>
        <div className="about_Heading"><h1>ABOUT</h1></div>
        <div className='para'>
        Celestial Biscuit is here to carry forward the ideology of problem
        solving and innovation with technology for the greater good in our minds, hearts and souls.
        We are a bunch of enthusiastic people from IGDTUW who are passionate about what we do and take pride in our university, our work and our profession.
        We are the people who believe in the fact that 
        change is something that doesn't come just by dreaming about it but comes by working hard for it to make it a true reality.
        <br/><br/>Events portal is one such project under Celestial Biscuit.  Its aim is to help the students of IGDTUW to know about the ongoing events and sessions for all societies at a single place.
          This way student wont get lost and prevent missing out on exciting opportunities. </div> 
      </div>
    </div>
  )
}

export default Paragraph;