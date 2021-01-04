const turnoCtrl = {};

// Models
const Turno = require("../models/Turno");

turnoCtrl.renderTurnoForm = (req, res) => {
    console.log("Aca se guarda la info del usuario logueado",req.user.id);
    res.render("turnos/new-turno");
  };


turnoCtrl.createNewTurno = async (req, res) => {
    const { id_doctor, id_user,fecha,hora,description } = req.body;//Quitar el "id_user"
    const newTurno = new Turno({  id_doctor, id_user,fecha,hora,description}); 
    newTurno.id_user=req.user.id
    await newTurno.save();

    req.flash("success_msg", "Note Added Successfully"); // Se guarda el mensaje en el servidor
    res.redirect("/turnos");
};

turnoCtrl.renderTurnos = async (req, res) => {
    const turnos = await Turno.find({id_user: req.user.id}) 
      .sort({ date: "desc" })
      .lean();
    res.render("turnos/all-turnos", { turnos });
};

/*
Si se usa el PUT se debe restringir que otro usuario no pueda cambiar las notas de otro
notesCtrl.renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) { // Valida lo del comienzo
    req.flash("error_msg", "Not Authorized");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};
*/

turnoCtrl.deleteTurno = async (req, res) => {
    await Turno.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect("/turnos");
  };

module.exports = turnoCtrl;