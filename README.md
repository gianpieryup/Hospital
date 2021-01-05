<h1 align="center"> HOSPITAL </h1> 

Aplicación para sacar Turnos médicos de un hospital

#### Tecnologías

<p align = "left" width = "100% " > 
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8a2664907714e843fae53a6676f4ebfebd198949/API-IMG/nodejs.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img  width="140px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8ecbebde96ae930e669419c541167ae3b062df71/API-IMG/mongodb.svg">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img  width="120px" src="https://raw.githubusercontent.com/gianpieryup/Apuntes/8a2664907714e843fae53a6676f4ebfebd198949/API-IMG/handlebars.svg">
</p >



#### Correr

````
npm start / npm run dev
````

#### Creación del Proyecto

``````shell
npm init -y
``````

#### Dependencias

````shell
npm i express connect-flash bcryptjs express-handlebars express-session method-override mongoose passport passport-local morgan
````

> El overrade es para poder usar el DELETE en los formularios
> por defecto no se puede solo te deja GET,POST en el HTML

#### DependenciasDev

````shell
npm install dotenv nodemon npm-check-updates -D
````



#### Controlers

Están ahí para que no se llene la definición de la ruta, con las **funciones** solo para eso, yo lo hacia junto pero así es mas escalable

#### Conect flash
Para mostrar mensajes como "respueta enviada,... etc"



### BONUS

Hubo un error con handelbars y la forma mas fácil de resolverla es la siguiente

````javascript
const query = await Note.find().lean()
// Es por el tipo de dato que devuelve mongoose, al usar '.lean()' lo paso a formato JSON y ya no te sale WARNINGS en la consola
````