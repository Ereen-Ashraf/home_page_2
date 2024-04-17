const open_menu = document.getElementsByClassName("icon_img")[0];
const close_menu = document.getElementsByClassName("close_menu")[0];
const menu = document.getElementsByClassName("drop_menu")[0];

open_menu.addEventListener('click', ()=> {
    menu.style.display = "block";
    menu.style.top = '0';
});

close_menu.addEventListener('click', ()=> {
    menu.style.display = "none";
    menu.style.top = '-100%';
});

