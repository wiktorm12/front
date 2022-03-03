<template>
    <h3 class="heading">
        {{title}}
    </h3>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss">
    .heading{
        color: #fff;
        text-align: center;
        font-size: 50px;
        font-weight: 100;
        position: relative;
        margin-bottom: 50px;

        @media (max-width: 950px){
            font-size: 45px;
        }
        @media (max-width: 700px){
            font-size: 45px;
        }


        &::after, &::before{
            position: absolute;
            content: '';
            width: 150px;
            height: 1px;
            top: 50%;
            background: #fff;
            @media (max-width: 700px){
                width: 100px;
            }
            @media (max-width: 400px){
                width: 75px;
            }
        }
        &::before{
            margin-left: -175px;
            @media (max-width: 700px){
                margin-left: -125px;
            }
            @media (max-width: 400px){
                margin-left: -100px;
            }
        }
        &::after{
            margin-left: 25px;
        }            
    }
</style>