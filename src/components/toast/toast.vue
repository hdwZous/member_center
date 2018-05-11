<template>
  <div class="tip-bg" v-if="isShow">{{tipOption.msg}}</div>
</template>
<style lang="scss" scoped="">
  .tip-bg{position: fixed;left: 50%;top: 50%;transform: translate3d(-50%,-50%,0);-webkit-transform: translate3d(-50%,-50%,0);text-align: center;
    background-color: #000000;z-index: 2;color: #ffffff;padding: 0.1rem 0.2rem;border-radius: 6px;width: 2.8rem}
</style>
<script>
  export default{
    data(){
      return {
        isShow: false
      }
    },
    props: ["tipOption"],
    methods: {
      closeModel: function () {
        this.isShow = false;
      },
      showModel: function () {
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
      },1500)
      },
    },
    components: {

    }
  }
</script>
