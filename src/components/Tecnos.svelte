<script>
    let {Tecs = []} =$props(); 
</script>


<div class="Tecnos_container">
	{#each Tecs as tec }
        <div class="Tecnos" >{tec}</div> 
    {/each}
</div>

<style>
    .Tecnos{
        padding: 1%;
        font-size: 1.3rem;
        background-color:#0f3146;
        color: #ffff;
        font-family: 'Courier New', monospace;
        font-style: italic;
        
    }
</style>