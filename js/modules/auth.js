import { createLogoutedButtons, createLoggedButtons } from './elements.js';

const token = localStorage.getItem('token');

const tokenValidation = () =>
  token ? createLoggedButtons() : createLogoutedButtons();

const booleanAuth = () => (token ? true : false);

export { tokenValidation, booleanAuth };
