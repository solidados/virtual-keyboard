// import { create } from 'eslint-plugin-import/lib/rules/no-unresolved.js';
import createElement from './utils/createElem.js';
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

      const divRus = createElement('div', 'rus hidden');
      const divEng = createElement('div', 'eng');
      key.append(divRus, divEng);

      const spanCaseUpRus = createElement('span', 'caseUp', `${ KEY_CONTENT[i][j][1] }`);
      const spanCaseDownRus = createElement('span', 'caseDown hidden', `${ KEY_CONTENT[i][j][2] }`);
      divRus.append(spanCaseDownRus, spanCaseUpRus);

      const spanCaseUpEng = createElement('span', 'caseUp', `${ KEY_CONTENT[i][j][3] }`);
      const spanCaseDownEng = createElement('span', 'caseDown hidden', `${ KEY_CONTENT[i][j][4] }`);
      divEng.append(spanCaseDownEng, spanCaseUpEng);

      /* key.insertAdjacentHTML(
        'afterBegin',
        `<div class='rus hidden'>
            <span class='caseDown hidden'>${ KEY_CONTENT[i][j][1] }</span>
            <span class='caseUp'>${ KEY_CONTENT[i][j][2] }</span>
        </div>
        <div class='eng'>
            <span class='caseDown hidden'>${ KEY_CONTENT[i][j][3] }</span>
            <span class='caseUp'>${ KEY_CONTENT[i][j][4] }</span>
            </div>`,
      ); */
      row.append(key);
    }

    /* Arrows block */
    const rowNum = document.querySelectorAll('.row');

    if (rowNum.length === 5) {
      const arrowWrap = createElement('div', 'arrowWrap');
      row.append(arrowWrap);

      const arrowWrapUp = createElement('div', 'arrowWrap__up');
      const arrowWrapBottom = createElement('div', 'arrowWrap__bottom');

      arrowWrap.append(arrowWrapUp, arrowWrapBottom);

      /* Create Arrow buttons */
      const arrowUp = createElement('button', `key ${ KEY_CONTENT[5][0][0] }`);
      const arrowLeft = createElement('button', `key ${ KEY_CONTENT[5][1][0] }`);
      const arrowDown = createElement('button', `key ${ KEY_CONTENT[5][2][0] }`);
      const arrowRight = createElement('button', `key ${ KEY_CONTENT[5][3][0] }`);

      arrowWrapUp.append(arrowUp);
      arrowWrapBottom.append(arrowLeft, arrowDown, arrowRight);

      /* Fill Arrows with content */
      const arrowArray = document.querySelectorAll('.arrow');

      const divRus = createElement('div', 'rus hidden');
      const divEng = createElement('div', 'eng');

      const spanCaseDownRus = createElement('span', 'caseDown', `${ KEY_CONTENT[5][0][1] }`);
      const spanCaseUpRus = createElement('span', 'caseUp hidden', `${ KEY_CONTENT[5][0][2] }`);

      const spanCaseDownEng = createElement('span', 'caseDown', `${ KEY_CONTENT[5][0][3] }`);
      const spanCaseUpEng = createElement('span', 'caseUp hidden', `${ KEY_CONTENT[5][0][4] }`);

      divRus.append(spanCaseDownRus, spanCaseUpRus);
      divEng.append(spanCaseDownEng, spanCaseUpEng);

      arrowArray.forEach((btn) => btn.append(divRus, divEng));
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
