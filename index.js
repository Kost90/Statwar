const wrapper = document.querySelector("#wrapper_header");
const hamburgerOpenBtn = document.querySelector("#hamburder_menu_open_btn");
const div = document.createElement("div");
const p = document.createElement("p");
const sideMenu = document.querySelector("#side_menu");
const sideMenuSec2 = document.querySelector("#side_menu_sec2");
const parentTagSec1 = [];
const parentTagSec2 = [];
const canvas = document.querySelector("#ellips");
const defaultValue = "Soldier";
let currentValue = defaultValue;
const btnArrow = document.querySelector("#btn_arrow");
const btnArrowSec2 = document.querySelector("#btn_arrow_sec2");

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

function showMenuLi(arrya,menu,button) {
  console.log(menu);
  arrya.forEach((element) => {
    element.classList.toggle("show");
  });
  menu.classList.toggle("direction_column");
  menu.classList.toggle("direction_row");
  button.classList.toggle("btn_transform");
}

btnArrow.addEventListener("click", () => {
  showMenuLi(parentTagSec1,sideMenu,btnArrow);
});
btnArrowSec2.addEventListener("click", () => {
  showMenuLi(parentTagSec2,sideMenuSec2,btnArrowSec2);
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
