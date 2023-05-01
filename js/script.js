import createPageContent from './utils/pageContent.js';
import createRow from './utils/createKeyboard.js';
import blinkButton from './utils/blinkButton.js';
import switchKeyCase from './utils/switchKeyCase.js';
import changeLanguage from './utils/languageAndCase.js';
import { events, pressHandler } from './utils/funcButtons.js';
import autoScrollArea from './utils/autoScrollArea.js';

createPageContent();
createRow();

document.addEventListener('keydown', (event) => {
  blinkButton(event, 'keydown');
});

document.addEventListener('keyup', (event) => {
  blinkButton(event, 'keyup');
});

events.forEach((el) => {
  document.addEventListener(el, pressHandler);
});

switchKeyCase();
changeLanguage();
autoScrollArea();
