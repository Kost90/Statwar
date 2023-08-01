const wrapper = document.querySelector("#wrapper_header");
const hamburgerOpenBtn = document.querySelector("#hamburder_menu_open_btn");
const div = document.createElement("div");
const p = document.createElement("p");
const statisticContainerYear = document.querySelector("#static_ellips_year");
const statisticContainerMonth = document.querySelector("#static_ellips_month");
const statisticContainerWeek = document.querySelector("#static_ellips_week");
const sideMenu = document.querySelector("#side_menu");
const sideMenuSec2 = document.querySelector("#side_menu_sec2");
const sideMenuSec3 = document.querySelector("#side_menu_sec3");
const parentTagSec1 = [];
const parentTagSec2 = [];
const parentTagSec3 = [];
const canvas = document.querySelector("#ellips");
const defaultValue = "Soldier";
let currentValue = defaultValue;
const btnArrow = document.querySelector("#btn_arrow");
const btnArrowSec2 = document.querySelector("#btn_arrow_sec2");
const btnArrowSec3 = document.querySelector("#btn_arrow_sec3");

// ============================= PopUP=====================================
const popUp = document.createElement("div");
const textcontr = document.createElement("div");
const PopUpH = document.createElement("h2");
const closeImg = document.createElement("img");
closeImg.setAttribute('src', './styles/images/Close_btn.png')
const closePopupBtn = document.createElement("button");
closePopupBtn.setAttribute('type','button');
const popUpDivContainer = document.createElement("div");
popUpDivContainer.classList.add('flexPopup')
PopUpH.textContent = "Загальна кількість";
const PopupText1 = document.createElement("p");
const PopupText2 = document.createElement("p");
textcontr.classList.add("popuptext");
PopupText1.textContent =
  `*Дані загальної кількості військових засобів рф взяті з відкритих джерел “назва” та включають в себе: законсервовані на складах, включно на озброєнні, тощо.`;
PopupText2.textContent = '**Дані кількості військових засобів, які перебували на озброєнні ЗС рф на початок повномаcштабного вторгнення взято з “назва”';

function OpenPopup(e) {
    popUp.classList.add("popup");
    closePopupBtn.appendChild(closeImg);
    popUpDivContainer.appendChild(PopUpH);
    popUpDivContainer.appendChild(closePopupBtn);
    textcontr.appendChild(PopupText1);
    textcontr.appendChild(PopupText2);
    popUp.appendChild(popUpDivContainer);
    popUp.appendChild(textcontr);
    e.appendChild(popUp);
}

closePopupBtn.addEventListener('click', (e) => {
  e.stopPropagation();
    popUp.classList.remove("popup");
    popUp.remove();
    popUpDivContainer.remove();
    textcontr.remove();
    PopUpH.remove();
    PopupText1.remove();
    PopupText2.remove();
    closeImg.remove();
    closePopupBtn.remove();
});

statisticContainerMonth.addEventListener("click", (e) => {
  const element = e.currentTarget;
  const closest = element.closest("div");
  console.log(closest);
  OpenPopup(closest);
});

statisticContainerYear.addEventListener("click", (e) => {
  const element = e.currentTarget;
  const closest = element.closest("div");
  console.log(closest);
  OpenPopup(closest);
});

statisticContainerWeek.addEventListener("click", (e) => {
  const element = e.currentTarget;
  const closest = element.closest("div");
  console.log(closest);
  OpenPopup(closest);
});
// =================================================================================

function OpenHamburgermenu() {
  if (div.classList.contains("menu")) {
    p.remove();
    div.classList.remove("menu");
    div.remove();
    hamburgerOpenBtn.classList.toggle("hamburder_menu_close_btn");
    document.body.classList.toggle("body_hamburger_open");
  } else {
    div.classList.add("menu");
    p.textContent = "Упс, це меню ще очікує наповнення.";
    div.appendChild(p);
    wrapper.appendChild(div);
    hamburgerOpenBtn.classList.toggle("hamburder_menu_close_btn");
    document.body.classList.toggle("body_hamburger_open");
  }
}

hamburgerOpenBtn.addEventListener("click", OpenHamburgermenu);


function handelClick(e) {
  const value = e.currentTarget.getAttribute("data-value");
  console.log(value);
  if (value === currentValue) {
    return;
  }
  if (value) {
    currentValue = value;
    // drowContent(value);
  } else {
    // throw
  }
}

function dropDownMenuShow(menu, array, button) {
  for (const child of menu.children) {
    const Li = child;
    if (child.tagName === "LI") {
      array.push(Li);
      child.addEventListener("click", (e) => {
        array.forEach((element) => {
          if (element.classList.contains("active")) {
            element.classList.remove("active");
          }
          element.classList.remove("show");
          button.classList.remove("btn_transform");
          menu.classList.remove("direction_column");
          menu.classList.add("direction_row");
        });
        Li.classList.add("active");
        handelClick(e);
      });
    }
  }
}

dropDownMenuShow(sideMenu, parentTagSec1, btnArrow);
dropDownMenuShow(sideMenuSec2, parentTagSec2, btnArrowSec2);
dropDownMenuShow(sideMenuSec3, parentTagSec3, btnArrowSec3);

function showMenuLi(arrya, menu, button) {
  console.log(menu);
  arrya.forEach((element) => {
    element.classList.toggle("show");
  });
  menu.classList.toggle("direction_column");
  menu.classList.toggle("direction_row");
  button.classList.toggle("btn_transform");
}

btnArrow.addEventListener("click", () => {
  showMenuLi(parentTagSec1, sideMenu, btnArrow);
});
btnArrowSec2.addEventListener("click", () => {
  showMenuLi(parentTagSec2, sideMenuSec2, btnArrowSec2);
});
btnArrowSec3.addEventListener("click", () => {
  showMenuLi(parentTagSec3, sideMenuSec3, btnArrowSec3);
});

function drowContent(value) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // drawing code here
  } else {
    // canvas-unsupported code here
  }
}

// drowContent(defaultValue);
