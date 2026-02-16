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
                {@render Tecnos(Proy.data.tecs)}
                <p>{Proy.data.description}</p>
            </div>
         </a>
        {/each}
    </div>
</div>

<!-- Remplazar en el futuro -->
{#snippet Tecnos(tecs)} 
    <div class="Tecnos_container">
	{#each tecs as tec }
        <div class="Tecnos" >{tec}</div> 
    {/each}
    </div>
{/snippet}