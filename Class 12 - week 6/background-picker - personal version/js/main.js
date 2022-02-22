const colorContainer = document.querySelector('#colorContainer');
colorContainer.addEventListener('click', (e) => {
  const color = window.getComputedStyle(e.target).backgroundColor;

  document.querySelector('body').style.backgroundColor = color;
});
