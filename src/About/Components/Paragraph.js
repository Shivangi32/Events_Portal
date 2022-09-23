import React from 'react'
import "./Paragraph.css"
function Paragraph() {
  return (
    <div className='about_info'>
      <div className='img_rocket'></div>
      <div className='about_content'>
        <div className="about_Heading"><h1>ABOUT</h1></div>
        <div className='para'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div> 
      </div>
    </div>
  )
}

export default Paragraph;