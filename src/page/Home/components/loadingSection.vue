<template>
    <section class="fullscreen load">
        <div class="load__item"></div>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.load{
    display: flex;
    justify-content: center;
    align-items: center;
    &__item{
        width: 3px;
        height: 50px;
        background: #fff;
        animation: 1s spinnow infinite linear;
    }
}
@keyframes spinnow {
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}
</style>