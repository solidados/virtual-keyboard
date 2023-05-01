/* Language and Case */
// const language = ['eng', 'rus'];
let language = 'rus';
// const CapsLock = false;

function switchKeyCase() {
  const keyboard = document.querySelector('.keyboard');
  const languageElem = keyboard.querySelectorAll(`div > .${language}`);
  for (let i = 0; i < languageElem.length; i += 1) {
    languageElem[i].querySelectorAll('span')[0].classList.toggle('hidden');
    languageElem[i].querySelectorAll('span')[1].classList.toggle('hidden');
  }
}
switchKeyCase();

function changeLanguage() {
  const prevLanguage = keyboard.querySelectorAll(`div > .${language}`);
  for (let i = 0; i < prevLanguage.length; i += 1) {
    prevLanguage[i].classList.toggle('hidden');
    prevLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
  if (language === 'rus') {
    language = 'eng';
    localStorage.setItem('language', language);
  } else {
    language = 'rus';
    localStorage.setItem('language', language);
  }
  const nextLanguage = keyboard.querySelectorAll(`div > .${language}`);
  for (let i = 0; i < nextLanguage.length; i += 1) {
    nextLanguage[i].classList.toggle('hidden');
    nextLanguage[i].querySelectorAll('span')[0].classList.toggle('hidden');
  }
}

changeLanguage();
