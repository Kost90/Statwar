const wrapper = document.querySelector("#wrapper_header");
const hamburgerOpenBtn = document.querySelector("#hamburder_menu_open_btn");
const div = document.createElement("div");
const p = document.createElement("p");
const sideMenu = document.querySelector("#side_menu");
const canvas = document.querySelector("#ellips");
const defaultValue = "Soldier";
let currentValue = defaultValue;
const parentTag = [];
const btnArrow = document.querySelector("#btn_arrow");

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

for (const child of sideMenu.children) {
  const Li = child;
  if (child.tagName === "LI") {
    parentTag.push(Li);
    child.addEventListener("click", (e) => {
      parentTag.forEach((element) => {
        if (element.classList.contains("active")) {
          element.classList.remove("active");
        }
        element.classList.remove("show");
        btnArrow.classList.remove("btn_transform");
        sideMenu.classList.remove("direction_column");
        sideMenu.classList.add("direction_row");
      });
      Li.classList.add("active");
      handelClick(e);
    });
  }
}

function showMenuLi() {
  parentTag.forEach((element) => {
    element.classList.toggle("show");
  });
  sideMenu.classList.toggle("direction_column");
  sideMenu.classList.toggle("direction_row");
  btnArrow.classList.toggle("btn_transform");
}

btnArrow.addEventListener("click", showMenuLi);

function drowContent(value) {
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    // drawing code here
  } else {
    // canvas-unsupported code here
  }
}

// drowContent(defaultValue);
