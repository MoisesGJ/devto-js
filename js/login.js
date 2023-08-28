import { logIn, getDataUser } from './modules/api.js';

const getCredentials = () => {
  const email = document.getElementById('user_email');
  const password = document.getElementById('user_password');

  return {
    email: email.value,
    password: password.value,
  };
};

document
  .getElementById('login-button')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    const res = await logIn(getCredentials());

    if (res.token) {
      localStorage.setItem('token', res.token);

      const data = await getDataUser(res.token);
      const { name, profilePic } = data.user;

      localStorage.setItem('author', name);
      localStorage.setItem('image', profilePic);
      window.open('../index.html');
    } else {
      console.log('Error', res);
    }
  });
