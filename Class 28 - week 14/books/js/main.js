//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch);

function getFetch() {
  const choice = document.querySelector('input').value;
  console.log(choice);
  //9780980200447
  const url = `https://openlibrary.org/isbn/${choice}.json`;
  // const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      console.log(data.title);
      if (!localStorage.getItem('books')) {
        localStorage.setItem('books', data.title);
      } else {
        let books = localStorage.getItem('books') + ' ; ' + data.title;
        localStorage.setItem('books', books);
      }

      document.querySelector('h2').innerText = localStorage.getItem('books');
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
// 9781975354787
