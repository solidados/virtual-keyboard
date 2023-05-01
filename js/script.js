import createPageContent from './utils/pageContent.js';
import createRow from './utils/createKeyboard.js';
import blinkButton from './utils/blinkButton.js';

createPageContent();
createRow();

document.addEventListener('keydown', (event) => {
  blinkButton(event, 'keydown');
});

document.addEventListener('keyup', (event) => {
  blinkButton(event, 'keyup');
});
