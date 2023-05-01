import createElement from './createElem.js';
import KEY_CONTENT from './keyContent.js';

function createRow() {
  const keyboard = document.querySelector('.keyboard');

  for (let i = 0; i < KEY_CONTENT.length - 1; i += 1) {
    const row = createElement('div', 'row');
    keyboard.append(row);

    for (let j = 0; j < KEY_CONTENT[i].length; j += 1) {
      const key = createElement('button', `key ${KEY_CONTENT[i][j][0]}`);

      const divRus = createElement('div', 'rus hidden');
      const divEng = createElement('div', 'eng');
      key.append(divRus, divEng);

      const spanCaseUpRus = createElement('span', 'caseUp', `${KEY_CONTENT[i][j][1]}`);
      const spanCaseDownRus = createElement('span', 'caseDown hidden', `${KEY_CONTENT[i][j][2]}`);
      divRus.append(spanCaseDownRus, spanCaseUpRus);

      const spanCaseUpEng = createElement('span', 'caseUp', `${KEY_CONTENT[i][j][3]}`);
      const spanCaseDownEng = createElement('span', 'caseDown hidden', `${KEY_CONTENT[i][j][4]}`);
      divEng.append(spanCaseDownEng, spanCaseUpEng);

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
      const arrowUp = createElement('button', `key ${KEY_CONTENT[5][0][0]}`);
      const arrowLeft = createElement('button', `key ${KEY_CONTENT[5][1][0]}`);
      const arrowDown = createElement('button', `key ${KEY_CONTENT[5][2][0]}`);
      const arrowRight = createElement('button', `key ${KEY_CONTENT[5][3][0]}`);

      arrowWrapUp.append(arrowUp);
      arrowWrapBottom.append(arrowLeft, arrowDown, arrowRight);

      /* Fill Arrows with content */
      const arrowArray = document.querySelectorAll('.arrow');

      let count = 0;
      arrowArray.forEach((btn) => {
        const divRus = createElement('div', 'rus hidden');
        const divEng = createElement('div', 'eng');

        const spanCaseDownRus = createElement('span', 'caseDown', `${KEY_CONTENT[5][count][1]}`);
        const spanCaseUpRus = createElement('span', 'caseUp hidden', `${KEY_CONTENT[5][count][2]}`);

        const spanCaseDownEng = createElement('span', 'caseDown', `${KEY_CONTENT[5][count][3]}`);
        const spanCaseUpEng = createElement('span', 'caseUp hidden', `${KEY_CONTENT[5][count][4]}`);

        divRus.append(spanCaseDownRus, spanCaseUpRus);
        divEng.append(spanCaseDownEng, spanCaseUpEng);
        btn.append(divRus, divEng);
        count += 1;
      });
    }
  }
}
export default createRow;
