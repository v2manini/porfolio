<script>
    import IMG from "../components/ImageFrame.svelte";
    let {Proys} = $props();
</script>

<div id="Proyectos" class="">
    <h1>Proyectos</h1>
    <div class="Todos_proy">
        {#each Proys as Proy }
        <a href="/proy/{Proy.slug}">
            <div class="Proy_containter"> 
                <h2>{Proy.data.title}</h2>
                <IMG imgUrl = {Proy.data.img}/>
                <p>{Proy.data.description}</p>
            </div>
         </a>
        {/each}
    </div>
</div>
