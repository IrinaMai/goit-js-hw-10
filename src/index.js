import './styles.css';
import './index.html';

import menuJson from './json/menu.json';
import template from './template/markup.hbs';

// console.log(template);
    

const refs = {
    body: document.querySelector('body'),
    themeSwitchToggle: document.querySelector('.theme-switch__toggle'),
    jsMenu: document.querySelector('.js-menu'),
};

// ===================THEME CHANGE=====================================
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const changeOnBody = () => {
    if (localStorage.getItem('theme')) {
        refs.body.classList.add(localStorage.getItem('theme'))
    };
    if (refs.body.classList.contains(Theme.DARK)) {
        refs.themeSwitchToggle.checked = true;
    }
};

const darkThemeOn = () => {
    if (refs.body.classList.contains(Theme.LIGHT)) {
        refs.body.classList.remove(Theme.LIGHT);
    }
    localStorage.setItem('theme', Theme.DARK)
    changeOnBody();
};

const lightThemeOn = () => {
    if (refs.body.classList.contains(Theme.DARK)) {
        refs.body.classList.remove(Theme.DARK);
    };
    console.log(refs.themeSwitchToggle.checked);
    localStorage.setItem('theme', Theme.LIGHT);
    changeOnBody();
};

const handlThemeChange = (event) => {
    if (event.currentTarget.checked) {
        darkThemeOn();
    };
    if (!event.currentTarget.checked) {
        lightThemeOn();
    };
};




refs.themeSwitchToggle.addEventListener('change', handlThemeChange);
window.addEventListener('DOMContentLoaded', changeOnBody);
// =================================================================

// ==============MARKUP==============================================



refs.jsMenu.innerHTML = template(menuJson);
