import { openModalAuth } from './modal-auth.js';
import { handleThemeToggle } from './dark.js';
import { onLogout } from './firebase-api.js';
import { shoppingListMarkup } from './shopping-list.js';
import { onLogout } from './firebase-api';

const mobileMenu = document.getElementById('modal-mobile');
const openMenuBtn = document.getElementById('open-modal-mobile');
const closeMenuBtn = document.getElementById('close-modal-mobile');
// const containerHeader = document.querySelector('.container-header');
// const headerContainer = document.querySelector('.header-container');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu_link');
// const containerMobile = document.querySelector('.mobile-menu_container')
const signUpButton = document.getElementById('sign-up');
const themeSwitch = document.getElementById('theme-switch');
const shoppingListButton = document.querySelector('.nav-link-shopping');
const logoutButton = document.querySelector('.log-out');
const themeSwitchMenu = document.getElementById('theme-switch-menu');
const navLinks = document.querySelectorAll('.nav-link');

// nav link active header
navLinks.forEach(link => {

  link.addEventListener('click', function(event) {
    // event.preventDefault();


    navLinks.forEach(link => link.classList.remove('active-page-menu'));

    this.classList.add('active-page');
  });
});

// theme switch on mobile menu open
themeSwitchMenu.addEventListener('click', function () {
  darkMode.classList.toggle('active');
  content.classList.toggle('night');
})

// shopping list
shoppingListButton.addEventListener('click',shoppingListMarkup);

// log out
logoutButton.addEventListener('click', onLogout);

// opening mobile menu
openMenuBtn.addEventListener('click', function () {
  mobileMenu.style.display = 'block';
  themeSwitch.disabled = true;
  themeSwitchMenu.disabled = false;
});

// // menu smooth drop
// function toggleMenu() {
//   mobileMenu.classList.toggle('hidden');

//   if (mobileMenu.classList.contains('hidden')) {
//     mobileMenu.style.transform = 'translateY(100%)';
//   } else {
//     mobileMenu.style.transform = 'translateY(0)';
//   }
// }

// openMenuBtn.addEventListener('click', toggleMenu);

// disabling scroll
function lockScroll() {
  document.body.classList.add('lock');
}

openMenuBtn.addEventListener('click', lockScroll);

// closing mobile menu
closeMenuBtn.addEventListener('click', function () {
  mobileMenu.style.display = 'none';
  themeSwitch.disabled = false;
  themeSwitchMenu.disabled = true;
});

// activating scroll
function unLockScroll() {
  document.body.classList.remove('lock');
}

closeMenuBtn.addEventListener('click', unLockScroll);

// opening modal authentication
signUpButton.addEventListener('click', openModalAuth);

// theme switch
themeSwitch.addEventListener('change', handleThemeToggle);

// logging in mobile menu
logoutButton.addEventListener('click', function () {
  const logoutButton = document.querySelector('.log-out');
  logoutButton.classList.add('hidden');

  const loginButton = document.querySelector('.log-in');
  loginButton.classList.remove('hidden');
  loginButton.addEventListener('click', toggleMenu);
  onLogout();
});


// sign-in button update
export function updateSignInButton(username) {
  const signInButton = document.getElementById('sign-up');
  signInButton.textContent = `${username}`;
}

export function resetSignInButton() {
  const signInButton = document.getElementById('sign-up');
  signInButton.textContent = 'Sign In';
}




