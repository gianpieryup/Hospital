//---- Conexion a FireBase -----------
const admin = require('firebase-admin');

//var serviceAccount = require("../hospital-b2ba8-firebase-adminsdk-afcg2-93363cd71f.json");

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://hospital-b2ba8.firebaseio.com/'
});
const db = admin.database();
//------------------------------------

var express = require('express');
var router = express.Router();

router.get('/registro', (req, res, next)=>{
    res.render('registroDoctor');
});

router.post('/registro', (req, res, next)=>{
    console.log(req.body);
    const newDoctor = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    }
    db.ref('contacts').push(newDoctor); //La Tabla
    res.json({"status" : "OK"});
});
  

module.exports = router;
