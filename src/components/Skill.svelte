<script>
    import ContenedorSkill from './ContenedorSkill.svelte';    //https://es.m.wikipedia.org/wiki/Archivo:HTML5_logo_and_wordmark.svg
    // import {Reobjet} from "./js/convineProgs"
    import {fronted,backend,lowlevel} from "./js/lenguajes"

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