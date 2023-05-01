const events = ['mousedown', 'keydown'];

const pressHandler = (event) => {
  event.preventDefault();
  const { target } = event;
  const textarea = document.querySelector('.textarea');
  if (target.closest('.key')) {
    if (target.closest('.Space')) {
      textarea.innerHTML += ' ';
    } else if (target.closest('.Enter')) {
      textarea.innerHTML += '\n';
    } else if (target.closest('.Tab')) {
      textarea.innerHTML += '\t';
    } else {
      textarea.innerHTML += event.target.innerText;
    }
  }
};

export { events, pressHandler };
