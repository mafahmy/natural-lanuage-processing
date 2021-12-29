//import fetch from 'node-fetch';
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', async function (req, res) {
   // res.send(mockAPIResponse)
   let url = req.body.url
   
    console.log(url)
    
   let response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API}&url=${url}&lang=en`)

    let data = await response.json();
    
   res.send(data)
//    .then(response => ({
//        status: response.status,
//        body: response.json()
//    }))
//    .then(({status, body}) => {
//        console.log(status, body)
//        res.send(body)
//    })
//    .catch(error => console.log('error', error));

    console.log(data)
    
   
})
