document.querySelector('#check').addEventListener('click', check);

function check() {
  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === 'tue' || day === 'thur') {
    console.log('class day');
  } else if (day === 'mon' || day === 'wed' || day === 'fri') {
    console.log('boring day');
  } else {
    console.log('weekend');
  }
}
