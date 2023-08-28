import { getExplicitDate, getPPM } from './modules/time.js';
import { postPosts } from './modules/api.js';
import { booleanAuth } from './modules/auth.js';

!booleanAuth() && window.open('../views/login.html', '__self');

const inputimage = document.getElementById('link-image');

document.getElementById('btn-link-image').addEventListener('click', () => {
  inputimage.classList.toggle('d-none');
});

let data = {};
let validate = true;
!booleanAuth() && (validate = false);

/* document
  .getElementById('form-control-post')
  .addEventListener('keyup', ({ target }) => {
    const { value, name } = target;
    data[name] = value;
  }); */

const createData = (dataobj) => {
  const random = Math.floor(Math.random() * 10) + 1;
  dataobj['user'] = localStorage.getItem('token');
  dataobj['comments'] = 0;
  dataobj['relevant'] = random % 2 == 0 ? true : false;
  dataobj['rank'] = random;
  dataobj['image'] = inputimage.value;
  dataobj['title'] = document.getElementById('floatingTitle').value;
  dataobj['body'] = document.getElementById('floatingTextarea-content').value;

  const processtags = document.getElementById('form-tags').value;

  let finaltags = [];
  processtags
    .split(' ')
    .forEach((item) => item.length > 0 && finaltags.push('#' + item));
  dataobj['tags'] = finaltags;

  return dataobj;
};

document
  .getElementById('btn-submit')
  .addEventListener('click', async (event) => {
    if (validate) {
      event.preventDefault();
      const objfin = createData(data);
      const res = await postPosts(objfin);
      if (res.message) {
        window.open('../index.html');
      } else {
        alert('Error');
      }
    } else {
      window.location.reload();
    }
  });
