var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const fetch = require('node-fetch')
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
app.get('/meaningcloud', getURL)

async function getURL(req, res){

  const base = "https://api.meaningcloud.com/sentiment-2.1";
  const key = "?key=" + process.env.API_KEY ;
  const url = "&of=json&url=" + req.query.url;
  const model = "&model=general&lang=en";

  const fullapi = base + key + url + model;

  apiPOST(fullapi)
  .then(
    function(apiResponse){
      res.send(apiResponse)
    }
  )
}


const apiPOST = async(url="", data = {}) => {
const call = await fetch(url, {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
  },
});
try {
  const newdata = await call.json();
  console.log(newdata);
  return newdata;
} catch(error) {
  console.log(error);
  return error;
}
}
