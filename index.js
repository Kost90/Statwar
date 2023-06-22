const wrapper = document.querySelector('#wrapper_header')
const hamburgerOpenBtn = document.querySelector('#hamburder_menu_open_btn');
const div = document.createElement('div');
const p = document.createElement('p');
const statisticContainer = document.querySelector('statistic_container');
const sideMenu = document.querySelector('#side_menu');

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
