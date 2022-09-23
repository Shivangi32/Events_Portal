import React from "react";
import "./Member.css";
import Team from "./Team";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";

export default function Member() {
  return (
    <div className="team">
      <div className="Header">
        <h1>TEAM</h1>
      </div>
      <div className="container">
        {Team.map((item, index) => {
          return (
            <div key={index} className="card">
              <div className="card-inner">
                <div className="content">
                  <div className="imgbox">
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="flip">
                  <div className="detail">
                    <h4>{item.name}</h4>
                    <h5>{item.position}</h5>
                    <p>{item.description}</p>
                    <div className="social">
                      {/* <button className='twitter'></button> */}
                      <a href="{item.twitter}">
                        <img src={twitter}></img>
                      </a>
                      <a href="{item.instagram}">
                        <img src={instagram}></img>
                      </a>
                      <a href="{item.linkedin}">
                        <img src={linkedin}></img>
                      </a>
                      {/* <a href='{item.instagram}'><i class="fa-brands fa-instagram purple"></i></a> */}
                      {/* <a href='{item.linkedin}'><i class="fa-brands fa-linkedin purple"></i></a> */}
                    </div>
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
