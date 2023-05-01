// import { textarea } from './createKeyboard.js';

function blinkButton(event, keyEvent) {
  const keys = document.querySelectorAll('.key');

  keys.forEach((element) => {
    if (element.classList.contains(event.code)) {
      if (keyEvent === 'keydown') {
        element.classList.add('active');
        document.querySelector('.textarea').innerHTML += event.key;
      } else {
        element.classList.remove('active');
      }
    }
  });
}

export default blinkButton;
