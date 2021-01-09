<h1 align="center"> HOSPITAL </h1> 

Aplicación para sacar Turnos médicos de un hospital

Pueden acceder en el siguiente enlace

https://hospital-app-js.herokuapp.com/



#### Hosting

<p width = "100% " > 
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/0956199e118e92433f203a8a7ac6bd198aac5009/API-IMG/heroku.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/master/API-IMG/mongodbatlas.jpg">
</p >

#### Tecnologías

<p align = "left" width = "100% " > 
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8a2664907714e843fae53a6676f4ebfebd198949/API-IMG/nodejs.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8ecbebde96ae930e669419c541167ae3b062df71/API-IMG/mongodb.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img  width="120px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8a2664907714e843fae53a6676f4ebfebd198949/API-IMG/handlebars.svg">
</p >




<h2 align="center">Desarrollo</h2>


#### Correr

````
npm run dev
````

#### Creación del Proyecto

``````shell
npm init -y
``````

#### Dependencias

````shell
npm i express connect-flash bcryptjs express-handlebars express-session method-override mongoose passport passport-local morgan cross-env
````

#### morgan

Un midelware de desarrollo, para que me muestre por consola todas las peticiones GET, POST

#### Cross-env

Para el entorno de desarrollo y que no haya problemas a la hora de subir a HEROKU

````json
/ En el package.json sirve para definir variables de entorno
"scripts": {
    "start": "cross-env NODE_ENV=production node src/index.js",
    "dev": "cross-env NODE_ENV=development nodemon src/index.js"
},
````
En `index.js` u en la parte donde importes el `dotenv`

````javascript
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config(); // Es que si existe un archivo llamado ".env"
} 
````

#### method-override

El overrade es para poder usar el DELETE en los formularios por defecto no se puede solo te deja GET,POST en el HTML



#### DependenciasDev

````shell
npm install dotenv nodemon npm-check-updates -D
````



### Controlers

Están ahí para que no se llene la definición de la ruta, con las **funciones** solo para eso, yo lo hacia junto pero así es mas escalable

#### Conect flash
Para mostrar mensajes como "respueta enviada,... etc"

### BONUS

Hubo un error con handelbars y la forma mas fácil de resolverla es la siguiente

````javascript
const query = await Note.find().lean()
// Es por el tipo de dato que devuelve mongoose, al usar '.lean()' lo paso a formato JSON y ya no te sale WARNINGS en la consola
````