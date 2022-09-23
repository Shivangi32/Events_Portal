import React from "react";
import "./Member.css";
import Team from "./Team";
// import twitter from "../images/twitter.png";
// import instagram from "../images/instagram.png";
// import linkedin from "../images/linkedin.png";

export default function Member() {
  return (
    <div className="about_team">
      <div className="about_Header">
        <h1>TEAM</h1>
      </div>
      <div className="about_container">
        {Team.map((item, index) => {
          return (
            <div key={index} className="about_card">
              <div className="about_card-inner">
                <div className="about_content">
                  <div className="about_imgbox">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="about_flip">
                  <div className="about_detail">
                    <h4>{item.name}</h4>
                    <h5>{item.position}</h5>
                    <p>{item.description}</p>
                    {/* <div className="about_social">
                      <a href="{item.twitter}">
                        <img src={twitter}></img>
                      </a>
                      <a href="{item.instagram}">
                        <img src={instagram}></img>
                      </a>
                      <a href="{item.linkedin}">
                        <img src={linkedin}></img>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
