var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
dotenv.config()

const AYLIENTextAPI = require('aylien_textapi')
const textapi = new AYLIENTextAPI({
  application_id: process.env.API_ID,
  application_key:process.env.API_KEY
})

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.listen(3002, function () {
    console.log('Example app listening on port 3002')
})

// get requests
app.get('/NLP', getURL)

async function getURL(req, res){
  const url = req.query.url;
  const call = await textapi.sentiment({
  'url' : url
}, function(error, response) {
  if (error === null) {
    res.send(response);
    console.log(response);
  } else {
    console.log(error);
    res.send(error);
  }
});
}
