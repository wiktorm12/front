<template>
  <div class="fullscreen projects">
    <section class="projects__container">
        <SectionHeading title="Projekty" />
        <ol class="projects__list">
            <li class="projects__item"  v-for="(project, i) in projects" :key="i">
                <header class="projects__item--header">
                    {{project.name}}
                </header>
                <img 
                    :src="project.img" 
                    :alt="project.desc" 
                    class="projects__item--image"
                    @click="href(project.link)"
                />
            </li>
        </ol>
    </section>
  </div>
</template>

<script>
import SectionHeading from './_headerSection.vue';

export default {
    components: {
        SectionHeading
    },
    props: {
        projects: Array
    },
    methods: {
        href(link){
            window.location.href = link;
        }
    }
}
</script>

<style lang="scss" scoped>
    .projects{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 50px;

        &__container{
            width: 100%;
            max-width: 1600px;    
            color: #fff;
            margin-top: 50px;
        }
        &__list{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            @media (max-width: 950px){
                flex-direction: column;
            }
        }
        &__item{
            display: block;
            width: 400px;
            margin: 50px 65px;
            position: relative;
            cursor: pointer;
            padding: 25px 0;
            $border: #fff 4px solid;

            @media (max-width: 1200px){
                width: 350px;
            }
            @media (max-width: 800px){
                width: 250px;
            }

            &::after, &::before{
                position: absolute;
                content: '';
                height: 75%;
                width: 50%;
            }
            &::after{
                border-bottom: $border;
                border-right: $border;
                bottom: -30px;
                right: -30px;
                @media (max-width: 1200px){
                    bottom: -15px;
                }
                @media (max-width: 800px){
                    bottom: -5px;
                }
            }
            &::before{
                border-top: $border;
                border-left: $border;
                top: -30px;
                left: -30px;
                @media (max-width: 1200px){
                    top: -15px;
                }
                @media (max-width: 800px){
                    top: -5px;
                }
            }  

            &--header{
                font-size: 25px;
                font-weight: 300;
                text-align: center;
                margin-bottom: 20px;
                @media (max-width: 1200px){
                    font-size: 23px;
                }
            }
            &--image{
                width: 100%;
            }
        }
    }
</style>