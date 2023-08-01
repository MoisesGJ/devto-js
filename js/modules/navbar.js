const createLogoutedButtons = () => {
  // CREATE LOGIN BUTTON
  const loginButtonContainer = document.createElement('div');

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
  createAccountAnchorButton.setAttribute('href', '/enter?state=new-user');
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

  const notificationsAnchor = document.createElement('a');
  notificationsAnchor.setAttribute('href', '#');
  notificationsAnchor.classList.add('navbar-nav', 'mx-3', 'my-auto');

  const notificationsTitle = document.createElement('title');
  notificationsTitle.setAttribute('id', 'a4gcjtvbhvh6eh4ee8qmpi1l37goznso');
  notificationsTitle.innerText = 'Notificatons';

  const notificationsPath = document.createElement('path');
  notificationsPath.setAttribute(
    'd',
    'M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z'
  );

  const notificationsIMG = document.createElement('img');
  notificationsIMG.setAttribute('id', 'author-picture');
  notificationsIMG.setAttribute('alt', 'Notifications icon');
  notificationsIMG.classList.add('navbar-nav', 'rounded-circle', 'me-1');
  notificationsIMG.setAttribute('height', '40');

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
    'd-md-block'
  );
  logoutButton.innerText = 'Log out';

  logoutButtonAnchor.append(logoutButton);
  logoutButtonSpan.append(logoutButtonAnchor);
  logoutButtonContainer.append(logoutButtonSpan);

  notificationsPath.append(notificationsIMG);
  notificationsTitle.append(notificationsPath);
  notificationsAnchor.append(notificationsTitle);
  notificationsContainer.append(notificationsAnchor);

  createPostTitle.append(createPostPath);
  createPostSVG.append(createPostTitle);
  createPostButton.append(createPostSVG);
  createPostAnchor.append(createPostButton);
  createPostButtonContainer.append(createPostAnchor);

  loggedButtonsContainer.append(notificationsContainer);
  loggedButtonsContainer.append(createPostButtonContainer);
  loggedButtonsContainer.append(logoutButtonContainer);

  return loggedButtonsContainer;
};

export { createLogoutedButtons, createLoggedButtons };
