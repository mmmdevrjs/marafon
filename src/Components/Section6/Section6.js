import Accardion from "./Accardion";

export default function Section6() {
  return (
    <div className="section6">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="title">
              <p className="cardTitle">
                Kurs o‘quv dasturi nimalarni o‘z ichiga oladi?
              </p>
            </div>

            <div className="content">
              <div className="left">
                {" "}
                <Accardion />
              </div>
              <div className="rightBox">
                <div className="container">
                  <div className="titleBox">
                    <p className="titleText">
                      Kursning umumiy tarkibiga nimalar kiradi?
                    </p>
                  </div>
                  <div className="contentBox">
                    <ul>
                      <li>60 dan ortiq videodarslar</li>
                      <li>
                        Figma va Adobe XD dasturlaridan foydalanish asoslari
                      </li>
                      <li> UX/UI dizayn prinsiplari </li>
                      <li> Veb va mobil dizayn amaliyotlari</li>
                      <li> Oldindan yozib olingan LiveChat'lar</li>
                      <li>
                        Kurs davomida ustoz Ismoil Safarov bilan jonli darslar
                      </li>
                      <li>Kurs uchun maxsus UX/UI qoidalar kitobi (PDF)</li>
                      <li> 20 dan ortiq bonus videodarslar</li>
                    </ul>
                    <p className="registration">Ro‘yxatdan o‘tish →</p>
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
