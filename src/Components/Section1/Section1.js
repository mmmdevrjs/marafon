import React from "react";
import mainImg from "../../assets/images/main.png";
import mainTabletImg from "../../assets/images/TabletMain.png";
import MainMobile from "../../assets/images/MainMobile.png";
export default function Section1() {
  return (
    <div className="section1">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="textBox">
              <div className="title">
                <p>Web Design Foundation kursi</p>
              </div>
              <div className="text">
                <p>Biz dizayn sohasida liga chempionlarini tarbiyalaymiz!</p>
              </div>
            </div>
            <div className="imgBoxOne">
              <img src={mainImg} alt="mainImg" />
            </div>
            <div className="imgBoxTwo">
              <img src={mainTabletImg} alt="mainImg" />
            </div>
            <div className="imgBoxThree">
              <img src={MainMobile} alt="mainImg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
