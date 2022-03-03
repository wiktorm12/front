<template>
  <footer class="footer">
      <p class="footer__text">
          {{text}} &copy; {{getYear}}
      </p>
  </footer>
</template>

<script>
export default {
    props: {
        text: String
    },
    computed: {
        getYear: function() {
            const data = new Date();
            return data.getFullYear().toString();
        }
    }
}
</script>

<style lang="scss" scoped>
    .footer{
        padding-top: 20px;
        padding-bottom: 20px;
        letter-spacing: 2px;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
    }
</style>