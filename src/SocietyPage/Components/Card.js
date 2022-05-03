import close from '../images/cross.png'
import update from '../images/updates.png'
function Card(){
    return(
        <div className="card">
        <div className='images'>

            <div className="image">
                <img src="" alt="logo"/>
            </div>
            <div className="images2">
            <div className='image '>
            <img src={update} alt=""/>
            </div>
            <div className="image">
            <img src={close} alt=""/>
            </div>
            </div>
            
    
        </div>
        
        
        
        <div className="info">
            <h2>Pursuing Masters Abroad</h2>
        
            <h2>Date<br/>12 April,22</h2>
            <h2>Time<br/>6:30pm</h2>
            
        </div>
        <button>Register Now</button>
         
    </div>
    );

}

export default Card;