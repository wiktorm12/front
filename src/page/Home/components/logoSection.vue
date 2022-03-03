<template>
    <header class="header">
        <img :src="logo" alt="Logo strony" class="header__logo" />
    </header>
</template>

<script>
export default {
    props: {
        logo: String
    }
}
</script>

<style lang="scss">
    .header{
        position: absolute;
        top: 10px;
        margin-left: 30px;
        width: calc(100% - 30px);
        max-width: 1800px;
        &__logo{
            width: 75px;
            @media (max-width: 1800px){
                width: 70px;
            }
            @media (max-width: 1200px){
                width: 65px;
            }
            @media (max-width: 800px){
                width: 55px;
            }
            @media (max-width: 600px){
                width: 10%;
            }
        }
    }
</style>