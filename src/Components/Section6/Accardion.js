import React, { useState } from "react";

export default function Accardion(props) {
  const [active, setActive] = useState(true);
  const [show, setShow] = useState(false);
  const [shower, setShower] = useState(false);
  const [showers, setShowers] = useState(false);

  return (
    <div className="accardionBox">
      <div className={`accordion ${active ? "active" : ""}`}>
        <div className="accordion__title" onClick={() => setActive(!active)}>
          {active ? (
            <span className="brandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          ) : (
            <span className="noBrandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          )}
          <div className="accordion__icon">
            {active ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9993 16.172L18.3633 10.808L19.7773 12.222L11.9993 20L4.22134 12.222L5.63534 10.808L10.9993 16.172L10.9993 4L12.9993 4L12.9993 16.172Z"
                  fill="#FFBD39"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002L4 13.0002L4 11.0002L16.172 11.0002Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="accordion__content">
          <div className="left">
            <p className="textTop">
              Tajribali mutaxassis har bir ishining amaliy ustasi bo‘lishi bilan
              birgalikda, nazariyani ham o‘zlashtirgan bo‘lishi juda muhim.
              Nazariy jihatdan bilimga ega bo‘lmagan kishi amaliyotda juda ko‘p
              xatolar qiladi.
            </p>
            <p className="textBottom">
              Videodarslar orqali UX/UI dizayn sohasining eng muhim nazariy
              bilimlarini o‘zlashtirasiz. Inson o‘zi nima qilayotganligini aniq
              tushunib (anglab) qilishi qanday yaxshi-a?!
            </p>
          </div>
          <div className="right">
            <ul>
              <li>01 — UX/UI dizayner kasbi haqida</li>
              <li>02 — UX/UI dizayner qobiliyatlari</li>
              <li>03 — Dizayn qanday muammolarni hal qiladi?</li>
              <li>04 — Interfeys va sayt klassifikatsiyasi </li>
              <li>05 — Foydalanuvchi psixologiyasi </li>
              <li> 06 — Foydalanuvchi ma’lumotni qanday qabul qiladi?</li>
              <li> 07 — Foydalanuvchi e’tiborini nazorat qilish</li>
              <li> 08 — Asosiy skanerlash pattern’lari </li>
              <li>09 — Hissiyotlar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`accordion ${show ? "show" : ""}`}>
        <div className="accordion__title" onClick={() => setShow(!show)}>
          {show ? (
            <span className="brandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          ) : (
            <span className="noBrandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          )}
          <div className="accordion__icon">
            {show ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9993 16.172L18.3633 10.808L19.7773 12.222L11.9993 20L4.22134 12.222L5.63534 10.808L10.9993 16.172L10.9993 4L12.9993 4L12.9993 16.172Z"
                  fill="#FFBD39"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002L4 13.0002L4 11.0002L16.172 11.0002Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="accordion__content">
          <div className="left">
            <p className="textTop">
              Tajribali mutaxassis har bir ishining amaliy ustasi bo‘lishi bilan
              birgalikda, nazariyani ham o‘zlashtirgan bo‘lishi juda muhim.
              Nazariy jihatdan bilimga ega bo‘lmagan kishi amaliyotda juda ko‘p
              xatolar qiladi.
            </p>
            <p className="textBottom">
              Videodarslar orqali UX/UI dizayn sohasining eng muhim nazariy
              bilimlarini o‘zlashtirasiz. Inson o‘zi nima qilayotganligini aniq
              tushunib (anglab) qilishi qanday yaxshi-a?!
            </p>
          </div>
          <div className="right">
            <ul>
              <li>01 — UX/UI dizayner kasbi haqida</li>
              <li>02 — UX/UI dizayner qobiliyatlari</li>
              <li>03 — Dizayn qanday muammolarni hal qiladi?</li>
              <li>04 — Interfeys va sayt klassifikatsiyasi </li>
              <li>05 — Foydalanuvchi psixologiyasi </li>
              <li> 06 — Foydalanuvchi ma’lumotni qanday qabul qiladi?</li>
              <li> 07 — Foydalanuvchi e’tiborini nazorat qilish</li>
              <li> 08 — Asosiy skanerlash pattern’lari </li>
              <li>09 — Hissiyotlar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`accordion ${shower ? "show" : ""}`}>
        <div className="accordion__title" onClick={() => setShower(!shower)}>
          {shower ? (
            <span className="brandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          ) : (
            <span className="noBrandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          )}
          <div className="accordion__icon">
            {shower ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9993 16.172L18.3633 10.808L19.7773 12.222L11.9993 20L4.22134 12.222L5.63534 10.808L10.9993 16.172L10.9993 4L12.9993 4L12.9993 16.172Z"
                  fill="#FFBD39"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002L4 13.0002L4 11.0002L16.172 11.0002Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="accordion__content">
          <div className="left">
            <p className="textTop">
              Tajribali mutaxassis har bir ishining amaliy ustasi bo‘lishi bilan
              birgalikda, nazariyani ham o‘zlashtirgan bo‘lishi juda muhim.
              Nazariy jihatdan bilimga ega bo‘lmagan kishi amaliyotda juda ko‘p
              xatolar qiladi.
            </p>
            <p className="textBottom">
              Videodarslar orqali UX/UI dizayn sohasining eng muhim nazariy
              bilimlarini o‘zlashtirasiz. Inson o‘zi nima qilayotganligini aniq
              tushunib (anglab) qilishi qanday yaxshi-a?!
            </p>
          </div>
          <div className="right">
            <ul>
              <li>01 — UX/UI dizayner kasbi haqida</li>
              <li>02 — UX/UI dizayner qobiliyatlari</li>
              <li>03 — Dizayn qanday muammolarni hal qiladi?</li>
              <li>04 — Interfeys va sayt klassifikatsiyasi </li>
              <li>05 — Foydalanuvchi psixologiyasi </li>
              <li> 06 — Foydalanuvchi ma’lumotni qanday qabul qiladi?</li>
              <li> 07 — Foydalanuvchi e’tiborini nazorat qilish</li>
              <li> 08 — Asosiy skanerlash pattern’lari </li>
              <li>09 — Hissiyotlar</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`accordion ${showers ? "show" : ""}`}>
        <div className="accordion__title" onClick={() => setShowers(!showers)}>
          {showers ? (
            <span className="brandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          ) : (
            <span className="noBrandColor">
              01 — UX/UI dizayn va foydalanuvchi nazariyasi
            </span>
          )}
          <div className="accordion__icon">
            {showers ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9993 16.172L18.3633 10.808L19.7773 12.222L11.9993 20L4.22134 12.222L5.63534 10.808L10.9993 16.172L10.9993 4L12.9993 4L12.9993 16.172Z"
                  fill="#FFBD39"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002L4 13.0002L4 11.0002L16.172 11.0002Z"
                  fill="white"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="accordion__content">
          <div className="left">
            <p className="textTop">
              Tajribali mutaxassis har bir ishining amaliy ustasi bo‘lishi bilan
              birgalikda, nazariyani ham o‘zlashtirgan bo‘lishi juda muhim.
              Nazariy jihatdan bilimga ega bo‘lmagan kishi amaliyotda juda ko‘p
              xatolar qiladi.
            </p>
            <p className="textBottom">
              Videodarslar orqali UX/UI dizayn sohasining eng muhim nazariy
              bilimlarini o‘zlashtirasiz. Inson o‘zi nima qilayotganligini aniq
              tushunib (anglab) qilishi qanday yaxshi-a?!
            </p>
          </div>
          <div className="right">
            <ul>
              <li>01 — UX/UI dizayner kasbi haqida</li>
              <li>02 — UX/UI dizayner qobiliyatlari</li>
              <li>03 — Dizayn qanday muammolarni hal qiladi?</li>
              <li>04 — Interfeys va sayt klassifikatsiyasi </li>
              <li>05 — Foydalanuvchi psixologiyasi </li>
              <li> 06 — Foydalanuvchi ma’lumotni qanday qabul qiladi?</li>
              <li> 07 — Foydalanuvchi e’tiborini nazorat qilish</li>
              <li> 08 — Asosiy skanerlash pattern’lari </li>
              <li>09 — Hissiyotlar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
