# My Music Collection

Ejemplo de backend en node js para el curso de programación web y bases de datos del programa de la Licenciatura en informatica y Medios

## ECMASCRIPT 6

Es un lenguaje de programación basado en Mocha y en este curso utilizaremos el dialecto Javascript el cual será nuestro lenguaje base.

- [ECMASCRIPT](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## Node

es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome. Te permite ejecutar tus aplicativos ECMASCRIPT en tu computador o tu host remoto.

- [Node JS](https://nodejs.org/es/)

## API REST

Es el acrónimo de Representational State Transfer y pretende ser una interfase entre sistemas HTTP que intercambian entre si informacion en formato XML o JSON.

En este curso usaremos el formato JSON por ser natural al momento de procesarlo con ECMASCRIPT en Node.

- [API REST](https://juanda.gitbooks.io/webapps/content/api/arquitectura-api-rest.html)

### Prerequisitos

- Node JS.
- Pc a 64 bits.
- 2 gigas ram.
- SO Linux, Windows, OsX.
- Conceptos básicos de programación.

### Instalación de herramientas de trabajo

- Descargar node en [https://nodejs.org/es/](https://nodejs.org/es/) existen dos versiones, se recomienda la menor por ser mas estable.

- Instalar node [Video hasta el minuto 4:53](https://www.youtube.com/watch?v=mkUcTO2oduE)

- Una vez instalado, ejecutar desde la terminal node -v para comprobar si se está ejecutando correctamente.

## Lección 1

Desde la consola crearemos una carpeta y dentro de ella digitaremos el comando para inicar el proyecto

```
npm init --yes
```

Esto nos debe crear un archivo en la raiz llamado package.json

luego digitaremos el comando para instalar express

```
npm install express
```

crearemos en la raiz una capeta con el nombre de <b>src</b> y dentro de ella crearemos un archivo llamado <b>index.js</b> dentro colocaremos el siguiente código

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/users", (req, res) => {
  let users = [
    { name: "Jhon", lastName: "Doe", age: 30 },
    { name: "María", lastName: "Sharápova", age: 32 }
  ];
  res.send(users);
});
app.listen(3000, () => {
  console.log("Server on port http://localhost:3000");
});
```

Acto seguido ejecutaremos la instrucción para montar el servidor

```
npm src/index.js
```

Luego desde el navegador podremos acceder a las dos rutas que estan programadas

```javascript
app.get("/"...
```

[http://localhost:3000](http://localhost:3000)
<br> y la siguiente

```javascript
app.get("/users"...
```

[http://localhost:3000/users/](http://localhost:3000/users/)

### Video de apoyo

[![ScreenShot](https://i.ytimg.com/vi/kCLojj_u8mA/1.jpg)](https://youtu.be/kCLojj_u8mA)

---

Alexander Toscano Ricardo
<br>Docente

- [atoscano@correo.unicordoba.edu.co](atoscano@correo.unicordoba.edu.co)
- Twitter: [@kikret](@kikret)
- kikret@gmail.com
