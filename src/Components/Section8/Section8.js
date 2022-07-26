import React, { useState, useEffect } from "react";
// import Icon from "../Icon/Icon";
import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person2.png";
import Person3 from "../../assets/images/Person3.png";
import Person4 from "../../assets/images/Person4.png";
import Person5 from "../../assets/images/Person5.png";
import Person6 from "../../assets/images/Person6.png";
import Person7 from "../../assets/images/Person7.png";
import Person8 from "../../assets/images/Person8.png";
import Person9 from "../../assets/images/Person9.png";
import Person10 from "../../assets/images/Person10.png";
import Person11 from "../../assets/images/Person11.png";
import Person12 from "../../assets/images/Person12.png";
import Person13 from "../../assets/images/Person13.png";
import Person14 from "../../assets/images/Person14.png";
import Person15 from "../../assets/images/Person15.png";
import Person16 from "../../assets/images/Person16.png";
import Person17 from "../../assets/images/Person17.png";
import Person18 from "../../assets/images/Person18.png";
import Person19 from "../../assets/images/Person19.png";
import Person20 from "../../assets/images/Person20.png";
import Person21 from "../../assets/images/Person21.png";
import Person22 from "../../assets/images/Person22.png";
import Person23 from "../../assets/images/Person23.png";
import Person24 from "../../assets/images/Person24.png";
import Person25 from "../../assets/images/Person25.png";
import Person26 from "../../assets/images/Person26.png";
// swiper methods
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles8.css";

