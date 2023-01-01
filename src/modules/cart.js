const cartBox = () => {
  const product = [
    {
      id: 0,
      image: 'img/13pm.png',
      title: 'IPone 13 pro max',
      price: 120,
      space: 256,
      color: ['#82aed2', 'Ash'],
    },
    {
      id: 1,
      image: 'img/13.png',
      title: 'IPone 13 pro max',
      price: 150,
      space: 512,
      color: ['#e7dfdf', 'gray'],
    },
    {
      id: 2,
      image: 'img/15.jpg',
      title: 'IPone 13 pro max',
      price: 200,
      space: 64,
      color: ['#366431', 'green'],
    },
    {
      id: 3,
      image: 'img/ipone13.png',
      title: 'IPone 13 pro max',
      price: 500,
      space: 128,
      color: ['#3b81ba', 'blue'],
    },
    {
      id: 4,
      image: 'img/13pm.png',
      title: 'IPone 13 pro max',
      price: 120,
      space: 256,
      color: ['#82aed2', 'Ash'],
    },
    {
      id: 5,
      image: 'img/13.png',
      title: 'IPone 13 pro max',
      price: 150,
      space: 512,
      color: ['#e7dfdf', 'gray'],
    },
    {
      id: 6,
      image: 'img/15.jpg',
      title: 'IPone 13 pro max',
      price: 200,
      space: 64,
      color: ['#366431', 'green'],
    },
    {
      id: 7,
      image: 'img/ipone13.png',
      title: 'IPone 13 pro max',
      price: 500,
      space: 128,
      color: ['#3b81ba', 'blue'],
    },
  ];
  const categories = [...new Set(product.map((item) => item))];
  document.querySelector('.root').innerHTML = categories.map((item) => {
    const {
      image, title, price, id, color, space,
    } = item;
    return (
      `<div class = 'box'>
      <div class="image-des">
        <div class = 'image-box-2'>
          <img class='images' src=${image}></img>
        </div>
        <div class="description-cart">
            <div>
                <h5>${title}</h5>
                <p>${space}Gib <br> no faults, everything works fine</p>
            </div>
            <div class = "color-price">
                <p style="background:${color[0]}">${color[1]}</p>
                <h4>Ghc${price}</h4>
            </div>
        </div>
      </div>
      <div class = 'bottom'>
          <buttom class = "cart-button" id = "${id}">Add To Cart </button>
      </div>
  </div>`
    );
  }).join('');
  const cart = [];

  function displaycart() {
    if (cart.length === 0) {
      document.querySelector('.cartItem').innerHTML = 'your cart is empty';
    } else {
      document.querySelector('.cartItem').innerHTML = cart.map((items) => {
        const { image, title, price } = items;
        return (
          `<div class="cart-item">
            <div class = "row-img">
                <img class = "rowing" src=${image}>
            </div>
            <p style="font-size: 12px;">${title}</p>
            <h2 style="font-size: 15px;">${price}.00</h2>
            <i class='fa-solid fa-trash'>delete</i></div>
            `
        );
      }).join('');
    }
  }
  const count = document.querySelector('.cart-item');
  const Add = document.querySelectorAll('.cart-button');
  Add.forEach((item) => {
    item.addEventListener('click', () => {
      const index = item.id;
      cart.push({ ...categories[index] });
      displaycart();
      const cartItems = cart.length;
      count.innerHTML = cartItems;
    });
  });
//     cart.push({ ...categories[a] });
//     displaycart();
};

export default cartBox;