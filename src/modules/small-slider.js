const smallSlide = () => {
  const slideimg1 = '<img src="img/13.png" alt="popUp-Item">';
  const slideimg2 = '<img src="img/ipone13.png" alt="popUp-Item">';
  const slideimg3 = '<img src="img/13pm.png" class="slide3" alt="popUp-Item">';
  const sec = document.querySelector('.first-sec');
  const navBar = document.querySelector('.nav-bar');
  const imageContent1 = document.querySelector('.slide1');
  const imageContent2 = document.querySelector('.slide2');
  const imageContent3 = document.querySelector('.slide3');
  const imgBox = document.querySelector('.img-box');

  imageContent1.addEventListener('click', () => {
    imgBox.innerHTML = slideimg1;
    sec.style.background = '#5a7894';
    navBar.style.background = '#5a7894';
  });
  imageContent2.addEventListener('click', () => {
    imgBox.innerHTML = slideimg2;
    sec.style.background = '#1c3e5e';
    navBar.style.background = '#1c3e5e';
  });
  imageContent3.addEventListener('click', () => {
    imgBox.innerHTML = slideimg3;
    sec.style.background = '#0062be';
    navBar.style.background = '#0062be';
  });
};

export default smallSlide;