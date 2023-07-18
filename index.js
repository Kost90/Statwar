const wrapper = document.querySelector('#wrapper_header')
const hamburgerOpenBtn = document.querySelector('#hamburder_menu_open_btn');
const div = document.createElement('div');
const p = document.createElement('p');
const statisticContainer = document.querySelector('statistic_container');
const sideMenu = document.querySelector('#side_menu');
const canvas = document.querySelector('#ellips');
const defaultValue = 'Soldier';
let currentValue = defaultValue;

function OpenHamburgermenu (){
    if(div.classList.contains('menu')){
        p.remove();
        div.classList.remove('menu');
        div.remove()
        hamburgerOpenBtn.classList.toggle('hamburder_menu_close_btn');
        document.body.classList.toggle('body_hamburger_open');
    }else{
        div.classList.add('menu');
        p.textContent = 'Упс, це меню ще очікує наповнення.'
        div.appendChild(p);
        wrapper.appendChild(div);
        hamburgerOpenBtn.classList.toggle('hamburder_menu_close_btn');
        document.body.classList.toggle('body_hamburger_open');
    }
};

hamburgerOpenBtn.addEventListener('click', OpenHamburgermenu)

function handelClick (e){
const value = e.currentTarget.getAttribute('data-value');
if(value === currentValue){
    return;
}
if(value){
    currentValue = value;
    drowContent(value);
} else{
    // throw
}

}

for (const child of sideMenu.children) {
    console.log(child.tagName);
    child.addEventListener('click', getLi)
  }

  function drowContent(value){
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        // drawing code here
      } else {
        // canvas-unsupported code here
      }
  }

  drowContent(defaultValue);