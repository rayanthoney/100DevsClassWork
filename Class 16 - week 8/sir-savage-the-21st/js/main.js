//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function prints21() {
  let text = '';
  const h2El = document.querySelector('#savageSays');

  for (let i = 0; i < 21; i++) {
    text += '21 ';
    h2El.textContent = text;
  }
}

prints21();
