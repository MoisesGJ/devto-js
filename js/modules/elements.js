const randomColorHashtag = () => {
  const coloresArcoiris = [
    '#FF0000', // Rojo
    '#FF7F00', // Naranja
    //'#FFFF00', // Amarillo
    //'#00FF00', // Verde
    '#0000FF', // Azul
    '#4B0082', // Índigo
    '#9400D3', // Violeta
  ];

  return coloresArcoiris[Math.floor(Math.random() * coloresArcoiris.length)];
};

const createTags = (arrtags) => {
  const container = document.createElement('div');
  container.classList.add('mb-3');

  arrtags.forEach((tag) => {
    const a = document.createElement('a');
    a.classList.add('me-2', 'text-decoration-none' /* , 'text-black' */);
    a.innerText = tag;

    /* const initial = tag.charAt(0);

    if (initial === '#') {
      const auxspan = document.createElement('span');
      auxspan.innerText = '#';
      auxspan.style.cssText = `color: ${randomColorHashtag()}`;
      a.append(auxspan);
      a.innerText = tag;
      console.log(tag);
    } else {
      a.innerText = tag;
    } */

    a.style.cssText = `color: ${randomColorHashtag()}`;

    container.appendChild(a);
  });

  return container;
};

const createPost = (data, isfirst) => {
  const { id, author, profilePic, date, img, title, tags, comments, readtime } =
    data;

  const reacts = 0;

  const divpadre = document.createElement('div');
  divpadre.classList.add('card');
  divpadre.style.cssText = 'width: 100%; border-radius: 5px; cursor:pointer';

  divpadre.addEventListener('click', () =>
    window.open(`./views/post.html?id=${id}`, '_self')
  );

  const imgprincipal = document.createElement('img');
  imgprincipal.src = img;
  imgprincipal.classList.add('card-img-top');

  isfirst && divpadre.appendChild(imgprincipal);

  const divbody = document.createElement('div');
  divbody.classList.add('card-body');

  const cardaux1 = document.createElement('div');
  cardaux1.classList.add('d-flex');

  const cardaux2 = document.createElement('div');
  cardaux2.classList.add('mt-3', 'ps-md-5');

  const cardaux11 = document.createElement('div');
  cardaux11.classList.add('me-3');

  const cardaux12 = document.createElement('div');

  const cardaux11image = document.createElement('img');
  cardaux11image.src = profilePic;
  cardaux11image.classList.add('rounded-circle');
  cardaux11image.style.cssText = 'width: 32px; heigth: 32px';

  const cardaux121 = document.createElement('div');

  const cardaux121h6 = document.createElement('h6');
  cardaux121h6.innerText = `${author} `;

  const cardaux122sp = document.createElement('small');
  cardaux122sp.classList.add('text-body-secondary');
  cardaux122sp.innerText = date;

  const cardaux2h3 = document.createElement('h3');
  cardaux2h3.classList.add('fw-bold');
  cardaux2h3.innerText = title;

  const cardaux22padre = document.createElement('div');
  cardaux22padre.classList.add(
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );

  const cardaux22padre1 = document.createElement('div');
  cardaux22padre1.classList.add('d-flex');

  const cardaux22padre11 = document.createElement('div');
  cardaux22padre11.classList.add('d-flex', 'align-items-center');

  const cardaux22padre12 = document.createElement('div');
  cardaux22padre12.classList.add('d-flex', 'align-items-center');

  //SVG COMENTARIOS
  const cardaux22padre12svg = document.createElement('span');
  cardaux22padre12svg.innerHTML = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="crayons-icon">
  <path
      d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
  </path>
</svg>`;

  const cardaux22padre2 = document.createElement('div');

  const cardaux22padre2smll = document.createElement('small');
  cardaux22padre2smll.classList.add('text-body-secondary');
  cardaux22padre2smll.innerText = `${readtime} min read`;

  //save
  const cardaux22padre2btn = document.createElement('button');
  cardaux22padre2btn.classList.add('btn');
  cardaux22padre2btn.innerHTML = `<svg aria-hidden="true" focusable="false" width="24" height="24" xmlns="http://www.w3.org/2000/svg"
  class="crayons-icon c-btn__icon">
  <path
      d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z">
  </path>
</svg>`;

  //APPENDS

  cardaux22padre2.append(cardaux22padre2smll, cardaux22padre2btn);

  if (comments !== 0) {
    const cardaux22padre12smll = document.createElement('small');
    cardaux22padre12smll.classList.add('ms-1', 'd-flex');
    cardaux22padre12smll.innerText = comments.length;

    const spansmallcomm = document.createElement('span');
    spansmallcomm.classList.add('d-none', 'd-sm-block', 'ms-1');
    spansmallcomm.innerText = 'comments';

    cardaux22padre12smll.appendChild(spansmallcomm);
    cardaux22padre12.append(cardaux22padre12svg, cardaux22padre12smll);
  } else {
    const cardaux22padre12smll = document.createElement('small');
    cardaux22padre12smll.classList.add(
      'ms-1',
      'd-flex',
      'd-none',
      'd-sm-block'
    );
    cardaux22padre12smll.innerText = 'Add comments';

    const cardaux22padre12smll2 = document.createElement('small');
    cardaux22padre12smll2.classList.add('ms-1', 'd-flex', 'd-sm-none');
    cardaux22padre12smll2.innerText = '0';
    cardaux22padre12.append(
      cardaux22padre12svg,
      cardaux22padre12smll,
      cardaux22padre12smll2
    );
  }

  if (reacts !== 0) {
    const cardaux22padre11sp = createReactions(reacts);
    const cardaux22padre11smll = document.createElement('small');
    cardaux22padre11smll.classList.add('d-none', 'd-sm-block', 'ms-3');
    cardaux22padre11smll.innerText = `${reacts.length} reactions`;

    cardaux22padre11.append(cardaux22padre11sp, cardaux22padre11smll);
  }

  cardaux22padre1.append(cardaux22padre11, cardaux22padre12);

  cardaux22padre.append(cardaux22padre1, cardaux22padre2);

  cardaux2.appendChild(cardaux2h3);

  if (tags !== 0) {
    const cardaux21 = createTags(tags);
    cardaux2.appendChild(cardaux21);
  }

  cardaux2.appendChild(cardaux22padre);

  cardaux121.appendChild(cardaux121h6);

  cardaux12.append(cardaux121, cardaux122sp);

  cardaux11.appendChild(cardaux11image);

  cardaux1.append(cardaux11, cardaux12);

  divbody.append(cardaux1, cardaux2);

  divpadre.appendChild(divbody);

  return divpadre;
};

const createSimplePost = (data) => {
  const { id, author, profilePic, date, img, title, content } = data;

  const divpadre = document.createElement('div');
  divpadre.classList.add('card');
  divpadre.style.cssText = 'width: 100%; border-radius: 5px; cursor:pointer';

  divpadre.addEventListener('click', () =>
    window.open(`./views/post.html?id=${id}`, '_self')
  );

  const imgprincipal = document.createElement('img');
  imgprincipal.src = img;
  imgprincipal.classList.add('card-img-top');

  divpadre.appendChild(imgprincipal);

  const divbody = document.createElement('div');
  divbody.classList.add('card-body');

  const cardaux1 = document.createElement('div');
  cardaux1.classList.add('d-flex');

  const cardaux2 = document.createElement('div');
  cardaux2.classList.add('mt-3');

  const cardaux11 = document.createElement('div');
  cardaux11.classList.add('me-3');

  const cardaux12 = document.createElement('div');

  const cardaux11image = document.createElement('img');
  cardaux11image.src = profilePic;
  cardaux11image.classList.add('rounded-circle');
  cardaux11image.style.cssText = 'width: 32px; heigth: 32px';

  const cardaux121 = document.createElement('div');

  const cardaux121h6 = document.createElement('h6');
  cardaux121h6.innerText = `${author} `;

  const cardaux122sp = document.createElement('small');
  cardaux122sp.classList.add('text-body-secondary');
  cardaux122sp.innerText = date;

  const cardaux2h3 = document.createElement('h5');
  cardaux2h3.innerText = title;

  const cardaux22padre = document.createElement('div');
  cardaux22padre.classList.add(
    'd-flex',
    'justify-content-between',
    'align-items-center'
  );

  const cardaux22padre1 = document.createElement('div');
  cardaux22padre1.classList.add('d-flex');

  const cardaux22padre11 = document.createElement('div');
  cardaux22padre11.classList.add('d-flex', 'align-items-center');

  const cardaux22padre12 = document.createElement('div');
  cardaux22padre12.classList.add('d-flex', 'align-items-center');

  const bodycontent = document.createElement('div');
  bodycontent.classList.add('px-3');

  const contentp = document.createElement('p');

  let newcontent;
  content.length > 25
    ? (newcontent = content.slice(0, 70) + '...')
    : (newcontent = content);

  contentp.innerText = newcontent;

  //APPENDS

  bodycontent.appendChild(contentp);

  const cardaux22padre12smll2 = document.createElement('small');
  cardaux22padre12smll2.classList.add('ms-1', 'd-flex', 'd-sm-none');
  cardaux22padre12smll2.innerText = '0';
  cardaux22padre12.append(cardaux22padre12smll2);

  cardaux22padre1.append(cardaux22padre11, cardaux22padre12);

  cardaux22padre.append(cardaux22padre1);

  cardaux2.appendChild(cardaux2h3);

  cardaux2.appendChild(cardaux22padre);

  cardaux121.appendChild(cardaux121h6);

  cardaux12.append(cardaux121, cardaux122sp);

  cardaux11.appendChild(cardaux11image);

  cardaux1.append(cardaux11, cardaux12);

  divbody.append(cardaux1, cardaux2);

  divpadre.appendChild(divbody);
  divpadre.appendChild(bodycontent);

  return divpadre;
};

const createUniquePost = (elementid, value, image) => {
  const currentelement = document.getElementById(elementid);
  image ? (currentelement.src = value) : (currentelement.innerText = value);
};

const createLogoutedButtons = () => {
  // CREATE LOGIN BUTTON
  const logoutButtonsContainer = document.createElement('div');

  const loginButtonContainer = document.createElement('div');
  loginButtonContainer.classList.add('d-flex', 'gap-3');

  const loginButtonSpan = document.createElement('span');
  loginButtonSpan.classList.add('hidden', 'm:block');

  const loginButtonAnchor = document.createElement('a');
  loginButtonAnchor.setAttribute('href', '/views/login.html');
  loginButtonAnchor.classList.add(
    'c-link',
    'c-link--block',
    'mr-2',
    'whitespace-nowrap',
    'ml-auto',
    'text-decoration-none'
  );

  loginButtonAnchor.setAttribute('data-no-instant', '');

  const loginButton = document.createElement('button');
  loginButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  loginButton.innerText = 'Log in';

  // CREATE ACCOUNT BUTTON
  const createAccountButtonContainer = document.createElement('div');

  const createAccountAnchorButton = document.createElement('a');
  createAccountAnchorButton.setAttribute('href', '/views/login.html');
  createAccountAnchorButton.setAttribute('data-tracking-id', 'ca_top_nav');
  createAccountAnchorButton.setAttribute('data-tracking-source', 'top_navbar');
  createAccountAnchorButton.classList.add(
    'c-cta',
    'c-cta--branded',
    'whitespace-nowrap',
    'mr-2',
    'text-decoration-none'
  );
  createAccountAnchorButton.setAttribute('data-no-instant', '');

  const createAccountButton = document.createElement('button');
  createAccountButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  createAccountButton.innerText = 'Create Account';

  loginButtonAnchor.append(loginButton);
  loginButtonSpan.append(loginButtonAnchor);
  loginButtonContainer.append(loginButtonSpan);

  createAccountAnchorButton.append(createAccountButton);
  createAccountButtonContainer.append(createAccountAnchorButton);
  loginButtonContainer.append(createAccountAnchorButton);

  logoutButtonsContainer.append(loginButtonContainer);
  logoutButtonsContainer.append(loginButtonContainer);

  return loginButtonContainer;
};

const createLoggedButtons = () => {
  // CREATE POST BUTTON
  const loggedButtonsContainer = document.createElement('div');
  loggedButtonsContainer.classList.add('d-flex', 'gap-3');

  const createPostButtonContainer = document.createElement('div');

  const createPostAnchor = document.createElement('a');
  createPostAnchor.setAttribute('href', 'views/create.html');
  createPostAnchor.classList.add('text-decoration-none');

  const createPostButton = document.createElement('button');
  createPostButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-md-block'
  );
  createPostButton.innerText = 'Create Post';

  const createPostSVG = document.createElement('svg');
  createPostSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  createPostSVG.setAttribute('width', '24');
  createPostSVG.setAttribute('height', '24');
  createPostSVG.setAttribute('viewbox', '0 0 24 24');
  createPostSVG.setAttribute('role', 'img');
  createPostSVG.setAttribute(
    'aria-labelledby',
    'agtkixkainaiofuhj4o3hunp3uvwl1y6'
  );
  createPostSVG.classList.add('crayons-icon', 'd-md-none', 'my-auto');

  const createPostTitle = document.createElement('title');
  createPostTitle.setAttribute('id', 'agtkixkainaiofuhj4o3hunp3uvwl1y6');
  createPostTitle.innerText = 'Search';

  const createPostPath = document.createElement('path');
  createPostPath.setAttribute(
    'd',
    'M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z'
  );

  // CREATE NOTIFICATIONS
  const notificationsContainer = document.createElement('div');
  notificationsContainer.classList.add('d-flex', 'align-items-center');

  const notificationsAnchor = document.createElement('a');
  notificationsAnchor.setAttribute('href', '#');
  notificationsAnchor.classList.add('navbar-nav');

  const htmlnotificationsSVG = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  role="img"
  aria-labelledby="a4gcjtvbhvh6eh4ee8qmpi1l37goznso"
  class="crayons-icon"
>
  <title id="a4gcjtvbhvh6eh4ee8qmpi1l37goznso">
    Notifications
  </title>
  <path
    d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"
  ></path>
</svg>`;

  notificationsAnchor.innerHTML = htmlnotificationsSVG;

  // LOGOUT BUTTON
  const logoutButtonContainer = document.createElement('div');

  const logoutButtonSpan = document.createElement('span');
  logoutButtonSpan.classList.add('hidden', 'm:block');

  const logoutButtonAnchor = document.createElement('a');
  logoutButtonAnchor.setAttribute('href', '#');
  logoutButtonAnchor.classList.add(
    'c-link',
    'c-link--block',
    'mr-2',
    'whitespace-nowrap',
    'ml-auto',
    'text-decoration-none'
  );
  logoutButtonAnchor.setAttribute('data-no-instant', '');

  const logoutButton = document.createElement('button');
  logoutButton.addEventListener('click', (event) => {
    event.preventDefault(); // method that cancels the event if it is cancelable
    localStorage.removeItem('token');
    localStorage.removeItem('author');
    localStorage.removeItem('image');
    window.open('../index.html', '_self');
  });
  logoutButton.setAttribute('id', 'logout-button');
  logoutButton.classList.add(
    'btn',
    'btn-outline-primary',
    'd-none',
    'd-lg-block'
  );
  logoutButton.innerText = 'Log out';

  //Image user
  const imgcontainer = document.createElement('div');
  const imglog = document.createElement('img');
  imglog.src = localStorage.getItem('image');
  imglog.style.cssText = 'max-height: 40px;';
  imglog.classList.add('navbar-nav', 'rounded-circle');

  logoutButtonAnchor.append(logoutButton);
  logoutButtonSpan.append(logoutButtonAnchor);
  logoutButtonContainer.append(logoutButtonSpan);

  notificationsContainer.append(notificationsAnchor);

  createPostTitle.append(createPostPath);
  createPostSVG.append(createPostTitle);
  createPostButton.append(createPostSVG);
  createPostAnchor.append(createPostButton);
  createPostButtonContainer.append(createPostAnchor);

  imgcontainer.appendChild(imglog);

  loggedButtonsContainer.append(createPostButtonContainer);
  loggedButtonsContainer.append(logoutButtonContainer);
  loggedButtonsContainer.append(notificationsContainer);
  loggedButtonsContainer.append(imgcontainer);

  return loggedButtonsContainer;
};

const groupTagPosts = (title) => {
  const tagList = document.createElement('ul');
  tagList.classList.add('list-group', 'mb-4');
  const tagTitle = document.createElement('li');
  tagTitle.classList.add('list-group-item', 'fw-bold');
  tagTitle.textContent = `#${title}`;
  tagList.appendChild(tagTitle);

  return tagList;
};

const asidePosts = (data) => {
  const { id, title } = data;

  const listItem = document.createElement('li');
  listItem.classList.add('list-group-item');
  listItem.style.cssText = 'cursor: pointer';

  listItem.addEventListener('click', () => {
    window.open(`./views/post.html?id=${id}`, '_self');
  });

  const titleElement = document.createElement('h5');
  titleElement.textContent = title;

  const commentsElement = document.createElement('p');
  commentsElement.classList.add('mb-0', 'comments-text'); // Agregar la clase "comments-text"
  commentsElement.textContent = '0 comentarios';

  listItem.appendChild(titleElement);
  listItem.appendChild(commentsElement);

  return listItem;
};

export {
  createPost,
  createUniquePost,
  createTags,
  createSimplePost,
  createLogoutedButtons,
  createLoggedButtons,
  groupTagPosts,
  asidePosts,
};
