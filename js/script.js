import { createElement } from './utils/createElem.js';

const pageElem = document.querySelector('.page');

const wrapper = createElement('div', 'wrapper');
const title = createElement('h1', 'title', 'RSSchool Virtual Keyboard');
const textarea = createElement('textarea', 'textarea');
const keyboard = createElement('div', 'keyboard');
const row = createElement('div', 'row');
const button = createElement('button', 'key', '§');

pageElem.prepend(wrapper);
wrapper.append(title, textarea, keyboard);
keyboard.append(row);
row.append(button);
