<script>
    import ContenedorSkill from './ContenedorSkill.svelte';    //https://es.m.wikipedia.org/wiki/Archivo:HTML5_logo_and_wordmark.svg
    import {Filtro_lenguaje} from "./js/convineProgs"
    import {lenguajes,tipos,} from "./js/lenguajes"

    // console.log("a",Filtro_lenguaje(tipos[2],lenguajes))

</script>


<div id="skill" class="">
    <h1>Habilidades</h1>
    {#each tipos as tipo }
            <ContenedorSkill lenguajes = {Filtro_lenguaje(tipo,lenguajes)} MainTitle={tipo}/>      
    {/each}

</div>