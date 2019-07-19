// select the document object model items (from html)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('nav-item');

// init state for menu -- false
let showMenu = false;

// listener
menuBtn.addEventListener('click', toggleMenu);

/* we try to manipulate by adding tags to the class name in html*/
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        
        //loop through the whole nav list 
        navItems.forEach(element => {element.classList.add('show')
        });
        //reset the menu state
        showMenu = true;
    } else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        
        //loop through the whole nav list 
        navItems.forEach(element => {element.classList.remove('show')
        });
        //reset the menu state
        showMenu = false;
    }
}