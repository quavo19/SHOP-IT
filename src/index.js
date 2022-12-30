import './style.css';
// eslint-disable-next-line import/no-named-as-default-member, import/no-named-as-default
import signup from './modules/signup.js';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import loginPage from './modules/login.js';

const slideimg1 = '<img src="img/13.png" alt="popUp-Item">';
const slideimg2 = '<img src="img/ipone13.png" alt="popUp-Item">';
const slideimg3 = '<img src="img/13pm.png" class="slide3" alt="popUp-Item">';
const sec = document.querySelector('.first-sec');
const imageContent1 = document.querySelector('.slide1');
const imageContent2 = document.querySelector('.slide2');
const imageContent3 = document.querySelector('.slide3');
const imgBox = document.querySelector('.img-box');
const Account = document.querySelector('.item_user');
const UI = document.querySelector('.content');

Account.addEventListener('click', () => {
  UI.innerHTML = loginPage;
  const signupbtn = document.querySelector('.login-title p');
  signupbtn.addEventListener('click', () => {
    UI.innerHTML = signup;
  });
});
imageContent1.addEventListener('click', () => {
  imgBox.innerHTML = slideimg1;
  sec.style.background = '#5a7894';
});
imageContent2.addEventListener('click', () => {
  imgBox.innerHTML = slideimg2;
  sec.style.background = '#1c3e5e';
});
imageContent3.addEventListener('click', () => {
  imgBox.innerHTML = slideimg3;
  sec.style.background = '#0062be';
});

// let state = false;
// const eye = document.querySelector('.eye');
// const eyeid = document.querySelector('#eye');
// eye.addEventListener('click', () => {
//   if (state) {
//     document.getElementById('password').setAttribute('type', 'password');
//     state = false;
//     eyeid.style.color = '#7a797e';
//   } else {
//     document.getElementById('password').setAttribute('type', 'text');
//     state = true;
//     eyeid.style.color = '#5887ef';
//   }
// });