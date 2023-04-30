import { createRow, textarea } from './utils/createKeyboard.js';

createRow();

const keys = document.querySelectorAll('.key');

document.addEventListener('keydown', (event) => {
  keys.forEach((element) => {
    if (element.classList.contains(event.code)) {
      element.classList.add('active');
      textarea.innerHTML += event.key;
    }
  });
});

document.addEventListener('keyup', (event) => {
  keys.forEach((element) => {
    if (element.classList.contains(event.code)) {
      element.classList.remove('active');
    }
  });
});

// const arr = [];
// window.addEventListener('keydown', (UIEvent) => {
//   console.log(UIEvent.code);
// });

/* window.addEventListener('keydown', (event) => {

}); */
