import {BASE } from 'astro:env/client'


let base = "/"+BASE;

const Fronted = `Fronted`
const Backend = `Backend`
const Server  = `Server`
const Bajo_nivel = `Bajo Nivel`

const tipos = [
  Fronted,
  Backend,
  Server,
  Bajo_nivel,
]

const lenguajes = [
  {
    lenguaje: `HTML`,
    tipo:Fronted,
    img: `https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg`,
  },
  {
    lenguaje: `CSS`,
    tipo:Fronted ,
    img: `https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg`,
  },
  {
    lenguaje: `Sass`,
    tipo:Fronted ,
    img: `https://cdn-icons-png.flaticon.com/512/5968/5968358.png   `,
  },
  {
    lenguaje: `JS`,
    tipo: Fronted ,
    img: `https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png`,
  },
  {
    lenguaje: `SVELTE`,
    tipo:Fronted ,
    img: `http://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg`,
  },
  {
    lenguaje: `Nodejs`,
    tipo:Backend ,
    img: `https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg`,
  },
  {
    lenguaje: `Express js`,
    tipo:Backend ,
    img: `${base}/imgs/express-js-logo.png`,
  },
  {
    lenguaje: `Mysql`,
    tipo:Backend ,
    img: `${base}/imgs/Database-mysql.svg`,
  },
  {
    lenguaje: `PocketBase`,
    tipo:Backend ,
    img: `https://pocketbase.io/images/logo.svg`,
  },
  {
    lenguaje: `SVELTE KIT`,
    tipo:Backend,
    img: `http://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg`,
  },
  {
    lenguaje: `C/C++`,
    tipo:Bajo_nivel ,
    img: `https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png`,
  },
  {
    lenguaje: `Linux`,
    tipo:Server,
    img: `https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg`,
  },
  {
    lenguaje: `DOCKER`,
    tipo:Server,
    img: `${base}/imgs/Docker_logo.svg`,
  },
];


export { lenguajes,tipos};