export default function Section8() {
  const [visible, setVisible] = useState(4);
  const [btn, setBtn] = useState(true);

  const showMore = () => {
    setVisible((preValue) => preValue + 9);
    setBtn(!btn);
  };

  const cardDataLeft = [
    {
      img: Person1,
      name: "Firdavsiy Abdullajonov",
      neeck: "@Firdavsiy_Abdullajonov",
      text: "Web dizayn faundition darslar juda zoʻr ishlangan juda sodda va tushunarli boʻlgan shu qatorida boʻmba 💣 malumotlar loyihalar qilshdagi hatoliklarni bartarof etish soft  va hard skillar haqida ham ajoyib malumotlar berdingiz sizga katta rahmat Alloh rozi boʻlsin.",
    },
    {
      img: Person2,
      name: "Raximjonov Xurshid",
      neeck: "@xurshiK",
      text: "Web Design Foundation kursi da Tz bilan ishlashni o'rgandim va juda ko'p malumotga ega bo'ldim.",
    },
    {
      img: Person3,
      name: "Dilora Nosirova",
      neeck: "@diyo_ra17",
      text: "Kurs juda yaxshi o'ylab chiqilib tuzilgan kursdagi mavzular ichida o'quvchida paydo bo'lishi mumkin bo'lgan deyarli barcha savollarga javob berilgan, undan tashqari qo'shimcha live chatlar qilindi, men o'zim tomonimdan harakat biroz kam bo'lganligi sababli hamma vazifalarni bajarolmadim lekin yana qayta urinib keyingi safar yaxshiroq harakat qilish niyatim bor.",
    },
    {
      img: Person4,
      name: "Omonulloxon Toshpo‘latov",
      neeck: "@omonullokhon",
      text: "Assalomu alaykum, Web Design Foundation kursdan juda amaliy va teoretik savollarimga javob topa oldim, va har bir video kurs aniq, qisqa va tiniq mehnat mahsuli de'b qo'rqasdan ayta olaman. Shuni takidlashim zarurki biz Web Design Foundation 1 mavsumi ishtirokchilari chegirma narxda kursni sotib olib tushundikki kurs o'zini narxidan ancha pasga tushirilib sotilgan uni orqasidigi mehnat kurs narxidan ziyoda. Kurs o'ziga kelsak qisqa vaqt mo'ljalangan bo'lsa ham, uni tushunishga juda qattiq e'tibor ta'lab qiladi. Shu vaqtni o'zida Admin/Ustoz Ismoil aka biz bilan 24/7 a'loqada qolib barcha texnik muamolarga javob beridilar biz 150 ziyod o'quvchi bo'lishimizga va 150 turdagi savolarllarga qaramasdan",
    },
    {
      img: Person5,
      name: "Ja'far Xayrullayev",
      neeck: "@khayrullayev_jafar",
      text: "Web Foundation 01 kursining eng yoqqan nuqtasi o'qitish uslubi bo'ldi. Web dizayn sohasini barcha elementlari tushunarli qilib video sifatida yuklangan. 1 oy ichida sohani o'rgana oldim. Jonli efirlar juda ham zo'r bo'ldi, feedback'lardan katta tajribalar yeg'dim. Kurs tamomila zo'r ishlangan. Ustoz, Ismoil akaga katta rahmat. Juda ham katta foyda oldim deb bemalol ayta olaman. Web-dizayn sohasini o'rganmoqchi insonga shubhasiz Socially design Academy'ni maslahat beraman.",
    },
    {
      img: Person6,
      name: "Umidjon Abdullayev",
      neeck: "@UA_DesignerUZ",
      text: "❇️  Web Dizayn Foundation kursi web dizayn sohasiga kirib keluvchilar uchun ajoyib kurs deb o'ylayman . Bu kursda o'qib ko'p foydali bilmlarni qo'lga kiritdim va dizayn sohasida o'z o'rnimga ega bo'ldim . Web dizayn sohasini o'rganmoqchi bo'lgan do'stlarimiz uchun   Socially Design Academiyasini tavfsiya qilaman !",
    },
    {
      img: Person7,
      name: "Alijon Norqulov",
      neeck: "@Alijon_Norqulov",
      text: "Web Design Foundation kursi darslari juda sodda tushuntirilgan va ajoyib.!!! Darslar mohirona ishlangan. Men bu darslardan ko'p foydali malumotlarni oldim va bunday keyingi ishlarimga poydevor bo'ladi In shaa Alloh. Darslar uchun alohida Rahmat ustoz !!!",
    },
    {
      img: Person8,
      name: "Diyorbek Sodiqjonov",
      neeck: "@sadikjanof",
      text: "Web dizayn foundetion kursi juda zo’r ishlangan. Endi boshlaganlar uchun juda tushunarli va birma bir to’xtalib o’tilgan. Men bu kursda o’qib figma dasturida qiyinchiliklarsiz ishlash darajasigacha yetdim va hozirda o’zim mustaqil tarzda web sahifa dizaynlarini qila olaman.Web dizaynga qiziquvchilar uchun shu vidyodarsni sotib olishni tavsiya etaman.",
    },
    {
      img: Person9,
      name: "Nilufar Jo‘raeva",
      neeck: "@bestgiftsuz",
      text: "Kurs juda ham foydali õqitilish uslubi ham juda ham tushunarli ishlangan menga ayniqsa foundation kursida feedbacklarga booy live chatlar kõp bõlishi yoqdi👍👍👍",
    },
  ];
  const cardDataMiddle = [
    {
      img: Person10,
      name: "Mirazim Ruzimurodov",
      neeck: "@mirazimruzimurodov",
      text: "Web Design Foundation'da oʻqib, avvalo, oʻzimni bu sohaga kirishdagi mukammal boʻlgan koʻnikmalarni egalladim, buning uchun Ustozlarimizga, Socially Jamoasiga oʻz minnatdorchiligimni bildiraman.",
    },
    {
      img: Person11,
      name: "Hasanboy Rustamov",
      neeck: "@Rustamov_Hasanboy",
      text: "Kursda o'qimasdan oldin, web dizayn bo'yicha umuman bilim yo'q edi. Kursda o'qib juda ko'p bilimlarga ega bo'ldim. Darslarni juda zo'r tushintirib beradilar o'rganmasdan iloji yo'q. Kursdagi darslar sifati narxiga qaraganda junda arzon. Ustoz bilimlarni maximum o'rgatadilar. Ustozdan Alloh rozi bo'lsin!",
    },
    {
      img: Person12,
      name: "Farrux Bozorboyev",
      neeck: "@Farrukhdesigner",
      text: "Men bu kursdan avvalo, web designda bilmaganlarim bilib, oʻrganib oldim, asosiysi ish sifatim ancha oʻsdi. Eng yoqqan mavzu: foydalanuvchini diqqat etiborini boshqarish mavzusi boʻldi. Umuman oʻqitish sifatiga umumman gap boʻlishi mumkin emas.",
    },
    {
      img: Person13,
      name: "Azizbek Akramov",
      neeck: "@akramovazizbek1",
      text: "Web design foundation kursi men uchun web dizayn bo'yicha fundamental bilimlarni egallashimda va shu soha bo'yicha asosiy ko'nikmalarni egallashimda katta turtki bo'ldi. Kurs davomida Junior  Web dizayner uchun zarur bo'lgan barcha ma'lumotlarni qo'lga kiritdim. Kurs menga kelajakda Senior Ux/Ui designer bo'lishimga qo'ygan asosiy qadamim bo'ldi.Bu uchun ustozim Ismoil aka va ularning jamoalariga kattadan katta rahmat Alloh rozi bo'lsin",
    },
    {
      img: Person14,
      name: "Muhammadbotir Qobilov",
      neeck: "@mbdoce",
      text: "Web Design Foundation kursi haqidagi fikrlarim juda a'lo, ushbu kurs O'zbekistonda alternativi yo'qligi meni qiziqtirgandi rostdanham yurtimizda juda ko'p kuzatiladigan kontrast xatoliklariga yechim topdim shunga o'xshash spacing, type scale, ranglar bilan ishlash, layout grid, stillashtirish, Ui kit haqida ko'nikmalarga ega bo'ldim kursda qisqa muddat ichida 0 dan junior darajasiga chiqdim endilikda kelajakka qadam tashlayman",
    },
    {
      img: Person15,
      name: "Orif Omonov",
      neeck: "@Orif_Omonov",
      text: "Ismoil aka Safarovning web design foundation kursi bitiruvchisiman. Ushbu kurs web design borasida juda foydali dastlabki ko'nikmalarni berib borgan kurs ushbu kasbni mutlaqo bilmaydiganlar uchun ham juda oson, sodda shaklda berilgan va shuning uchun hech qanday qiyinchiliklar bo'lmaydi. Shaxsan o'zim ham Adobe xd, figma, ui ux ga oid darslarni o'rganishim natijasida o'z loyihalarimni amalga oshirishni boshladim. Ushbu kursni barchaga tavsiya etib qolaman",
    },
    {
      img: Person16,
      name: "Azimjon Najibov",
      neeck: "@Azimjon_Najibov",
      text: "Web desing foundation kursida 1.5oy oqidim. Kursdan kutilmagan natijalarga erishdim. Kurs juda zo’r bolib oti onlayn tartibda bolib oti Ustozimga kottakon raxmat bizning kelajagimiz uchun jon kuydirib dars otilar. Kurs mobaynida organgan dasturlarim, XD va Figma dasturini orgatilar va Live chatlar ham bolib oti undayam juda foydali maslahatlar tshuntirib berdilar. Hamma Web desinga qiziqiyotkan yoshlarga shu kursni maslahat beraman. Ismoil Safarov Ustozga kottakon raxmat ilimlari bundanam ziyoda bolsin !!! ",
    },
    {
      img: Person17,
      name: "Akbarjon Murodov",
      neeck: "@BarLiv",
      text: "Web design foundation kursida men web design sohasidagi fundamental bilimlarni nafaqat amaliy balki nazariy jihatdan ham yetarlicha egalladim. Umid qilaman bu bilimlar kelgusida Ui/Ux yo'nalishida menga albatta asqotadi in sha Allah.  Ustozdan sizdan Alloh rozi bo'lsin.",
    },
    {
      img: Person18,
      name: "Javohir Saidahmedov",
      neeck: "@Javohir_Saidahmedov",
      text: "Assalomu alaykum 'Web dizayn foundation' kursi juda ham sodda va tushunarli qilib tayyorlangan. Men kursdan juda ko'p dizayn qonun qoidalarini o'rgandim va ularni hozir amalda qo'llayapman. Kursni o'rganishni bemalol boshqalarga ham tavsiya qila olaman. Alloh ustozdan rozi bo'lsin ilmlari ziyoda bo'lsin...",
    },
  ];
  const cardDataRight = [
    {
      img: Person19,
      name: "Mohinur Qo‘ziboyeva",
      neeck: "@designer_mohinur",
      text: "Web design foundation kursi judayam professional ishlab chiqilgan kurs ekan, bu kursdan yangi bilimlarni o'rgandim, ancha foydali bo'ldi, hamma narsani bilaman degan dizaynerlar ham bilmaydigan narsalar bor ekan, alhamdulillah manga judayam yoqdi, barchaga tavsiya qilardim bu kursda o'qishni,  Ustozimiz Ismoil ustozdan Alloh rozi bo'lsin!  ",
    },
    {
      img: Person20,
      name: "Diyora Eshqobilova",
      neeck: "@diyo_ra17",
      text: "Web design foundation kursi juda ham har tomonlama foydali bòldi. Live chatlar orqali har xil foydali ma'lumotlar oldim. Misol uchun mijozlar bn qanday qilib gaplashish, soft skills va hard skillslar haqida, bajargan vazifalarimga har doim feedbacklar oldim. Bergan bilimlaringiz uchun rahmat 👍",
    },
    {
      img: Person21,
      name: "Suxrobjon Xurramov",
      neeck: "@Suxrobjon_Xurramov",
      text: "Alloh boshlagan ishlaringizni rivojini bersin! Socially Design Academyʼda oʻqib, men UX/UI va grafik dizayn boʻyicha bilimlarimni mustahkamladim. Ustozimiz esa har bir oʻquvchiga erinmasdan feedbacklar berishdi. Bir feedbackʼka muzlasam yana bir feedbackʼda oʻsib borayotganimni sezardim. Har bir bergan feedbackʼlari uchun Ustozim Ismoil Safarovga chin koʻngildan rahmat aytib qolaman. Alloh taolo ajr savoblarini koʻpaytirib bersin!",
    },
    {
      img: Person22,
      name: "Abduvali Shomuratov",
      neeck: "@Abduvaliblog",
      text: "Web Design Foundation kursi UI / UX imkoniyatlari va farqlari haqida batafsil maʼlumotlar berildi. ",
      nextText1:
        "Web Dizaynda Minimalistik dizayn qilishda izlanish va qilish jarayonlari ko‘rsatmalar qilingan holda o‘rgatildi.",
      nextText2:
        "G‘oyalrni tartib bilan foydalanish. Kursning asosiy afzallilari tartib bilan  foydalanish va g‘oyalardan to‘g‘ri foydalanish imkoniyatlari maʼqul keldi.",
    },
    {
      img: Person23,
      name: "Omadbek Ergashev",
      neeck: "@omadbek_designer",
      text: "Web design foundation kursi juda mukamal va aniq ma'lumotlar boy kurs boldi men uchun oz mudatda bunday bilimlarga ega bo'laman deb sira oylamagandim. Buning uchun Mentorimiz Ismoil Safarovga katta rahmat aytaman.",
    },
    {
      img: Person24,
      name: "Jahongir Mashrabov",
      neeck: "@JMU001",
      text: "Men hozirda maktab o'quvchisiman va veb dizayn sohasiga qiziqaman. Lekin ijtimoiy tarmoqlar orqali ,,Socially design academy'' online kurslarini topmagunimcha hech qanday bilimga ega emas edim. Shu sababli men noldan o'rgatiluvchi ,,Web design foundation'' kursida bir oy davomida tahsil oldim. Kurs ko'p yillik tajribaga ega bo'lgan UI/UX dizayner ustoz Ismoil Safarov tomonidan tayyorlanadi. Ushbu kursdan keyin men yetarlicha bilimlarga ega bo'ldim. Eng asosiysi kurslarning narxi hamyonbop va ular qiziqarli. Sizlarga ham ushbu kursni tavsiya qilmoqchiman. Sababi kursdan olgan bilimlaringizdan hech ham afsuslanmaysiz!",
    },
    {
      img: Person25,
      name: "Ixlos Matopayev",
      neeck: "@icoo_29",
      text: "Men bu kursdan yuqori darajada konikmalarga ega boldim bu sohaga umuman tushinmasdim qiziqishim yoq edi shu web Foundation  kursdan keyin anchagina Bilim va konikmalarga ega boldim. Rahmat sizga alloh rozi bolsiz Sizdan Uztoz bizga erinmasdan dars tayyorlab orgatganingiz uchun 🤝",
    },
    {
      img: Person26,
      name: "Mohlaroyim Mustafoyeva",
      neeck: "@mustaf1_dm",
      text: "Web Design Foundation kursi nafaqat dizayn sohasini endi boshlovchilar uchun, balki bu sohada malakaga ega mutaxassislar ham ancha foydali ko‘nikmalarga ega bo‘ladi. Bu kursda o‘qish orqali men moliyaviy hamda vaqt samaradorligiga erishdim. Kurs narxi arzon, kontent sifatli. Endilikda Web Design kursining 1-moduliga qabul boshlanishini kutyapman. ",
      nextText1:
        "Kurs tashkilotchisi ustozim Ismoil Safarovga o'z minnatdorchiligimni bildiraman.",
    },
  ];

  // Tablet uchun objects

  const data = [
    {
      img: Person1,
      name: "Firdavsiy Abdullajonov",
      neeck: "@Firdavsiy_Abdullajonov",
      text: "Web dizayn faundition darslar juda zoʻr ishlangan juda sodda va tushunarli boʻlgan shu qatorida boʻmba 💣 malumotlar loyihalar qilshdagi hatoliklarni bartarof etish soft  va hard skillar haqida ham ajoyib malumotlar berdingiz sizga katta rahmat Alloh rozi boʻlsin.",
    },
    {
      img: Person2,
      name: "Raximjonov Xurshid",
      neeck: "@xurshiK",
      text: "Web Design Foundation kursi da Tz bilan ishlashni o'rgandim va juda ko'p malumotga ega bo'ldim.",
    },
    {
      img: Person3,
      name: "Dilora Nosirova",
      neeck: "@diyo_ra17",
      text: "Kurs juda yaxshi o'ylab chiqilib tuzilgan kursdagi mavzular ichida o'quvchida paydo bo'lishi mumkin bo'lgan deyarli barcha savollarga javob berilgan, undan tashqari qo'shimcha live chatlar qilindi, men o'zim tomonimdan harakat biroz kam bo'lganligi sababli hamma vazifalarni bajarolmadim lekin yana qayta urinib keyingi safar yaxshiroq harakat qilish niyatim bor.",
    },
    {
      img: Person4,
      name: "Omonulloxon Toshpo‘latov",
      neeck: "@omonullokhon",
      text: "Assalomu alaykum, Web Design Foundation kursdan juda amaliy va teoretik savollarimga javob topa oldim, va har bir video kurs aniq, qisqa va tiniq mehnat mahsuli de'b qo'rqasdan ayta olaman. Shuni takidlashim zarurki biz Web Design Foundation 1 mavsumi ishtirokchilari chegirma narxda kursni sotib olib tushundikki kurs o'zini narxidan ancha pasga tushirilib sotilgan uni orqasidigi mehnat kurs narxidan ziyoda. Kurs o'ziga kelsak qisqa vaqt mo'ljalangan bo'lsa ham, uni tushunishga juda qattiq e'tibor ta'lab qiladi. Shu vaqtni o'zida Admin/Ustoz Ismoil aka biz bilan 24/7 a'loqada qolib barcha texnik muamolarga javob beridilar biz 150 ziyod o'quvchi bo'lishimizga va 150 turdagi savolarllarga qaramasdan",
    },
    {
      img: Person5,
      name: "Ja'far Xayrullayev",
      neeck: "@khayrullayev_jafar",
      text: "Web Foundation 01 kursining eng yoqqan nuqtasi o'qitish uslubi bo'ldi. Web dizayn sohasini barcha elementlari tushunarli qilib video sifatida yuklangan. 1 oy ichida sohani o'rgana oldim. Jonli efirlar juda ham zo'r bo'ldi, feedback'lardan katta tajribalar yeg'dim. Kurs tamomila zo'r ishlangan. Ustoz, Ismoil akaga katta rahmat. Juda ham katta foyda oldim deb bemalol ayta olaman. Web-dizayn sohasini o'rganmoqchi insonga shubhasiz Socially design Academy'ni maslahat beraman.",
    },
    {
      img: Person6,
      name: "Umidjon Abdullayev",
      neeck: "@UA_DesignerUZ",
      text: "❇️  Web Dizayn Foundation kursi web dizayn sohasiga kirib keluvchilar uchun ajoyib kurs deb o'ylayman . Bu kursda o'qib ko'p foydali bilmlarni qo'lga kiritdim va dizayn sohasida o'z o'rnimga ega bo'ldim . Web dizayn sohasini o'rganmoqchi bo'lgan do'stlarimiz uchun   Socially Design Academiyasini tavfsiya qilaman !",
    },
    {
      img: Person7,
      name: "Alijon Norqulov",
      neeck: "@Alijon_Norqulov",
      text: "Web Design Foundation kursi darslari juda sodda tushuntirilgan va ajoyib.!!! Darslar mohirona ishlangan. Men bu darslardan ko'p foydali malumotlarni oldim va bunday keyingi ishlarimga poydevor bo'ladi In shaa Alloh. Darslar uchun alohida Rahmat ustoz !!!",
    },
    {
      img: Person8,
      name: "Diyorbek Sodiqjonov",
      neeck: "@sadikjanof",
      text: "Web dizayn foundetion kursi juda zo’r ishlangan. Endi boshlaganlar uchun juda tushunarli va birma bir to’xtalib o’tilgan. Men bu kursda o’qib figma dasturida qiyinchiliklarsiz ishlash darajasigacha yetdim va hozirda o’zim mustaqil tarzda web sahifa dizaynlarini qila olaman.Web dizaynga qiziquvchilar uchun shu vidyodarsni sotib olishni tavsiya etaman.",
    },
    {
      img: Person9,
      name: "Nilufar Jo‘raeva",
      neeck: "@bestgiftsuz",
      text: "Kurs juda ham foydali õqitilish uslubi ham juda ham tushunarli ishlangan menga ayniqsa foundation kursida feedbacklarga booy live chatlar kõp bõlishi yoqdi👍👍👍",
    },
    {
      img: Person10,
      name: "Mirazim Ruzimurodov",
      neeck: "@mirazimruzimurodov",
      text: "Web Design Foundation'da oʻqib, avvalo, oʻzimni bu sohaga kirishdagi mukammal boʻlgan koʻnikmalarni egalladim, buning uchun Ustozlarimizga, Socially Jamoasiga oʻz minnatdorchiligimni bildiraman.",
    },
    {
      img: Person11,
      name: "Hasanboy Rustamov",
      neeck: "@Rustamov_Hasanboy",
      text: "Kursda o'qimasdan oldin, web dizayn bo'yicha umuman bilim yo'q edi. Kursda o'qib juda ko'p bilimlarga ega bo'ldim. Darslarni juda zo'r tushintirib beradilar o'rganmasdan iloji yo'q. Kursdagi darslar sifati narxiga qaraganda junda arzon. Ustoz bilimlarni maximum o'rgatadilar. Ustozdan Alloh rozi bo'lsin!",
    },
    {
      img: Person12,
      name: "Farrux Bozorboyev",
      neeck: "@Farrukhdesigner",
      text: "Men bu kursdan avvalo, web designda bilmaganlarim bilib, oʻrganib oldim, asosiysi ish sifatim ancha oʻsdi. Eng yoqqan mavzu: foydalanuvchini diqqat etiborini boshqarish mavzusi boʻldi. Umuman oʻqitish sifatiga umumman gap boʻlishi mumkin emas.",
    },
    {
      img: Person13,
      name: "Azizbek Akramov",
      neeck: "@akramovazizbek1",
      text: "Web design foundation kursi men uchun web dizayn bo'yicha fundamental bilimlarni egallashimda va shu soha bo'yicha asosiy ko'nikmalarni egallashimda katta turtki bo'ldi. Kurs davomida Junior  Web dizayner uchun zarur bo'lgan barcha ma'lumotlarni qo'lga kiritdim. Kurs menga kelajakda Senior Ux/Ui designer bo'lishimga qo'ygan asosiy qadamim bo'ldi.Bu uchun ustozim Ismoil aka va ularning jamoalariga kattadan katta rahmat Alloh rozi bo'lsin",
    },
    {
      img: Person14,
      name: "Muhammadbotir Qobilov",
      neeck: "@mbdoce",
      text: "Web Design Foundation kursi haqidagi fikrlarim juda a'lo, ushbu kurs O'zbekistonda alternativi yo'qligi meni qiziqtirgandi rostdanham yurtimizda juda ko'p kuzatiladigan kontrast xatoliklariga yechim topdim shunga o'xshash spacing, type scale, ranglar bilan ishlash, layout grid, stillashtirish, Ui kit haqida ko'nikmalarga ega bo'ldim kursda qisqa muddat ichida 0 dan junior darajasiga chiqdim endilikda kelajakka qadam tashlayman",
    },
    {
      img: Person15,
      name: "Orif Omonov",
      neeck: "@Orif_Omonov",
      text: "Ismoil aka Safarovning web design foundation kursi bitiruvchisiman. Ushbu kurs web design borasida juda foydali dastlabki ko'nikmalarni berib borgan kurs ushbu kasbni mutlaqo bilmaydiganlar uchun ham juda oson, sodda shaklda berilgan va shuning uchun hech qanday qiyinchiliklar bo'lmaydi. Shaxsan o'zim ham Adobe xd, figma, ui ux ga oid darslarni o'rganishim natijasida o'z loyihalarimni amalga oshirishni boshladim. Ushbu kursni barchaga tavsiya etib qolaman",
    },
    {
      img: Person16,
      name: "Azimjon Najibov",
      neeck: "@Azimjon_Najibov",
      text: "Web desing foundation kursida 1.5oy oqidim. Kursdan kutilmagan natijalarga erishdim. Kurs juda zo’r bolib oti onlayn tartibda bolib oti Ustozimga kottakon raxmat bizning kelajagimiz uchun jon kuydirib dars otilar. Kurs mobaynida organgan dasturlarim, XD va Figma dasturini orgatilar va Live chatlar ham bolib oti undayam juda foydali maslahatlar tshuntirib berdilar. Hamma Web desinga qiziqiyotkan yoshlarga shu kursni maslahat beraman. Ismoil Safarov Ustozga kottakon raxmat ilimlari bundanam ziyoda bolsin !!! ",
    },
    {
      img: Person17,
      name: "Akbarjon Murodov",
      neeck: "@BarLiv",
      text: "Web design foundation kursida men web design sohasidagi fundamental bilimlarni nafaqat amaliy balki nazariy jihatdan ham yetarlicha egalladim. Umid qilaman bu bilimlar kelgusida Ui/Ux yo'nalishida menga albatta asqotadi in sha Allah.  Ustozdan sizdan Alloh rozi bo'lsin.",
    },
    {
      img: Person18,
      name: "Javohir Saidahmedov",
      neeck: "@Javohir_Saidahmedov",
      text: "Assalomu alaykum 'Web dizayn foundation' kursi juda ham sodda va tushunarli qilib tayyorlangan. Men kursdan juda ko'p dizayn qonun qoidalarini o'rgandim va ularni hozir amalda qo'llayapman. Kursni o'rganishni bemalol boshqalarga ham tavsiya qila olaman. Alloh ustozdan rozi bo'lsin ilmlari ziyoda bo'lsin...",
    },
    {
      img: Person19,
      name: "Mohinur Qo‘ziboyeva",
      neeck: "@designer_mohinur",
      text: "Web design foundation kursi judayam professional ishlab chiqilgan kurs ekan, bu kursdan yangi bilimlarni o'rgandim, ancha foydali bo'ldi, hamma narsani bilaman degan dizaynerlar ham bilmaydigan narsalar bor ekan, alhamdulillah manga judayam yoqdi, barchaga tavsiya qilardim bu kursda o'qishni,  Ustozimiz Ismoil ustozdan Alloh rozi bo'lsin!  ",
    },
    {
      img: Person20,
      name: "Diyora Eshqobilova",
      neeck: "@diyo_ra17",
      text: "Web design foundation kursi juda ham har tomonlama foydali bòldi. Live chatlar orqali har xil foydali ma'lumotlar oldim. Misol uchun mijozlar bn qanday qilib gaplashish, soft skills va hard skillslar haqida, bajargan vazifalarimga har doim feedbacklar oldim. Bergan bilimlaringiz uchun rahmat 👍",
    },
    {
      img: Person21,
      name: "Suxrobjon Xurramov",
      neeck: "@Suxrobjon_Xurramov",
      text: "Alloh boshlagan ishlaringizni rivojini bersin! Socially Design Academyʼda oʻqib, men UX/UI va grafik dizayn boʻyicha bilimlarimni mustahkamladim. Ustozimiz esa har bir oʻquvchiga erinmasdan feedbacklar berishdi. Bir feedbackʼka muzlasam yana bir feedbackʼda oʻsib borayotganimni sezardim. Har bir bergan feedbackʼlari uchun Ustozim Ismoil Safarovga chin koʻngildan rahmat aytib qolaman. Alloh taolo ajr savoblarini koʻpaytirib bersin!",
    },
    {
      img: Person22,
      name: "Abduvali Shomuratov",
      neeck: "@Abduvaliblog",
      text: "Web Design Foundation kursi UI / UX imkoniyatlari va farqlari haqida batafsil maʼlumotlar berildi. ",
      nextText1:
        "Web Dizaynda Minimalistik dizayn qilishda izlanish va qilish jarayonlari ko‘rsatmalar qilingan holda o‘rgatildi.",
      nextText2:
        "G‘oyalrni tartib bilan foydalanish. Kursning asosiy afzallilari tartib bilan  foydalanish va g‘oyalardan to‘g‘ri foydalanish imkoniyatlari maʼqul keldi.",
    },
    {
      img: Person23,
      name: "Omadbek Ergashev",
      neeck: "@omadbek_designer",
      text: "Web design foundation kursi juda mukamal va aniq ma'lumotlar boy kurs boldi men uchun oz mudatda bunday bilimlarga ega bo'laman deb sira oylamagandim. Buning uchun Mentorimiz Ismoil Safarovga katta rahmat aytaman.",
    },
    {
      img: Person24,
      name: "Jahongir Mashrabov",
      neeck: "@JMU001",
      text: "Men hozirda maktab o'quvchisiman va veb dizayn sohasiga qiziqaman. Lekin ijtimoiy tarmoqlar orqali ,,Socially design academy'' online kurslarini topmagunimcha hech qanday bilimga ega emas edim. Shu sababli men noldan o'rgatiluvchi ,,Web design foundation'' kursida bir oy davomida tahsil oldim. Kurs ko'p yillik tajribaga ega bo'lgan UI/UX dizayner ustoz Ismoil Safarov tomonidan tayyorlanadi. Ushbu kursdan keyin men yetarlicha bilimlarga ega bo'ldim. Eng asosiysi kurslarning narxi hamyonbop va ular qiziqarli. Sizlarga ham ushbu kursni tavsiya qilmoqchiman. Sababi kursdan olgan bilimlaringizdan hech ham afsuslanmaysiz!",
    },
    {
      img: Person25,
      name: "Ixlos Matopayev",
      neeck: "@icoo_29",
      text: "Men bu kursdan yuqori darajada konikmalarga ega boldim bu sohaga umuman tushinmasdim qiziqishim yoq edi shu web Foundation  kursdan keyin anchagina Bilim va konikmalarga ega boldim. Rahmat sizga alloh rozi bolsiz Sizdan Uztoz bizga erinmasdan dars tayyorlab orgatganingiz uchun 🤝",
    },
    {
      img: Person26,
      name: "Mohlaroyim Mustafoyeva",
      neeck: "@mustaf1_dm",
      text: "Web Design Foundation kursi nafaqat dizayn sohasini endi boshlovchilar uchun, balki bu sohada malakaga ega mutaxassislar ham ancha foydali ko‘nikmalarga ega bo‘ladi. Bu kursda o‘qish orqali men moliyaviy hamda vaqt samaradorligiga erishdim. Kurs narxi arzon, kontent sifatli. Endilikda Web Design kursining 1-moduliga qabul boshlanishini kutyapman. ",
      nextText1:
        "Kurs tashkilotchisi ustozim Ismoil Safarovga o'z minnatdorchiligimni bildiraman.",
    },
  ];

  // Slider
  const [swiper, setSwiper] = useState(null);
  const [slideWidth, setSlideWidth] = useState(1200);
  const [space, setSpace] = useState(30);

  const nexto = () => {
    swiper.slideNext();
  };

  const prevto = () => {
    swiper.slidePrev();
  };

  useEffect(() => {
    const header = document.getElementsByClassName("section5");
    console.log(header[0].clientWidth);
    if (header[0].clientWidth >= 1200) {
      setSlideWidth((header[0].clientWidth - 1200) / 2 + 1200);
    }
    if (header[0].clientWidth > 300 && header[0].clientWidth < 1200) {
      setSlideWidth(header[0].clientWidth);
    }
  }, []);
  window.addEventListener("resize", () => {
    const header = document.getElementsByClassName("section5");
    if (header[0].clientWidth >= 1200) {
      setSlideWidth((header[0].clientWidth - 1200) / 2 + 1200);
    }
    if (header[0].clientWidth > 300 && header[0].clientWidth < 1200) {
      setSlideWidth(header[0].clientWidth);
    }
  });

  useEffect(() => {
    if (slideWidth >= 300 && slideWidth < 1199) {
      setSpace(20);
    } else if (slideWidth > 1200) {
      setSpace(30);
    }
  });

  return (
    <div className="section8">
      <div className="container">
        <div className="row">
          <div className="main">
            <div className="title">
              <p className="cardTitle">
                Kursni tamomlagan o‘quvchilar fikri qanday?
              </p>
            </div>
            <div className="bigBox">
              <div className={`content ${btn ? "showBtn" : "hideBtn"}`}></div>
              <div className="leftBoxes lFO">
                {cardDataLeft.slice(0, visible).map((item) => (
                  <div className="box1">
                    <div className="line"></div>
                    <div className="top">
                      <div className="imgBox">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="namesBox">
                        <p className="name">{item.name}</p>
                        <span className="neeck">{item.neeck}</span>
                      </div>
                    </div>
                    <div className="bottom">
                      <p className="text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="leftBoxes lFT">
                {cardDataMiddle.slice(0, visible).map((item) => (
                  <div className="box1">
                    <div className="line"></div>
                    <div className="top">
                      <div className="imgBox">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="namesBox">
                        <p className="name">{item.name}</p>
                        <span className="neeck">{item.neeck}</span>
                      </div>
                    </div>
                    <div className="bottom">
                      <p className="text">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="leftBoxes lFtH">
                {cardDataRight.slice(0, visible).map((item) => (
                  <div className="box1">
                    <div className="line"></div>
                    <div className="top">
                      <div className="imgBox">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="namesBox">
                        <p className="name">{item.name}</p>
                        <span className="neeck">{item.neeck}</span>
                      </div>
                    </div>
                    <div className="bottom">
                      {item.text && <p className="text">{item.text}</p>}
                      {item.nextText1 && (
                        <p className="nextText1">{item.nextText1}</p>
                      )}
                      {item.nextText2 && (
                        <p className="nextText2">{item.nextText2}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={showMore}
              className={`btnShow ${btn ? "showBtn" : "hideBtn"}`}
            >
              Ko‘proq fikrlarni o‘qish ↺
            </button>

            {/* Tablet slider show */}
            <div className="titleCards">
              <h3 className="cardTitle">
                Kursni tamomlagan o‘quvchilar fikri qanday?
              </h3>
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

            <div className="slider" style={{ width: `${slideWidth}px` }}>
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
                {data.map((item) => (
                  <SwiperSlide style={{ display: "block" }} key={item.title}>
                    <div className="box1">
                      <div className="line"></div>
                      <div className="top">
                        <div className="imgBox">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="namesBox">
                          <p className="name">{item.name}</p>
                          <span className="neeck">{item.neeck}</span>
                        </div>
                      </div>
                      <div className="bottom">
                        <p className="text">{item.text}</p>
                      </div>
                      <div className="bottom">
                        {item.text && <p className="text">{item.text}</p>}
                        {item.nextText1 && (
                          <p className="nextText1">{item.nextText1}</p>
                        )}
                        {item.nextText2 && (
                          <p className="nextText2">{item.nextText2}</p>
                        )}
                      </div>
                    </div>
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
