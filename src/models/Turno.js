const { Schema, model } = require("mongoose");

const TurnoSchema = new Schema({
    id_doctor:{type: Number,required: true},
    id_user:{type: Number,required: true},
    fecha: {type: String,required: true},
    hora: {type: Number,required: true},
    description: {type: String,required: true},
  },
  { timestamps: true }
);

module.exports = model("Turno", TurnoSchema); // Nombre del Modelo