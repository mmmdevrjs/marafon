import React from "react";

export default function Section3() {
  return (
    <div className="section3">
      <div className="container">
        <div className="row">
          <div className="main">
            <p className="cardTitle">Kurs qanday muammolarga yechim bo‘ladi?</p>
            <div className="cards">
              <div className="cardBox">
                <p className="title">Mahalliy IT bozor talabini qondirish</p>
                <p className="text">
                  O‘zbekistonda veb va mobil ilova dizaynlarini tayyorlashga
                  bo‘lgan talabni qondirish.
                </p>
              </div>
              <div className="cardBox">
                <p className="title">Xalqaro IT bozorga chiqish</p>
                <p className="text">
                  Xalqaro IT bozor talablariga javob bera oladigan UX/UI dizayn
                  mutaxassislarini tayyorlash.
                </p>
              </div>
              <div className="cardBox">
                <p className="title">Ilmsizlikni bartaraf qilish</p>
                <p className="text">
                  Ishsizlik muammolarini yo‘qotish, yuqori daromadli, sifatli
                  UX/UI dizayn mutaxassislarni tarbiyalash.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
