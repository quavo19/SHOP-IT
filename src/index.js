import './style.css';
// eslint-disable-next-line import/no-named-as-default-member, import/no-named-as-default
import signup from './modules/signup.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import loginPage from './modules/login.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import Eye from './modules/pasword.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import homePage from './modules/home.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import smallSlide from './modules/small-slider.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import cartBox from './modules/cart.js';

const Account = document.querySelector('.item_user');
const UI = document.querySelector('.content');

Account.addEventListener('click', () => {
  UI.innerHTML = loginPage;
  Eye();
  const signupbtn = document.querySelector('.login-title p');
  signupbtn.addEventListener('click', () => {
    UI.innerHTML = signup;
    Eye();
  });
});

smallSlide();
homePage();
cartBox();