const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const model = require('./models');
require('dotenv').config();

let app = express();
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post(process.env.REGISTERRT,async(req,res)=>{
    let reqs = await model.tb_usuario.create({
        'nome':req.body.nome,
        'email':req.body.email,
        'senha':req.body.senha,
        'telefone':req.body.telefone,
        'id_nivel':req.body.id_nivel,
        'createdAt':new Date(),
        'updateAt':new Date()
    });
    if(reqs){
        res.send(JSON.stringify(`${req.body.nome} cadastrado com sucesso`));
    }
});

let port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log('Servidor Rodando!!');
});