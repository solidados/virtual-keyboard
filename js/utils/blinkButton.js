function blinkButton(event, keyEvent) {
  const keys = document.querySelectorAll('.key');
  const textarea = document.querySelector('.textarea');

  keys.forEach((element) => {
    if (element.classList.contains(event.code)) {
      if (keyEvent === 'keydown') {
        element.classList.add('active');
        textarea.innerHTML += event.key;
      } else {
        element.classList.remove('active');
      }
    }
  });
}

export default blinkButton;
