<script>
    let {imgUrl,alt} =$props(); 
</script>

<div class="ImgFrame">
    <img src="{imgUrl}" alt="{alt}">
</div>

<style>
    .ImgFrame {
        /* border: 1px dashed #fff; */
        overflow: hidden;
        height: 400px;
        width: 80vw;

    }
    img {
        width: 100%;
        height: 100%;
        object-fit:cover ; /* contain */
        object-position: top;
    }
</style>