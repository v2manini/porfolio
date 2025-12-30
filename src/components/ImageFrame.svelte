<script>
    let {imgUrl,alt,CLASS ="ImgFrame"} =$props(); 
</script>

<div class={CLASS}>
    <img loading="lazy" src="{imgUrl}" alt="{alt}">
</div>
<!-- class="{CLASS}"  -->
<style>
    .ImgFrame {
        /* border: 1px dashed #fff; */
        overflow: hidden;
        height: 400px;
        /* width: 80vw; */
        width: 100%;

    }
    img {
        width: 100%;
        height: 100%;
        object-fit:cover ; /* contain */
        object-position: top;
    }
</style>