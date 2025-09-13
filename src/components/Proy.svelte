<script>
    let {Proys} = $props();
</script>

<div id="Proyectos" class="">
    <h1>Proyectos</h1>
    {#each Proys as Proy }
    <div class="Proy_containter"> <a href="/proy/{Proy.slug}">
        <h2>{Proy.data.title}</h2>
        <img src={Proy.data.img} alt="" srcset="">
        <p>{Proy.data.description}</p>
        </a>
    </div>
    {/each}
</div>
