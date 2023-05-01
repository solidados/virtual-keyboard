/* Language and Case */
let language = 'rus';
const CapsLock = false;

const switchKeyCase = () => {
  const keyboard = document.querySelector('.keyboard');
  const languageElem = keyboard.querySelectorAll(`div > .${language}`);
  for (let i = 0; i < languageElem.length; i += 1) {
    languageElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
    languageElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
};

export default switchKeyCase;
