const express = require('express');
const port = 3000;



app.use(express.static(__dirname + '/public'));
const log = (req, res, next) => {
    console.log(`${req.method} ${req.url} ${new Date()} ${req.get('content-type')}`);
    next();
}
const app = express();
app.use(log);
// Metodos
app.route('/home')
    .get((req, res) => {
        res.send("Pantalla de Home")
    })
app.route('/user')
    .get((req, res) => {
        res.send("Pantalla de usuario")
    })
app.route('/booking')
    .get((req, res) => {
        res.send("Pantalla de Booking")
    })
    .post((req, res) => {
        res.send("Crear nuevo cuerto")
    })

app.route('/booking/:id')
    .get((req, res) => {
        res.send("Informacion del id")
    })
    .patch((req, res) => {
        res.send("Editar el ID")
    })
    .delete((req, res) => {
        res.send("Borrar el id")
    })

app.route('/usuario/login')
    .post((req, res) => {
        res.send("Metodo para obtener un token")
    })
app.route('/usuario/logout')
    .post((req, res) => {
        res.send("Logout")
    })


app.listen(port, () => console.log(`Example app listening on port ${port}!`));