//---- Conexion a FireBase -----------
const admin = require('firebase-admin');

var serviceAccount = require("../hospital-b2ba8-firebase-adminsdk-afcg2-93363cd71f.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    //credential: admin.credential.applicationDefault(),
    databaseURL: 'https://hospital-b2ba8.firebaseio.com/'
});
const db = admin.database();
//------------------------------------

var express = require('express');
var router = express.Router();

router.get('/registro', (req, res, next)=>{
    res.render('registroDoctor',{
        errores: false,
    });
});

router.post('/registro', (req, res, next)=>{
    console.log(req.body);
    const newDoctor = {
        name: req.body.name,
        especialidad: req.body.especialidad,
        dni: req.body.dni,
        email: req.body.email,
        phone: req.body.phone,
        disponibilidad: req.body.disponibilidad,
    }
    db.ref('contacts').push(newDoctor); //La Tabla
    res.redirect('/');
});
  

module.exports = router;
