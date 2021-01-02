require('dotenv').config();  // Es que si existe un archivo llamado ".env" va asignar las variables de entorno

const app = require('./server');
require('./database');

console.log(process.env.TESTING);

// Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
    console.log('Environment:', process.env.NODE_ENV);
});