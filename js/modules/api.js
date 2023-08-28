const BASE_URI = 'http://localhost:8080';

const getPosts = async () => {
  const res = await fetch(`${BASE_URI}/posts`);

  return await res.json();
};

const postPosts = async (data) => {
  const res = await fetch(`${BASE_URI}/posts`, {
    method: 'POST',
    headers: new Headers({
      Authorization: 'Basic ' + localStorage.getItem('token'),
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body: JSON.stringify(data),
  });

  return await res.json();
};

const getUniquePost = async (id) => {
  const res = await fetch(`${BASE_URI}/posts/${id}`);

  return await res.json();
};

const getImageAuthor = async () => {
  const res = await fetch(`https://randomuser.me/api/`);

  return await res.json();
};

const createToken = async (data) => {
  const res = await fetch(`${BASE_URI}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return await res.json();
};

const createAccount = async (data) => {
  const res = await fetch(`${BASE_URI}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const mess = await res.json();

  if (mess.message === 'User created successfull') {
    const token = await createToken({
      email: data.email,
      password: data.password,
    });

    return token;
  } else {
    return mess.err;
  }
};

const logIn = async (data) => await createToken(data);

const getDataUser = async (token) => {
  const [header, payload, validate] = token.split('.');
  const { id } = JSON.parse(atob(payload));

  console.log('id', id);

  const res = await fetch(`${BASE_URI}/users/${id}`);

  return await res.json();
};

export {
  getPosts,
  postPosts,
  getUniquePost,
  getImageAuthor,
  createAccount,
  logIn,
  getDataUser,
};
