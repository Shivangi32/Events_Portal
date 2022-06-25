import Modal from "react-modal";

function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="images">
          <div className="image">
            <img src="" alt="logo" />
          </div>
          <div className="icons">
            <div className="material-icons" 
            // onClick={() => editModal( id: )}
            >close</div>
            <div className="material-icons">edit</div>
          </div>
        </div>

        <div className="info">
          <h2>{props.EventName}</h2>
          <h1>Date: {props.date}</h1>
          <h1>Time: {props.time}</h1>
        </div>
      </div>
      <button>Register Now</button>
    </div>
  );
}

export default Card;

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editing: false
//     };
//     this.newDate = "";
//     this.newTime = "";
//     this.newEventName = "";
//   }

//   render() {
//     const { imgSrc, cardName, birthYear, homeWorld, onEdit } = this.props;
//     return (
//       <div className="card">
//         <div className="card-content">
//           <div className="card-name">{cardName}</div>
//           <img src={`http://localhost:3008/${imgSrc}`} alt="profile" />
//           <p>
//             <span>Birthday:</span>
//             {this.state.editing ? (
//               <span className="birth-year">{birthYear}</span>
//             ) : (
//               <input
//                 type="text"
//                 defaultValue={birthYear}
//                 ref={node => {
//                   this.newbirthYear = node;
//                 }}
//               />
//             )}
//           </p>
//           <p>
//             <span>Homeworld:</span>
//             {this.state.editing ? (
//               <span className="home-world">{homeWorld}</span>
//             ) : (
//               <input
//                 type="text"
//                 defaultValue={homeWorld}
//                 ref={node => {
//                   this.newHomeWorld = node;
//                 }}
//               />
//             )}
//           </p>
//           <div align="center">
//             <button
//               onClick={() => {
//                 this.setState({ editing: true });
//               }}
//             >
//               Edit
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }