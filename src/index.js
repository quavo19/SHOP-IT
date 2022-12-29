import './style.css';

const slideimg1 = `<img src="img/13.png" alt="popUp-Item">`
const slideimg2 = `<img src="img/ipone13.png" alt="popUp-Item">`
const slideimg3 = `<img src="img/ipone12.png" alt="popUp-Item">`
const sec = document.querySelector('.first-sec')
const imageContent1 = document.querySelector('.slide1')
const imageContent2 = document.querySelector('.slide2')
const imageContent3 = document.querySelector('.slide3')
const imgBox = document.querySelector('.imgBox');

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
    sec.style.background = '#22272c';
});
