const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const { response } = require('express');
const PORT = 8000;

let rappers = {
  '21 savage': {
    age: 28,
    birthName: 'Shéyaa Bin Abraham-Joseph',
    birthLocation: 'London, England',
  },
  'chance the rapper': {
    age: 28,
    birthName: 'Chancelor Jonathan Bennett',
    birthLocation: 'London, England',
  },
  unknown: {
    age: 'unknown',
    birthName: 'unknown',
    birthLocation: 'unknown',
  },
};

// middleware
// for cors support on local
app.use(cors());
// handles all normal js/css/img/etc files
app.use(express.static(__dirname + '/public'));
// use qs lib for url query string
app.use(bodyParser.urlencoded({ extended: true }));
// lets us read json data
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// http://localhost:8000/api/ryan this works but not normal query
app.post('/api', (req, res) => {
  if (rappers[req.body.name]) {
    res.json(rappers[req.body.name]);
  } else {
    res.json(rappers['unknown']);
  }
  // console.log(req.query);
  // console.log(rapperName);
  // res.redirect('/');
});

app.get('/api/:name', (req, res) => {
  const rapperName = req.params.name.toLowerCase();

  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers['unknown']);
  }
});

// checks the hosts env port but if not there, use ours
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is live BB - ${PORT}`);
});
