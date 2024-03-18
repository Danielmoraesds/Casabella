var openMenu = document.getElementById('openMenu'); 
var closeMenu = document.getElementById('closeMenu'); 
var menu = document.getElementById('menu'); 

openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    menu.style.left = '0';
    openMenu.style.display = 'none';
    setTimeout(() => {
        menu.style.opacity = '1';
        closeMenu.style.display = 'block'; 
    }, 10);
});

closeMenu.addEventListener('click', () => {
    menu.style.opacity = '0';
    menu.style.left = (menu.offsetWidth * -1) + 'px';
    setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.style.display = 'block'; 
        closeMenu.style.display = 'none'; 
    }, 200);
});