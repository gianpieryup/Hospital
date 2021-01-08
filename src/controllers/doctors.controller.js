const doctorCtrl = {};

// Models
const Doctor = require("../models/Doctor");

doctorCtrl.getDoctorID = async (req, res) => {
    const doctor = await Doctor.findById(req.params.id).lean();
    console.log(doctor)
    res.json({status: 'OK', data:doctor})
};

doctorCtrl.getDoctorsEspecialidad = async (req, res) => {
    const doctors = await Doctor.find({especialidad: req.params.esp})
    console.log(doctors)
    res.json({status: 'OK', data:doctors})
};

module.exports = doctorCtrl;