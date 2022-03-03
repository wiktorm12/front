<template>
    <section class="fullscreen about">
        <SectionHeading title="O mnie" />
        <p class="about__text">
            {{text}}
        </p>
    </section>
</template>

<script>
import SectionHeading from './_headerSection.vue';

export default {
    components: {
        SectionHeading
    },
    props: {
        text: String
    }

}
</script>

<style lang="scss">
    .about{
        padding: 50px;
        &__text{
            margin: auto;
            width: 100%;
            max-width: 1000px;
            color: #fff;
            font-size: 25px;
            font-weight: 300;
            line-height: 35px;
            text-align: justify;
            @media (max-width: 950px){
                font-size: 22px;
            }
            @media (max-width: 800px){
                font-size: 19px;
                line-height: 30px;
            }
            @media (max-width: 600px){
                font-size: 16px;
                line-height: 25px;
            }
        }
    }
</style>