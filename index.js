const express = require('express')
const {getConnection} = require('./Db/conect-mongo')
const cors = require('cors');
require('dotenv').config();


const app = express()
const host= '0.0.0.0'
const port = process.env.PORT;

app.use(cors());

getConnection();

app.use('/universidad', require('./Router/universidad'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });