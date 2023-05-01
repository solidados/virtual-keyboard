import createPageContent from './utils/pageContent.js';
import createRow from './utils/createKeyboard.js';
import blinkButton from './utils/blinkButton.js';
import pressHandler from './utils/funcButtons.js';
import switchKeyCase from './utils/switchKeyCase.js';
import changeLanguage from './utils/languageAndCase.js';

createPageContent();
createRow();

document.addEventListener('keydown', (event) => {
  blinkButton(event, 'keydown');
});

document.addEventListener('keyup', (event) => {
  blinkButton(event, 'keyup');
});

const events = ['mousedown', 'keydown'];
events.forEach((el) => {
  window.addEventListener(el, pressHandler);
});

switchKeyCase();
changeLanguage();
