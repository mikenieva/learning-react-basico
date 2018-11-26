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


## Conceptos que aprenderás durante el proyecto
 - Instalación y estructura
 - Árbol de Componentes
 - JSX
 - “Functional Components”
 - “Class based Components”
 - Estilos CSS
 - Eventos
 - “State”
 - Ciclo de vida “componentDidMount”


## Iteración 1: Instalación y creación de Header

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
