import React from "react";
import Teacher from "../../assets/images/Teacher.png";
import TeacherTablet from "../../assets/images/TeacherTablet.png";

export default function Section9() {
  return (
    <div className="section9">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="titleBox">
              <p className="titleCard">Kurs ustozi • Ismoil Safarov kim?</p>
            </div>
            <div className="aboutTeacher">
              <div className="left">
                <img src={Teacher} alt="" />
              </div>
              <div className="leftTablet">
                <img src={TeacherTablet} alt="" />
              </div>
              <div className="right">
                <div className="line"></div>
                <p className="titleText">
                  Biz dizayn sohasida liga chempionlarini tarbiyalaymiz!
                </p>
                <ul>
                  <li>
                    {" "}
                    5+ yillik tajribaga ega bo‘lgan Lead UX/UI dizayner.
                    Socially Design Academy asoschisi.
                  </li>
                  <li className="nextLi">
                    2K dan ortiq shogirdlar chiqargan. 150+ dizayn
                    chempionlarini tarbiyalagan va bu raqamlar o‘sib bormoqda!
                  </li>
                </ul>
                <span className="registration">Ro‘yxatdan o‘tish →</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
