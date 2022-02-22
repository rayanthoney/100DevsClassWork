// on tue/thur = class day
// on mon/wed/fri = boring day
// on sat/sun = weekend

const inputEl = document.querySelector('#day');
const outputEl = document.querySelector('#placeToSee');
const formEl = document.querySelector('form');
const btnEl = document.querySelector('#check');

// this shouldn't be required?
// formEl.addEventListener('keydown', (e) => {
//   e.preventDefault();
// });

function DisplayValue(value) {
  let result = '';
  switch (value) {
    case 'monday':
    case 'wednesday':
    case 'friday':
      result = 'boring day';
      break;
    case 'tuesday':
    case 'thursday':
      result = 'class day';
      break;
    case 'saturday':
    case 'sunday':
      result = 'weekend';
      break;
    default:
      alert('please enter the correct day');
  }
  return result;
}

function checkResults(e) {
  const inputValue = inputEl.value.toLowerCase();

  outputEl.textContent = DisplayValue(inputValue);
}

//  input works on enter
inputEl.addEventListener('change', checkResults);

btnEl.addEventListener('click', checkResults);

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
});

//********************* EXTRA *********************

function autocomplete(e) {
  const currentInputText = e.target.value;
  const daysArr = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const autocompleteArr = daysArr.filter((day) => day.match(currentInputText));

  //guard clause for mismatch
  if (autocompleteArr.length > 1 || autocompleteArr.length === 0) return;

  inputEl.value = autocompleteArr[0];
}

// attach autocomplete
inputEl.addEventListener('input', autocomplete);

// check for backspace being used to turn off autocomplete
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace') inputEl.removeEventListener('input', autocomplete);

  if (e.key !== 'Backspace') inputEl.addEventListener('input', autocomplete);
});
