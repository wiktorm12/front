<template>
    <main class="main">
        <div class="main__icon">
            <font-awesome-icon :icon="faExclamation" />
        </div>
        <h1 class="main__header">
            Wystąpił błąd
        </h1>
        <h2 class="main__subheader">
            Spróbuj ponownie później, bądź skontaktuj się z administratorem.
        </h2>
    </main>
</template>

<script>

    import {faExclamation} from '@fortawesome/free-solid-svg-icons'

    export default{
        data(){
            return{
                faExclamation
            }
        }

    }

</script>

<style scoped lang="scss">
    .main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        min-height: 500px;
        color: #fff;
        background: #06070f;
        &__icon{
            font-size: 65px;
            margin-top: -75px;
            margin-bottom: 20px;
            width: 125px;
            height: 125px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 100%;
            border: 10px solid #fff;
        }
        &__header{
            font-size: 50px;
            text-align: center;
        }
        &__subheader{
            font-size: 18px;
            margin-top: 20px;
            text-align: center;
        }
    }
</style>
