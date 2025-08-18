<script>
    import ContenedorSkill from './ContenedorSkill.svelte';    //https://es.m.wikipedia.org/wiki/Archivo:HTML5_logo_and_wordmark.svg
    import {Reobjet} from "./js/convineProgs"

    const fronted = [
        {
            lenguaje: "HTML",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
        },
        {
            lenguaje: "CSS",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
        },
        {
            lenguaje: "Sass",
            img: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png   ",
        },
        {
            lenguaje: "JS",
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
            lenguaje: "SVELTE",
            img: "http://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        },
    ];
    const backend = [
        {
            lenguaje: "Nodejs",
            img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        },
        {
            lenguaje: "Mysql",
            img: "/imgs/Database-mysql.svg",
        },
        {
            lenguaje: "SVELTE KIT",
            img: "http://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
        },
    ];
    const lowlevel = [
        {
            lenguaje: "C",
            img: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        },
    ];

    // let todos = [];

    // todos = Reobjet(fronted,todos);
    // todos = Reobjet(backend,todos)
    // todos = Reobjet(lowlevel,todos)

    // console.log(todos)


</script>


<div id="skill" class="">
    <h1>Habilidades</h1>
    <ContenedorSkill lenguajes = {fronted} MainTitle="Fronted"/>
    <ContenedorSkill lenguajes = {backend} MainTitle="Backend"/>
    <ContenedorSkill lenguajes = {lowlevel} MainTitle="Bajo nivel"/>

</div>