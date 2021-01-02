const express = require("express");
const router = express.Router();

// Controllers [contiene funciones]
const { renderTurnoForm,
        createNewTurno,
        renderTurnos,
        deleteTurno
} = require("../controllers/turnos.controller");

// New Turno
router.get("/turnos/add", renderTurnoForm); // VIsta del formulario para el nuevo turno

router.post("/turnos/new-turno", createNewTurno);


// Get All Turnos
router.get("/turnos", renderTurnos);

// Edit Notes (creo que no sera nesecario)just no puedes cambiar la fecha y todo eso mejor se anula y se crea otro
// router.get("/turnos/edit/:id", isAuthenticated, renderEditForm);
//router.put("/turnos/edit-note/:id", updateNote);

// Delete Notes
router.delete("/turnos/delete/:id", deleteTurno);

module.exports = router;