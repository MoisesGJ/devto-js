import {
  createPost,
  createSimplePost,
  groupTagPosts,
  asidePosts,
} from './modules/elements.js';
import { getPosts } from './modules/api.js';
import { orderData, orderAside } from './modules/orders.js';
import { tokenValidation } from './modules/auth.js';

let loggedButtonsValidation = document.getElementById(
  'authentication-top-nav-actions'
);
loggedButtonsValidation.innerHTML = '';
loggedButtonsValidation.append(tokenValidation());

const processData = async () => {
  const dataposts = await getPosts();

  const keys = Object.keys(dataposts);

  const array = keys.reduce((accum, key) => {
    const currobj = dataposts[key];

    currobj['id'] = key;

    return [...accum, currobj];
  }, []);
  return array;
};

const main = document.getElementById('cards-main');

const cleanMain = () => {
  main.innerHTML = '';
};

const data = await processData();

const renderData = (array) => {
  let count = 0;

  array.forEach((post) => {
    let isfirst = false;
    count === 0 && (isfirst = true);
    count++;

    const cardpost = createPost(post, isfirst);

    main.appendChild(cardpost);
  });

  document.getElementById('no-data').classList.add('d-none');
};

const renderPostAside = (data) => {
  const random = Math.floor(Math.random() * data.length);
  const asidemain = document.getElementById('aside__main');
  const post = createSimplePost(data[random]);

  asidemain.appendChild(post);
};

const renderPostsTagAside = (data, tag) => {
  const asidemain = document.getElementById('aside__main');
  const container = groupTagPosts(tag);

  data.forEach((post) => container.appendChild(asidePosts(post)));

  asidemain.appendChild(container);
};

renderData(orderData(data, 'relevant'));
renderPostAside(data, 'aside__main');

const firsttag = 'html';
const secondtag = 'css';

renderPostsTagAside(orderAside(data, firsttag), firsttag);
renderPostsTagAside(orderAside(data, secondtag), secondtag);

let orderactive = document.querySelector('.main__title__selected');
let curentdata;

const order = document.querySelectorAll('.data-item');
order.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    if (orderactive !== item) {
      orderactive.classList.remove('main__title__selected');
      item.classList.add('main__title__selected');
      curentdata = orderData(data, target.id);

      cleanMain();
      renderData(curentdata);

      orderactive = item;
    }
  });
});

document.getElementById('search-input').addEventListener('keyup', (event) => {
  const value = event.target.value;
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(value.toLowerCase())
  );
  cleanMain();
  renderData(filteredData);

  const nodata = document.getElementById('no-data');

  if (value.length === 0) {
    orderactive.classList.add('main__title__selected');

    cleanMain();

    renderData(curentdata ? curentdata : orderData(data, 'relevant'));
  } else {
    orderactive.classList.remove('main__title__selected');
  }

  if (filteredData.length === 0) {
    nodata.classList.remove('d-none');
  } else {
    nodata.classList.add('d-none');
  }
});
