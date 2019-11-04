<template>
    <div class="slides">
        <div class="row no-gutters">
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/1.jpg" alt>
                </div>
            </div>
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/2.jpg" alt>
                </div>
            </div>
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/3.jpg" alt>
                </div>
            </div>
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/4.jpg" alt>
                </div>
            </div>
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/5.jpg" alt>
                </div>
            </div>
            <div class="col-2">
                <div class="img-wrapper">
                    <img src="../assets/image/instagram/6.jpg" alt>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'slides'
}
</script>

<style lang="scss" scoped>
    .img-wrapper {
        img {
            width: 100%;
            height: 100%;
        }
    }

    .img-wrapper-inline-block {
        display: inline-block;
        img {
            width: 100%;
        }
    }

</style>