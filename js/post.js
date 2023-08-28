import { getUniquePost } from './modules/api.js';
import { createUniquePost } from './modules/elements.js';
import { createTags } from './modules/elements.js';
import { tokenValidation } from './modules/auth.js';
import { getExplicitDate } from './modules/time.js';

let loggedButtonsValidation = document.getElementById(
  'authentication-top-nav-actions'
);
loggedButtonsValidation.innerHTML = '';
loggedButtonsValidation.append(tokenValidation());

const urlparams = new URLSearchParams(location.search);

const currentid = urlparams.get('id');

const data = await getUniquePost(currentid);

const renderPost = (data) => {
  const {
    user,
    created_at,
    image,
    title,
    tags,
    reacts,
    comments = 0,
    body,
  } = data.post;

  document.title = title;

  createUniquePost('author-post', user.name, false);
  createUniquePost('picauthor-post', user.profilePic, true);

  createUniquePost('date-post', getExplicitDate(new Date(created_at)), false);
  createUniquePost('img-post', image, true);
  createUniquePost('title-post', title, false);
  createUniquePost('content-post', body, false);
  createUniquePost(
    'comments-image-post',
    localStorage.getItem('image') ||
      'https://res.cloudinary.com/practicaldev/image/fetch/s--V3djhsWJ--/c_limit,f_auto,fl_progressive,q_auto,w_256/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8j7kvp660rqzt99zui8e.png',
    true
  );
  createUniquePost('comments-total-post', comments, false);

  document.getElementById('tags-post').append(createTags(tags));
};

renderPost(data);
