//Write your pseduo code first!

// get input
// find if its f or c
// convert to opposite

const temp = document.querySelector('#temp');

temp.addEventListener('change', (e) => {
  const value = e.target.value;
  console.log(Number(value) * (9 / 5) + 32);
});
