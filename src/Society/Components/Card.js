
function Card(props) {
  return (
    <div className="card">
      <div className="content">
        <div className="images">
          <div className="image">
            <img src="" alt="logo" />
          </div>
          <div className="icons">
            <div className="material-icons">close</div>
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
