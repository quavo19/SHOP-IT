const Eye = () => {
  let state = false;
  const eye = document.querySelector('.eye');
  const eyeid = document.querySelector('#eye');
  eye.addEventListener('click', () => {
    if (state) {
      document.getElementById('password').setAttribute('type', 'password');
      state = false;
      eyeid.style.color = '#7a797e';
    } else {
      document.getElementById('password').setAttribute('type', 'text');
      state = true;
      eyeid.style.color = '#5887ef';
    }
  });
};

export default Eye;