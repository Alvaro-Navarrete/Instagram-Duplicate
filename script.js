const menu = document.querySelector('.menu');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper');

menu.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

wrapper.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});