function toggleText() {
  const btn = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');
  btn.addEventListener('click', () => {
    const isHidden = text.hidden;
    if (isHidden) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
