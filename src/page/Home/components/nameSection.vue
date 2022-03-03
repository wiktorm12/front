<template>
    <section class="fullscreen name">
        <h1 class="name__header">
            {{name}}
        </h1>
        <ul class="name__links">
            <LinkNS v-for="(link, i) in links" :key="i" :href="link.href" :name="link.name" :icon="link.icon" />
        </ul>
    </section>
</template>

<script>
import LinkNS from "./_nameSection-link.vue"

export default {
    components: {
        LinkNS
    },
    props: {
        name: String,
        links: Array
    }
}
</script>

<style scoped lang="scss">
    .name{
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &__header{
            display: block;
            font-size: 75px;
            font-weight: 100;
            @media (max-width: 1200px){
                font-size: 70px;
            }
            @media (max-width: 950px){
                font-size: 65px;
            }
            @media (max-width: 800px){
                font-size: 60px;
            }
            @media (max-width: 700px){
                font-size: 55px;
            }
            @media (max-width: 650px){
                font-size: 50px;
            }
            @media (max-width: 600px){
                font-size: 45px;
            }
            @media (max-width: 500px){
                font-size: 40px;
            }
        }
        &__links{
            display: flex;
            justify-content: space-around;
            list-style: none;
            width: 100%;
            max-width: 750px;
            margin-top: 35px;
            @media (max-width: 1200px){
                max-width: 600px;
            }
            @media (max-width: 800px){
                flex-direction: column;
                justify-content: center;
                text-align: center;
            }
        }
    }
</style>