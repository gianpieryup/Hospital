const turnoCtrl = {};

// Models
const Turno = require("../models/Turno");

turnoCtrl.renderTurnoForm = (req, res) => {
    res.render("turnos/new-turno");
  };


turnoCtrl.createNewTurno = async (req, res) => {
    const { id_doctor, id_user,fecha,hora,description } = req.body;
    const newTurno = new Turno({  id_doctor, id_user,fecha,hora,description}); 
    await newTurno.save();
    req.flash("success_msg", "Note Added Successfully"); // Se guarda el mensaje en el servidor
    res.redirect("/turnos");
};

turnoCtrl.renderTurnos = async (req, res) => {
    // Actualizar para que sea solo las notas del usuario
    const turnos = await Turno.find() 
      .sort({ date: "desc" })
      .lean();
    res.render("turnos/all-turnos", { turnos });
};
  
turnoCtrl.deleteTurno = async (req, res) => {
    await Turno.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/turnos");
  };

module.exports = turnoCtrl;