var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var healtCheck = require('./routes/healthCheck');
var apiRouter = require('./routes/api');
var bluebird = require('bluebird');

const dotenv = require('dotenv');
dotenv.config();

var app = express();

app.use(function(_, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use('/api', apiRouter);
app.use(healtCheck);



// Database connection
mongoose.Promise = bluebird;
let url = process.env.DATABASE
let opts = {
  useNewUrlParser : true, 
  connectTimeoutMS: 20000, 
  useUnifiedTopology: true
  };
mongoose.connect(url,opts)
  .then(() => {
    console.log(`Succesfully Connected to theMongodb Database..`)
  })
  .catch((e) => {
    console.log(`Error Connecting to the Mongodb Database...`),
    console.log(e)
  })

var port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log('Servidor iniciado en el puerto ', port); 
});

module.exports = app;