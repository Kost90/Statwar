// import  {dataInfo}  from "./data";

const dataEnglish = {
  about_us: "About us",
  donate: "Donate",
  forecast: "Forecast of Russian losses for the next 12 months",
  forecastP:
    "*The forecast is developed on the basis of the statistics of the General Staff of the Armed Forces of Ukraine for the last 5 weeks",
  alive: "Still alive",
  dead: "Dead",
  wounded: "Severaly wounded",
  totalnumber: "The total number of",
  popupPfirst:
    '*Data on the total number of Russian military equipment are taken from open sources "name" and include: preserved in warehouses, including weapons, etc.',
  popupPsecond:
    '**Data on the number of military assets that were in service with the Russian Armed Forces at the beginning of the full-scale invasion are taken from the "name"',
  soldiersRus: "Personnel units",
  monthstatistic: "Monthly statistics",
  dataHeadoffice:
    "*On the basis of the statistics of the General Staff of the Armed Forces of Ukraine",
  groundtarget: "Ground targets",
  weekstatistic: "Weekly statistics",
  dataheadofficeweeks:
    "*On the basis of the statistics of the General Staff of the Armed Forces of Ukraine for the last 12 weeks",
  aviation: "UAV systems",
  ourproject:
    'Our project "StatsWar" was created so that all the scales of the catastrophe called "Russian war of occupation 2022" against the people of Ukraine would be recorded FOREVER.',
  statdata:
    "Statistics, data, analytics and forecasting on our resource are somewhat unique. Our team aims to process the maximum number of important statistics and make the most understandable analysis of this war for the average user.",
  updates:
    "In further updates of the resource, data and statistics about this war will be expanded and lighten necessarily.",
  support: "Support the project here",
  contacts: "Contacts",
  email: "statswar@gmail.com",
  tanks: "Tanks",
  armmachines: "AFVehicles",
  artilery: "Artillery systems",
  rszo: "MLRS",
  planes: "Fighter planes",
  helicopters: "Helicopters",
  PPO: "ATGM/SRBM systems",
  rockets: "Cruise missiles",
  autotechnicks: "Automotive equip",
  specialtech: "Special military equip",
};

const dataUkraine = {
  about_us: "Про нас",
  donate: "Задонатити",
  forecast: "Прогноз втрат рф на наступні 12 місяців",
  forecastP:
    "*Прогноз розроблений на основі статистики останніх 5 тижнів Генштабу ЗСУ",
  alive: "Живі",
  dead: "Мертві",
  wounded: "Важко поранені",
  totalnumber: "Загальна кількість",
  popupPfirst:
    "*Дані загальної кількості військових засобів рф взяті з відкритих джерел “назва” та включають в себе: законсервовані на складах, включно на озброєнні, тощо.",
  popupPsecond:
    "**Дані кількості військових засобів, які перебували на озброєнні ЗС рф на початок повномаcштабного вторгнення взято з “назва”",
  soldiersRus: "Військові РФ",
  monthstatistic: "Помісячна статистика",
  dataHeadoffice: "*На основі даних статистики Генштабу ЗСУ",
  groundtarget: "Наземні цілі",
  weekstatistic: "Тижнева статистика",
  dataheadofficeweeks:
    "*На основі даних статистики Генштабу ЗСУ за останні 12 тижні",
  aviation: "Авіація, БПЛА, ракети",
  ourproject:
    ' Наш проект "StatsWar" створений, щоб всі катастрофи під назвою "російська окупаційна війна 2022" проти народу України були зафіксовані НАЗАВЖДИ.',
  statdata:
    "Статистика, дані, аналітика та прогнозування на нашому ресурсі є в дечому унікальні. Наша команда має за мету опрацювати максимальну кількість важливої статистики та зробити максимально зрозумілий аналіз цієї війни для Вас.",
  updates:
    "В Подальших оновленнях ресурсу дані та статистика про цю війну будуть розширюватись.",
  support: "Підтримати проект тут",
  contacts: "Контакти:",
  email: "statswar@gmail.com",
  tanks: "Танки",
  armmachines: "ББМашини",
  artilery: "Артилерія",
  rszo: "РСЗВ",
  planes: "Бойові літаки",
  helicopters: "Гелікоптери",
  PPO: "ППО/ЗРК",
  rockets: "Крилаті ракети",
  autotechnicks: "Автомобільна техніка",
  specialtech: "Спецтехніка",
};

