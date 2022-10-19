import {AiFillTwitterCircle, AiFillInstagram, AiTwotoneMail, AiFillLinkedin} from 'react-icons/ai'
import {MdAttachEmail} from 'react-icons/md'
import {RiFacebookCircleFill} from 'react-icons/ri'
import "./Contact.css"

export default function Contact() {
    return (
        <div className='contact-us'>
            <div className="contact-header"> 
                <h1>CONNECT WITH US</h1>
            </div>
            <div className="contact-container">
                <ul className="contact-list">
                    <li className="contact-item"><a href="https://mobile.twitter.com/cbigdtuw" target={"_blank"}><AiFillTwitterCircle /></a></li>
                    <li className="contact-item"><a href="https://www.instagram.com/celestialbiscuit/" target={"_blank"}><AiFillInstagram /></a></li>
                    <li className="contact-item"><a href="mailto:celestialbiscuit0.0@gmail.com"><MdAttachEmail /></a></li>
                    <li className="contact-item"><a href="https://www.linkedin.com/company/celestial-biscuit-igdtuw/" target={"_blank"}><AiFillLinkedin /></a></li>
                    {/* <li className="contact-item"></li> */}
                </ul>
            </div> 
        </div>
    )
}