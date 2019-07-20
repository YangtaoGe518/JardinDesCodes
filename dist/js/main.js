// select the document object model items (from html)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

const wechatBtn = document.querySelector('.wechatIcon');
const wechat = document.querySelector('.wechat');
const wechatScreen = document.querySelector('.wechat-screen');

// init state for menu -- false
let showMenu = false;
let showWechat = false;

// listener
menuBtn.addEventListener('click', toggleMenu);
wechatBtn.addEventListener('click', toggleWechat);

/* we try to manipulate by adding tags to the class name in html*/
function toggleMenu() {
    if (!showMenu && !showWechat) {
        menuBtn.classList.add('close-menu');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        //loop through the whole nav list 
        navItems.forEach(item => item.classList.add('show')
        );
        //reset the menu state
        showMenu = true;
    } 
    else if(!showMenu && showWechat){
        menuBtn.classList.remove('close-wechat');
        wechat.classList.remove('show');
        wechatScreen.classList.remove('show');

        showWechat = false;
    }
    else {
        menuBtn.classList.remove('close-menu');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        //loop through the whole nav list 
        navItems.forEach(item => item.classList.remove('show')
        );
        //reset the menu state
        showMenu = false;
    }
}

function toggleWechat() {
    if (!showWechat) {
        menuBtn.classList.add('close-wechat');
        wechat.classList.add('show');
        wechatScreen.classList.add('show');

        showWechat = true;
    }
}