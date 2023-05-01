const blinkButton = (event, keyEvent) => {
  const keys = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');

  keys.forEach((element) => {
    if (element.classList.contains(event.code)) {
      if (keyEvent === 'keydown') {
        element.classList.add('active');
        if (event.key === 'Tab') {
          textarea.innerHTML += '\t';
        } else if (event.key === 'Enter') {
          textarea.innerHTML += '\n';
        } else {
          textarea.innerHTML += event.key;
        }
      } else {
        element.classList.remove('active');
      }
    }
  });
};

export default blinkButton;
