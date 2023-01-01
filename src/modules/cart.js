const cartBox = () => {
  const product = [
    {
      id: 0,
      image: 'img/13pm.png',
      title: 'IPone 13 pro max',
      price: 120,
    },
    {
      id: 1,
      image: 'img/13.png',
      title: 'IPone 13 pro max',
      price: 150,
    },
    {
      id: 2,
      image: 'img/15.jpg',
      title: 'IPone 13 pro max',
      price: 200,
    },
    {
      id: 3,
      image: 'img/ipone13.png',
      title: 'IPone 13 pro max',
      price: 500,
    },
  ];
  const categories = [...new Set(product.map((item) => item))];
  let i = 0;
  document.querySelector('.root').innerHTML = categories.map((item) => {
    const { image, title, price, id } = item;
    return (
      `<div class = 'box'>
              <div class = 'image-box-2'>
                  <img class='images' src=${image}></img>
              </div>
          <div class = 'bottom'>
          <p>${title}</p>
          <h2>${price}.00</h2>
          <buttom class = "cart-button" id = "${id}">Add To Cart </button>
          </div>
          </div>`
    );
  }).join('');
  const cart = [];

  function displaycart(a) {
    let j = 0;
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
            <i class='fa-solid fa-trash' onclick='delElement(${j++})'>delete</i></div>
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