import React, { useState, useEffect } from "react";
// swiper methods
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles7.css";

export default function Section5() {
  const [swiper, setSwiper] = useState(null);
  const [slideWidth, setSlideWidth] = useState(1200);
  const [space, setSpace] = useState(30);

  const nexto = () => {
    swiper.slideNext();
  };

  const prevto = () => {
    swiper.slidePrev();
  };

  const slideObj = [
    {
      title: "PRO",
      text: "Kurs Professional UX/UI Designer Ismoil Safarov tomonidan tayyorlangan.",
    },
    {
      title: "4K",
      text: "Videokurs 4K video formatida ishlab chiqilgan.",
    },
    {
      title: "24/7",
      text: "Kursni 24 soat ichida o‘zingizga qulay bo‘lgan vaqtda o‘rganishgiz mumkin.",
    },
    {
      title: "2X NATIJA",
      text: "Kurs yurtimizda alternativi yo‘q metodika asosida ishlab chiqilgan.",
    },
    {
      title: "PRO1",
      text: "Kurs Professional UX/UI Designer Ismoil Safarov tomonidan tayyorlangan.",
    },
    {
      title: "4K1",
      text: "Videokurs 4K video formatida ishlab chiqilgan.",
    },
    {
      title: "24/71",
      text: "Kursni 24 soat ichida o‘zingizga qulay bo‘lgan vaqtda o‘rganishgiz mumkin.",
    },
    {
      title: "2X1 NATIJA",
      text: "Kurs yurtimizda alternativi yo‘q metodika asosida ishlab chiqilgan.",
    },
  ];

  useEffect(() => {
    const header = document.getElementsByClassName("section5");
    console.log(header[0].clientWidth);
    if (header[0].clientWidth >= 1200) {
      setSlideWidth((header[0].clientWidth - 1200) / 2 + 1200);
    }
    if (header[0].clientWidth > 576 && header[0].clientWidth < 1200) {
      setSlideWidth(header[0].clientWidth);
    }
  }, []);

  useEffect(() => {
    if (slideWidth >= 800 && slideWidth < 1199) {
      setSpace(20);
    } else if (slideWidth > 1200) {
      setSpace(30);
    }
  });

  window.addEventListener("resize", () => {
    const header = document.getElementsByClassName("section5");
    if (header[0].clientWidth >= 1200) {
      setSlideWidth((header[0].clientWidth - 1200) / 2 + 1200);
    }
    if (header[0].clientWidth > 576 && header[0].clientWidth < 1200) {
      setSlideWidth(header[0].clientWidth);
    }
  });

  // const spaceFunc = () => {};

  return (
    <div className="section7">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="textButton">
              <p className="cardTitle">O‘quvchilar natijalari qanday?</p>
              <div className="buttons">
                <button className="prev" onClick={prevto}>
                  <svg
                    width="64"
                    height="24"
                    viewBox="0 0 64 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_82_377)">
                      <path d="M7.828 12.9998L13.192 18.3638L11.778 19.7778L4 11.9998L11.778 4.22183L13.192 5.63583L7.828 10.9998L60 10.9998L60 12.9998L7.828 12.9998Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_377">
                        <rect
                          width="64"
                          height="24"
                          fill="red"
                          transform="translate(64 24) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>

                <button className="next" onClick={nexto}>
                  <svg
                    width="64"
                    height="24"
                    viewBox="0 0 64 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_82_374)">
                      <path d="M56.172 11.0002L50.808 5.63617L52.222 4.22217L60 12.0002L52.222 19.7782L50.808 18.3642L56.172 13.0002H4V11.0002H56.172Z" />
                    </g>
                    <defs>
                      <clipPath id="clip0_82_374">
                        <rect width="64" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>

            <div className="slider7" style={{ width: `${slideWidth}px` }}>
              <Swiper
                className="mySwiper"
                slidesPerView={"auto"}
                spaceBetween={space}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={(s) => {
                  setSwiper(s);
                }}
              >
                {slideObj.map((item) => (
                  <SwiperSlide style={{ display: "block" }} key={item.title}>
                    <p className="slideTitle">{item.title}</p>
                    <p className="slideText">{item.text}</p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
