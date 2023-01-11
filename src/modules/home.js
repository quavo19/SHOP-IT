// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import smallSlide from './small-slider.js';

const homePage = () => {
  const home = `
<div class="text-box">
                <h2>
                    That's What <br> <Span>i like</Span>
                </h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Ratione id non ut, quod eaque sed amet placeat inventore odit eius
                     hic alias saepe omnis dignissimos harum nobis laudantium debitis libero.
                </p>
                <a href="#">View All</a>
            </div>
            <div class="img-box">
                <img src="img/13pm.png" class="pepsi" alt="coverimage">
            </div> `;
  const homeUI = document.querySelector('.content');
  const homeContent = document.querySelector('.Home');

  homeContent.addEventListener('click', () => {
    homeUI.innerHTML = home;
    smallSlide();
  });
};

export default homePage;