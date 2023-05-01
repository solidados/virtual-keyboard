const pressHandler = (event) => {
  const { target } = event;
  const textarea = document.querySelector('.textarea');
  if (target.closest('.key')) {
    if (target.closest('.Space')) {
      textarea.innerHTML += ' ';
    } else if (target.closest('.Enter')) {
      textarea.innerHTML += '\n';
    } else if (target.closest('.Tab')) {
      event.preventDefault();
      textarea.innerHTML += '\t';
    } else {
      textarea.innerHTML += event.target.innerText;
    }
  }
};

export default pressHandler;
