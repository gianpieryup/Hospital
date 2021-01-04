<p align="center" style="font-size:30px;"> HOSPITAL </p> 

Aplicación para sacar Turnos médicos de un hospital

#### Tecnologías

<div class="iconos" style="display:flex; justify-content:Space-around;">
    <img src="nodejs.svg"  width="140px" style="display:block">
    <img src="mongodb.svg" width="140px" style="display:block">
    <img src="handlebars.svg" width="140px" style="display:block">
</div>


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