import '../App.css';
import plus from '../images/plus.png'
function AddEventCard(){
    return(
    <div className="addCard">
    <img src={plus} alt="sign"/>
    <h4>Add Event</h4>
</div>
    );
}
export default AddEventCard;

