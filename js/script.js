// import { create } from 'eslint-plugin-import/lib/rules/no-unresolved.js';
import createElement from './utils/createElem.js';
// import KEY_CONTENT from './utils/keyContent.js';
import createRow from './utils/createKeyboard.js';

createRow();

const arr = [];
window.addEventListener('keydown', (UIEvent) => {
  console.log(UIEvent.code);
});

/* window.addEventListener('keydown', (event) => {

}); */
