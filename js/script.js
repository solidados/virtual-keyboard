// import { create } from 'eslint-plugin-import/lib/rules/no-unresolved.js';
import { createElement } from './utils/createElem.js';
import KEY_CONTENT from './utils/keyContent.js';

const pageElem = document.querySelector('.page');

const wrapper = createElement('div', 'wrapper');
const title = createElement('h1', 'title', 'RSSchool Virtual Keyboard');
const textarea = createElement('textarea', 'textarea');
const keyboard = createElement('div', 'keyboard');
const description = createElement('p', 'description');

pageElem.prepend(wrapper);
wrapper.append(title, textarea, keyboard, description);
textarea.id = 'textArea';

description.innerText = 'This virtual keyboard was created in MacOS.\nTo switch languages press Fn';

function createRow() {
  for (let i = 0; i < KEY_CONTENT.length - 1; i += 1) {
    const row = createElement('div', 'row');
    keyboard.append(row);

    for (let j = 0; j < KEY_CONTENT[i].length; j += 1) {
      const key = createElement('button', `key ${ KEY_CONTENT[i][j][0] }`);

      key.insertAdjacentHTML(
        'afterBegin',
        `<div class='rus hidden'>
            <span class='caseDown'>${ KEY_CONTENT[i][j][1] }</span>
            <span class='caseUp hidden'>${ KEY_CONTENT[i][j][2] }</span>
        </div>
        <div class='eng'>
            <span class='caseDown hidden'>${ KEY_CONTENT[i][j][3] }</span>
            <span class='caseUp hidden'>${ KEY_CONTENT[i][j][4] }</span>
        </div>`,
      );
      row.append(key);

      row.append(key);
    }
  }
}
createRow();

// function makeRowOne() {
//   const rowOne = createElement('div', 'row__one row');
//   for (let i = 0; i < KEY_CONTENT.rowOne.length; i += 1) {
//     const asciiCode = KEY_CONTENT.rowOne[i];
//     const symbol = String.fromCharCode(asciiCode);
//     const button = createElement('button', 'key', symbol/* `${ symbol }` */);
//     keyboard.append(rowOne);
//     rowOne.append(button);
//   }
// }
// makeRowOne();

// const arr = [];
// window.addEventListener('keydown', (UIEvent) => {
//   const charCode = UIEvent.which;
//   arr.push(charCode);
//   const key = [event.key];
//   textarea.value += key;
//   console.log(textarea.value.charCodeAt());
// console.log(arr);
// });

/* window.addEventListener('keydown', (event) => {

}); */
