<template>
  <li class="name-link">
      <a :href="href">
            <iconFromString :name="icon" />
            <span class="name-link__name">
                {{name}}
            </span>
      </a>
  </li>
</template>

<script>
import iconFromString from './_iconFromString.vue'


export default {
    components: {
        iconFromString
    },
    props:{
        href: String,
        name: String,
        icon: String
    }
}
</script>

<style scoped lang="scss">
    .name-link{
        a{
            color: #cee6f1;
            text-decoration: none;
            display: block;
            padding: 0 10px;
            padding-bottom: 10px;
            font-size: 18px;
            @media (max-width: 1200px){
                font-size: 16px;
            }
            @media (max-width: 950px){
                font-size: 14px;
            }
        }
        &__name{
            margin-left: 5px;
        }
        &:hover{
            border-bottom: 1px solid #a6edf7;
            a{
                padding-bottom: 9px;
            }
        }
    }
</style>