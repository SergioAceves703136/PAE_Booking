'use-strict'
const moment = require('moment');
const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const port = process.env.PORT || 80;
const jwt = require('jwt-simple');

app.set('jwtTokenSecret', 'PAE')
var tokens;

let users = JSON.parse(fs.readFileSync('./JSON_Files/users.json'));
let cuartos = JSON.parse(fs.readFileSync('./JSON_Files/cuartos.json'));


let jsonParser = bodyParser.json();

app.listen(port, () => console.log(`App running on port ${port}!`));

app.use(express.static(__dirname + '/public'));


const log = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()} ${req.get('content-type')}`);
    next();
}
const app = express();
app.use(log);
app.use(cors());

// Metodos
app.route('/home')
    .get((req, res) => {
        res.send("Pantalla de Home")
    })

app.route('api/user')
    .get((req, res) => {
        res.json(users);
    })

app.route('api/user/:id')
    .get((req, res) => {
        let id = req.params.id;
        let u = users.find(p => p.id == id);
        if (u) {
            return res.send(u);
        }
        res.send({
            error: 'ID no existe'
        })


    })
    .patch(auth,(req, res) => {
        let id = req.params.id;
        if (PatchUsuario(id.req.body)) {
            return res.send(200)
        }
        res.status(400).send({
            error: "No se encontró el ID o faltan datos"
        })
    })
    .delete(auth,(req, res) => {
        let id = req.params.id;
        let u = users.findIndex(p => p.id == id);
        if (u >= 0) {
            users.splice(c, 1);
            fs.writeFileSync('./JSON_Files/users.json', JSON.stringify(users));
            return res.status(200).send({
                Notificacion: 'elemento eleminado'
            })
        }
        res.status(400).send({
            error: 'No se encontró ID'
        })
    })



function PatchUsuario(id, user) {
    let pos = users.findIndex(p => p.id == id);
    if (pos > 0) {
        users[pos].fullname = (user.fullname) ? user.fullname : users[pos].fullname;
        users[pos].email = (user.email) ? user.email : users[pos].email;
        users[pos].screenName = (user.screenName) ? user.screenName : users[pos].screenName;
        users[pos].password = (user.password) ? user.password : users[pos].password;
        users[pos].address = (user.address) ? user.address : users[pos].address;
        users[pos].city = (user.city) ? user.city : users[pos].city;
        users[pos].country = (user.country) ? user.country : users[pos].country;
        users[pos].postalcode = (user.postalcode) ? user.postalcode : users[pos].postalcode;
        users[pos].cellphone = (user.cellphone) ? user.cellphone : users[pos].cellphone;
        users[pos].birthday = (user.birthday) ? user.birthday : users[pos].birthday;
        users[pos].cuartosCreados = (user.cuartosCreados) ? user.cuartosCreados : users[pos].cuartosCreados;
        users[pos].transacciones = (user.transacciones) ? user.transacciones : users[pos].transacciones;


        fs.writeFileSync('./JSON_Files/users.json', JSON.stringify(users));
        return true;

    }
    return false;

}





app.route('api/cuarto')
    .get((req, res) => {
        res.json(cuartos)
    })
    .post(auth,(req, res) => {
        console.log(req.body);
        if (req.body.id != undefined && req.body.nombre && req.body.descripcion
            && req.body.owner && req.body.imagen1 && req.body.numBaths && req.body.descCuartos && req.body.numCuartos && req.body.imagenCuartos
            && req.body.imagenBaths && req.body.direccion && req.body.descBaths && req.body.descCocina && req.body.imagenCocina && req.body.extras
            & req.body.imagenExtras && req.body.precioDia) {
            cuartos.push(req.body);
            fs.writeFileSync('./JSON_Files/cuartos.json', JSON.stringify(cuartos));
            console.log(cuartos);
            res.status(201).send();
            return;


        }
        res.status(400).send({
            error: 'faltan atributos'
        });
    })

app.route('api/cuartos/:id')
    .get((req, res) => {
        let id = req.params.id;
        let c = cuartos.find(p => p.id == id);
        if (c) {
            return res.send(c);
        }
        res.send({
            error: 'ID no existe'
        })
    })
    .patch(auth,(req, res) => {
        let id = req.params.id;
        if (PatchCuarto(id.req.body)) {
            return res.send(200)
        }
        res.status(400).send({
            error: "No se encontró el ID o faltan datos"
        })
    })
    .delete(auth,(req, res) => {
        let id = req.params.id;
        let c = cuartos.findIndex(p => p.id == id);
        if (c >= 0) {
            cuartos.splice(c, 1);
            fs.writeFileSync('./JSON_Files/cuartos.json', JSON.stringify(cuartos));
            return res.status(200).send({
                Notificacion: 'elemento eleminado'
            })
        }
        res.status(400).send({
            error: 'No se encontró ID'
        })
    })

function PatchCuarto(id, cuarto) {
    let pos = cuartos.findIndex(p => p.id == id);
    if (pos > 0) {
        cuartos[pos].nombre = (cuarto.nombre) ? cuarto.nombre : cuarto[pos].nombre;
        cuartos[pos].direccion = (cuarto.direccion) ? cuarto.direccion : cuarto[pos].direccion;
        cuartos[pos].descripcion = (cuarto.descripcion) ? cuarto.descripcion : cuarto[pos].descripcion;
        cuartos[pos].imagen1 = (cuarto.imagen1) ? cuarto.imagen1 : cuarto[pos].imagen1;
        cuartos[pos].numCuartos = (cuarto.numCuartos) ? cuarto.numCuartos : cuarto[pos].numCuartos;
        cuartos[pos].descCuartos = (cuarto.descCuartos) ? cuarto.descCuartos : cuarto[pos].descCuartos;
        cuartos[pos].imagenCuartos = (cuarto.imagenCuartos) ? cuarto.imagenCuartos : cuarto[pos].imagenCuartos;
        cuartos[pos].numBaths = (cuarto.numBaths) ? cuarto.numBaths : cuarto[pos].numBaths;
        cuartos[pos].descBaths = (cuarto.descBaths) ? cuarto.descBaths : cuarto[pos].descBaths;
        cuartos[pos].imagenBaths = (cuarto.imagenBaths) ? cuarto.imagenBaths : cuarto[pos].imagenBaths;
        cuartos[pos].descCocina = (cuarto.descCocina) ? cuarto.descCocina : cuarto[pos].descCocina;
        cuartos[pos].imagenCocina = (cuarto.imagenCocina) ? cuarto.imagenCocina : cuarto[pos].imagenCocina;
        cuartos[pos].extras = (cuarto.extras) ? cuarto.extras : cuarto[pos].extras;
        cuartos[pos].imagenExtras = (cuarto.imagenExtras) ? cuarto.imagenExtras : cuarto[pos].imagenExtras;
        cuartos[pos].precioDia = (cuarto.precioDia) ? cuarto.precioDia : cuarto[pos].precioDia;

        fs.writeFileSync('./JSON_Files/cuartos.json', JSON.stringify(cuartos));
        return true;

    }
    return false;

}



app.route('/usuario/login')
    .post(jsonParser ,(req, res) => {
        objct = req.body;
        const pos = users.findIndex(i => i.screenName === objct.screenName);
        if (pos >= 0 && this.persons[pos].password === objct.password) {
            var expires = moment().add(5, 'minutes').valueOf();
            var token = jwt.encode({
                iss: usr.id,
                exp: expires
            }, app.get('jwtTokenSecret'));
            tokens = {
                token: token,
                expires: expires,
                usuario: usr
            }
            res.status(200).json({
                "status": true
            });
        }
        else res.status(404).json({
            "status": false
        });
    })



app.route(auth, '/usuario/logout')
.post((req,res)=>{

    tokens = undefined
    return res.sendStatus(204);



  })


function auth(req,res,next){
    if(tokens!=undefined){
        try{
            if (tokens.expires <= Date.now()) {
               return res.send('Access token expired', 400);
            }
            next();
        }catch(err){
        res.send('No token', 406);

    }
    } else {
        res.send('No hay token', 406);
    }


}


