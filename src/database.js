const mongoose = require("mongoose");

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,   // Para que no salgan warnings en la consola
    useUnifiedTopology: true,    // Idem arriba
    useFindAndModify: false,
    useCreateIndex: true,  // Idem arriba
  })
  .then((db) => console.log("Mongodb esta conectado", db.connection.host))
  .catch((err) => console.error(err));