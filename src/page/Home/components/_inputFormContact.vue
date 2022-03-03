<template>
    <input :type="type" :placeholder="label" :aria-label="label" class="input"/>
</template>

<script>
export default {
    props: {
        type: String,
        label: String
    }
}
</script>

<style lang="scss" scoped>
    .input{
        width: 100%;
        background: none;
        border: 2px solid #fff;
        padding: 15px;
        color: #fff;
    }
</style>