const btnEn = document.getElementById("En");
const btnUa = document.getElementById("Ua");

const aboutusEl = document.querySelectorAll(".about_us");
const donateEl = document.querySelectorAll(".donate");
const forecastEl = document.querySelectorAll(".forecast");
const forecastPEl = document.querySelectorAll(".forecastP");
const aliveEl = document.querySelectorAll(".alive");
const deadEl = document.querySelectorAll(".dead");
const woundedEl = document.querySelectorAll(".wounded");
const totalnumberEl = document.querySelectorAll(".totalnumber");
const popupPfirstEl = document.querySelectorAll(".popupPfirst");
const popupPsecondEl = document.querySelectorAll(".popupPsecond");
const soldiersRusEl = document.querySelectorAll(".soldiersRus");
const monthstatisticEl = document.querySelectorAll(".monthstatistic");
const dataHeadofficeEl = document.querySelectorAll(".dataHeadoffice");
const groundtargetEl = document.querySelectorAll(".groundtarget");
const weekstatisticEl = document.querySelectorAll(".weekstatistic");
const dataheadofficeweeksEl = document.querySelectorAll(".dataheadofficeweeks");
const aviationEl = document.querySelectorAll(".aviation");
const ourprojectEl = document.querySelectorAll(".ourproject");
const statdataEl = document.querySelectorAll(".statdata");
const updatesEl = document.querySelectorAll(".updates");
const contactsEl = document.querySelectorAll(".contacts");
const emailEl = document.querySelectorAll(".email");
const tanksEl = document.querySelectorAll(".tanks");
const armmachinesEl = document.querySelectorAll(".armmachines");
const artileryEl = document.querySelectorAll(".artilery");
const rszoEl = document.querySelectorAll(".rszo");
const planesEl = document.querySelectorAll(".planes");
const helicoptersEl = document.querySelectorAll(".helicopters");
const PPOEl = document.querySelectorAll(".PPO");
const rocketsEl = document.querySelectorAll(".rockets");
const autotechnicksEl = document.querySelectorAll(".autotechnicks");
const specialtechEl = document.querySelectorAll(".specialtech");
const supportEl = document.querySelectorAll(".support");

aboutusEl.forEach((e) => {
  console.log(e.className);
});

const domArr = [
  aboutusEl,
  donateEl,
  forecastEl,
  forecastPEl,
  aliveEl,
  deadEl,
  woundedEl,
  totalnumberEl,
  popupPfirstEl,
  popupPsecondEl,
  soldiersRusEl,
  monthstatisticEl,
  dataHeadofficeEl,
  groundtargetEl,
  weekstatisticEl,
  dataheadofficeweeksEl,
  aviationEl,
  ourprojectEl,
  statdataEl,
  updatesEl,
  contactsEl,
  emailEl,
  tanksEl,
  armmachinesEl,
  artileryEl,
  rszoEl,
  planesEl,
  helicoptersEl,
  PPOEl,
  rocketsEl,
  autotechnicksEl,
  specialtechEl,
  supportEl,
];

btnEn.addEventListener("click", (e) => {
  btnUa.classList.remove("active");
  btnEn.classList.add("active");
  domArr.forEach((e) => {
    e.forEach((element) => {
      for (const [key, value] of Object.entries(dataEnglish)) {
        if (element.className === key) {
          element.textContent = value;
        }
      }
    });
  });
});

btnUa.addEventListener("click", (e) => {
  btnEn.classList.remove("active");
  btnUa.classList.add("active");
  domArr.forEach((e) => {
    e.forEach((element) => {
      for (const [key, value] of Object.entries(dataUkraine)) {
        if (element.className === key) {
          element.textContent = value;
        }
      }
    });
  });
});
