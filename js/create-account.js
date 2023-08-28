import { getImageAuthor, createAccount, getDataUser } from './modules/api.js';

const randomImage = async () => {
  const image = await getImageAuthor();

  return image['results'][0]['picture']['thumbnail'];
};

const getInputs = async () => {
  const email = document.getElementById('user_email');
  const password = document.getElementById('user_password');
  const name = document.getElementById('user_name');
  const profilePic = await randomImage();
  return {
    name: name.value,
    email: email.value,
    password: password.value,
    profilePic,
  };
};

document
  .getElementById('created-button')
  .addEventListener('click', async (event) => {
    event.preventDefault();
    const data = await getInputs();

    const res = await createAccount(data);

    if (res.token) {
      localStorage.setItem('token', res.token);
      localStorage.setItem('author', data.name);
      localStorage.setItem('image', data.profilePic);
      window.open('../index.html');
    } else {
      alert(res.error);
      console.log('Error', res);
    }
  });
