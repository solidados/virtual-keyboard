const autoScrollArea = () => {
  const textarea = document.querySelector('.textarea');
  textarea.addEventListener('input', () => {
    textarea.scrollTop = textarea.scrollHeight;
  });
};

export default autoScrollArea;
