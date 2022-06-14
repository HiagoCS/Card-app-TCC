const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');

let app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando!!');
});