import "./Posts.css"
import imageReview from "./imageReview.PNG";
import {MdThumbDown,MdThumbUp} from 'react-icons/md';
function ReviewPosts() {

//   let info = {
//     id: props.id,
//     soc: props.soc,
//     key: props.key,
//     EventName: props.EventName,
//     date: props.date,
//     time: props.time,
//     approved: props.approved,
//   }

  return (
    <div className="review">
        <div className="review_wrapper">
            <img className="review-img" src={imageReview} />
            <div className="review_info">
                <div className="review_name">
                    <span>Big Bang</span>
                </div>
                <div className="review_society">
                    <span className="review_society_name">Celestial Biscuit</span>
                </div>
                
                <div className="review_date">
                    <span className="dateReview">26 October 2022, 10:00 AM</span>
                </div>
            </div>
                
            <div className="review-action">
                <div className="review_register">
                    <button><span className='registerReview' >REGISTER</span></button>
                </div>
                <div className="icon review_approve">
                    <MdThumbUp/>
                </div>
                <div className="icon review_delete">
                    <MdThumbDown/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ReviewPosts;
