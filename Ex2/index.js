/*
    Задание 2:

    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const select_content = document.querySelectorAll('.select-content');
const contents = document.getElementById('changeWindow');

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

const changeTab = el => {
    for(let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
    }
    el.classList.add('active');
}


tabs.addEventListener('click', e => {
    const currTable = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === currTable) {
            content[i].classList.add('active');
        }
    }
})

contents.addEventListener('click', e => {
    const table = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++) {
        content[i].classList.remove('active');
        if (content[i].dataset.content === table) {
            content[i].classList.add('active');
            tabs.children[i].classList.add('active');
        }
    }
})
