import React from "react";
import Icon from "../Icon/Icon";

export default function Section2() {
  return (
    <div className="section2">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="player">
              <video
                className="videoPlayer"
                preload="none"
                src="https://drive.google.com/uc?export=download&id=1bw4ymrXW1g5mXOK0yC4JSMhiXhU5a2WR"
              ></video>
              <Icon.Play />
            </div>
            <p className="titleCard">Kurs kimlar uchun?</p>
            <div className="cardBoxes">
              <div className="cardBox">
                <div className="cards">
                  <div className="line"></div>
                  <div className="card">
                    <div className="cardContainer">
                      <div className="icons">
                        <div className="left">
                          <Icon.Icon1 />
                        </div>
                        <div className="right">
                          <Icon.Icon2 />
                        </div>
                      </div>
                      <div className="cardText">
                        <p className="text">
                          Veb-dizayn sohasini mukammal o‘rganib, shu sohada
                          faoliyat yuritishni maqsad qilgan har bir kishi uchun
                          to‘g‘ri tanlov.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardBox">
                <div className="cards">
                  <div className="line"></div>
                  <div className="card">
                    <div className="cardContainer">
                      <div className="icons">
                        <div className="left">
                          <Icon.Icon3 />
                        </div>
                        <div className="right">
                          <Icon.Icon4 />
                        </div>
                      </div>
                      <div className="cardText">
                        <p className="text">
                          Nafaqat yangi boshlovchilar, balki shu sohada yuqori
                          tajribaga ega bo‘lmagan dizaynerlar uchun mos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cardBox">
                <div className="cards">
                  <div className="line"></div>
                  <div className="card">
                    <div className="cardContainer">
                      <div className="icons">
                        <div className="left">
                          <Icon.Icon5 />
                        </div>
                        <div className="right">
                          <Icon.Icon6 />
                        </div>
                      </div>
                      <div className="cardText">
                        <p className="text">
                          Grafik dizaynerlar uchun ham ayni muddao hisoblanadi.
                          Grafik dizayner veb-dizayn sohasida ham faoliyat
                          qilishi mumkin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
