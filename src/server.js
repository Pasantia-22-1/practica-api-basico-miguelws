const express = require('express');
const cors = require('cors');
const router = require('./routes/task.route.js');

class Serve{
    constructor(port){
        this.port = port;
        this.api = express();
        this.initRoute();
    }
    initServer(){
        //()=> funcion anonima
        this.api.listen(this.port, ()=>{
            console.log('iniciando servicio');
        });
    }
    initRoute(){
        this.api.use('/home', (req, res)=>{
            res.json({message: "Hola Mundo"});
        })
    }
}

module.exports = Serve;