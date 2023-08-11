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

document
  .getElementById('form-control-post')
  .addEventListener('keyup', ({ target }) => {
    const { value, name } = target;
    data[name] = value;
  });

const createData = (dataobj) => {
  const random = Math.floor(Math.random() * 10) + 1;
  dataobj['author'] = localStorage.getItem('author');
  dataobj['profilePic'] = localStorage.getItem('image');

  dataobj['date'] = getExplicitDate(new Date());
  dataobj['comments'] = 0;
  dataobj['relevant'] = random % 2 == 0 ? true : false;
  dataobj['rank'] = random;

  const processtags = dataobj['tags'].split(' ');

  let finaltags = [];
  processtags.forEach((item) => item.length > 0 && finaltags.push('#' + item));
  dataobj['tags'] = finaltags;

  const words = '' + dataobj['content'];
  dataobj['readtime'] = getPPM(words);

  return dataobj;
};

document.getElementById('btn-submit').addEventListener('click', () => {
  if (validate) {
    const objfin = createData(data);
    postPosts(objfin);
    window.open('../index.html');
  } else {
    window.location.reload();
  }
});
