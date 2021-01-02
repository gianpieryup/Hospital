const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const path = require("path");  // Para definir las ubicaciones de las carpetas(e usa para evitar el '\' con el '/')[con ".join" se dice concatena esto]
const morgan = require("morgan"); // Para ver las peticiones en consola

// Initializations
const app = express();

// settings
app.set("port", process.env.PORT || 4000); // Esto es como definir una variable
app.set("views", path.join(__dirname, "views")); // Donde esta la carpeta "views"
app.engine(".hbs",exphbs({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"), // Lo que se va a repetir(EJ footer,header,etc)
      partialsDir: path.join(app.get("views"), "partials"), // Lo nuevo en cada pagina
      extname: ".hbs",
}));// Configuraciones del motor de vista
app.set("view engine", ".hbs");

// middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); // Le dice al servidor que usamos JSON's
app.use(methodOverride("_method")); // Para usar DELETE en los formularios de HTMl

// routes
app.use(require("./routes/index.routes"));
app.use(require("./routes/turnos.routes"));

// static files
app.use(express.static(path.join(__dirname, "public"))); //significa que todo lo que este en la carpeta "public" estara disponible en cualquier ubicacion del proyecto como el mongodb que configure en el cmd

module.exports = app;