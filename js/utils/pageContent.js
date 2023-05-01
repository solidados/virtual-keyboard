import createElement from './createElem.js';

function createPageContent() {
  const pageElem = document.querySelector('.page');

  const wrapper = createElement('div', 'wrapper');
  const title = createElement('h1', 'title', 'RSSchool Virtual Keyboard');
  const textarea = createElement('textarea', 'textarea');
  const keyboard = createElement('div', 'keyboard');
  const description = createElement('p', 'description');

  pageElem.prepend(wrapper);
  wrapper.append(title, textarea, keyboard, description);

  description.innerText = 'This virtual keyboard was created on MacOS.\nTo switch languages press Fn';
}

export default createPageContent;
