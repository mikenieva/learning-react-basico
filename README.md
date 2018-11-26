# Introducción a React

En este proyecto, nos introduciremos en React. Una de las librerías más populares para desarrollar interfaces de usuario y construcción de componentes.


## Sobre el proyecto

Construiremos una página de aterrizaje para un artista llamado Kygo. Para ello, deberás completar todas las iteraciones.

Si quieres ver el demo, puedes [acceder aquí](https://mikenieva.github.io/react-basico/) o instalar el proyecto en tu computadora de este modo:

1. Clonar el proyecto o descargarlo vía zip.
2. Situarte en la carpeta del proyecto, dentro de tu terminal.
3. Instalar todos las dependencias del proyecto, a través del comando en terminal:

`$ npm install`

4. Correr el proyecto:

`$ npm start`


## Conceptos que aprenderás o repasarás durante el proyecto
 - Instalación y estructura (NPM, create-react-app)
 - Árbol de Componentes
 - JSX
 - “Functional Components”
 - “Class based Components”
 - Estilos CSS
 - Eventos
 - “State”
 - Ciclo de vida “componentDidMount”


## Iteración 1: Instalación y creación de Header

1. Crea una aplicación con `create-react-app`

`$ create-react-app kygolanding`

2. Revisamos con `npm start` si el proyecto levanta exitosamente. Si todo bien, seguimos.

Instalaremos estas librerías adicionales:

`npm install @material-ui/core@1.2.0 @material-ui/icons@1.1.0`

 En ella incluimos:

- Material UI Core
- Material UI Icons

Ahora, agregaremos una carpeta llamada "resources" dentro del proyecto. Esta incluirá:

a) styles.css
b) images

Vamos a borrar los archivos dentro de `src`:

- App.css
- App.test.js
- index.css
- logo.svg
- registerServiceWorker.js

Y, nos quedaremos únicamente con:

src
|- resources
|- App.js
|- index.js

Y, vamos a eliminar líneas que ya no necesitaremos. Dentro de index.js, nos quedamos con:

~~~~
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
~~~~

Y en App.js:

~~~~
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        hello
      </div>
    );
  }
}

export default App;
~~~~

Con esto, obtenemos en el navegador el mensaje de "hello":

![Image of Yaktocat](./docs/hello.png)


## Iteración 2: Cuenta regresiva

## Iteración 3: Venue e información

## Iteración 4: Precios

## Iteración 5: Footer

## Iteración 6: Despliegue en GitHub Pages (Deploy)

Para realizar el despliegue de tu proyecto, deberás:

1. Instalar la librería gh-pages a través de tu terminal

`$ npm install gh-pages --save-dev`

Recuerda que el `--save-dev` implica que es una dependencia de sólo tu ambiente de desarrollo.

2. Agregarás en tu archivo `package.json` en el nivel más alto:

~~~~
//...
"homepage": "http://TUCUENTAGITHUB.github.io/TUPROYECTO"
~~~~

Recuerda que en "TUCUENTAGITHUB" lo sustituirás por el nombre de tu cuenta en GitHub. En mi caso sería "mikenieva".

En la parte de "TUPROYECTO" se refiere al nombre del repositorio en GitHub. En mi caso, el nombre es "react-basico".

1. Dentro de tu `package.json`, deberás buscar la propiedad "scripts" y dentro de la misma le colocarás dos propiedades con su valor respectivo:

~~~~
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
~~~~

Recuerda inicializar Git dentro de tu proyecto.

~~~~
git init
~~~~

Conectarte remotamente al repositorio, puede ser vía SSH o HTTPS, en este caso lo haremos con la segunda:

~~~~
$ git remote add origin https://github.com/TUCUENTAGITHUB/TUPROYECTO.git
~~~~

Corremos el comando:

`$ npm run deploy`

Y listo. Accede a tu primer proyecto de React en producción. 

NOTA: Si obtienes un error, agrega la diagonal (/) a tu dirección web al final para que no te muestre un error 404.

Ejemplo:

👎 https://mikenieva.github.io/react-basico

✅ https://mikenieva.github.io/react-basico/


# Recursos adicionales

- Documentación oficial de ReactJS
- Curso de React.js en Platzi
