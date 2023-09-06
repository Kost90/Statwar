
const statisticContainerYear = document.querySelector("#static_ellips_year");
const statisticContainerMonth = document.querySelector("#static_ellips_month");
const statisticContainerWeek = document.querySelector("#static_ellips_week");

// ============================= PopUP=====================================
const PopSec1 = document.querySelector("#popup_sec1");
const PopSec2 = document.querySelector("#popup_sec2");
const PopSec3 = document.querySelector("#popup_sec3");
const closePopupBtnSec1 = document.querySelector("#close_popup");
const closePopupBtnSec2 = document.querySelector("#close_popup_sec2");
const closePopupBtnSec3 = document.querySelector("#close_popup_sec3");

closePopupBtnSec1.addEventListener("click", (e) => {
  PopSec1.classList.remove("show_popup");
  document.body.classList.remove("body_shadow");
});

closePopupBtnSec2.addEventListener("click", (e) => {
  PopSec2.classList.remove("show_popup");
  document.body.classList.remove("body_shadow");
});

closePopupBtnSec3.addEventListener("click", (e) => {
  PopSec3.classList.remove("show_popup");
  document.body.classList.remove("body_shadow");
});

statisticContainerMonth.addEventListener("click", (e) => {
  PopSec2.classList.add("show_popup");
  document.body.classList.add("body_shadow");
});

statisticContainerYear.addEventListener("click", (e) => {
  PopSec1.classList.add("show_popup");
  document.body.classList.add("body_shadow");
});

statisticContainerWeek.addEventListener("click", (e) => {
  PopSec3.classList.add("show_popup");
  document.body.classList.add("body_shadow");
});
// =================================================================================

// =========================For canvas==========================================================
const canvas = document.querySelector("#ellips");
const defaultValue = "Soldier";
let currentValue = defaultValue;

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

function drowContent(value) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // drawing code here
  } else {
    // canvas-unsupported code here
  }
}

// drowContent(defaultValue);

// ====================================================================

// ================= Dropdown and side menu=======================
const sideMenu = document.querySelector("#side_menu");
const sideMenuSec2 = document.querySelector("#side_menu_sec2");
const sideMenuSec3 = document.querySelector("#side_menu_sec3");
const parentTagSec1 = [];
const parentTagSec2 = [];
const parentTagSec3 = [];
const btnArrow = document.querySelector("#btn_arrow");
const btnArrowSec2 = document.querySelector("#btn_arrow_sec2");
const btnArrowSec3 = document.querySelector("#btn_arrow_sec3");

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

