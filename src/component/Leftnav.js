import React from "react";
import logo from "../assets/logo.png";
import logoTitle from "../assets/logoTitle.png";
import vector from "../assets/Vector.png";
import comm from "../assets/comm.png";
import group from "../assets/Group.png";
import earning from "../assets/My Earning Logo.png";
import caret from "../assets/caret.png";
import location from "../assets/location.png";
import rec1 from "../assets/Rectangle 123.png";
import rec2 from "../assets/Rectangle 124.png";

function Leftnav() {
  return (
    <>
      <div className="t1">
        <div className="x1">
          <div className="x11">
            <img src={logo} alt="" />
          </div>
          <div className="x22">
            <img src={logoTitle} alt="" />
          </div>
        </div>
        <div className="x2">
          <div className="loc1">
            <img src={location} alt="" />
            <p>Rajarajeshwari Nagar</p>
            <img id="drop" src={caret} alt="" />
          </div>
          <div className="loc2">
            <p>Branch 2</p>
            <img src={rec1} alt="" />
          </div>
          <div className="loc3">
            <p>Branch 3</p>
            <img src={rec2} alt="" />
          </div>
        </div>
        <div className="x3">
          <div className="nav1 blurback">
            <div className="logo1 ">
              <img src={vector} alt="" />
            </div>
            <div className="home">Home</div>
          </div>
          <div className="nav1">
            <div className="logo1">
              <img src={earning} alt="" />
            </div>
            <div className="home">My Earnings</div>
          </div>
          <div className="nav1">
            <div className="logo1">
              <img src={group} alt="" />
            </div>
            <div className="home">My Services</div>
          </div>
          <div className="nav1">
            <div className="logo1">
              <img src={comm} alt="" />
            </div>
            <div className="home">My Assets</div>
          </div>
        </div>
        <div className="x4"></div>
      </div>
    </>
  );
}

export default Leftnav;
