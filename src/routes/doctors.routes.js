const router = require("express").Router();

// La consumire como API
const {
  getDoctorID,
  getDoctorsEspecialidad,
} = require("../controllers/doctors.controller");

// Routes
router.get("/doctors/:id", getDoctorID); // [1]

router.get("/doctors/:especialidad", getDoctorsEspecialidad); // [2]

/*
[1] Busca el doctor por ID
[2] Busca doctores de esa especialidad
*/
module.exports = router;