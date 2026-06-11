<script>
    let {lenguajes,MainTitle} = $props();
</script>

<div class="ContenedorSkill">
    <h2>{MainTitle}</h2>
    <div class="contenedorskill">
        {#each lenguajes as lenguaje}
        <div class="Prog_lenguajes">
            <img loading="lazy" class="Prog_logo idleAnim"  src="{lenguaje.img}" alt="Logo de {lenguaje.lenguaje}" >
            <h2>{lenguaje.lenguaje}</h2>
        </div>
        {/each}
    </div>
</div>

<style lang="scss">
    $caja: 8rem; //12.5rem  5rem
    $maxImag:65% ; // 75%

    .ContenedorSkill{
        margin-bottom: 4%;
    }
    .contenedorskill{
        display: flex;
        flex-direction: row;
        gap:1rem;
        text-align: center;
        flex-wrap: wrap;
    }
    .Prog_lenguajes {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        // border-style: dashed;
        padding: 2% 1% 1% 1%;
        height: $caja;
        width:  $caja;
        // background-color: rgba(0, 0, 0, 0.193);

        h2{
            font-family: monospace;
        }
    }
    .Prog_logo{
        // max-height: $maxImag;
        // min-width:8rem;
        // min-height: 60px;
        // min-width: 60px;
        max-height: $maxImag;
        // aspect-ratio: 1/1 ;
        // object-fit: cover;
        transition: 0.3s;
        &:hover {
            scale: 1.3;
        }
    }
</style>