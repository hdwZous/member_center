<template>
    <div>
      <div class="layer" v-if="isShow">
        <div class="layer-ground"></div>
        <div class="user-right"  :style="{background: 'url(' + confirmModalOptions.cardBg + ') no-repeat center center',backgroundSize:'100% 100%' }">
          <div class="user-right-container">
            <div class="user-right-title">{{confirmModalOptions.cardName}}</div>
            <div class="user-right-cont">{{confirmModalOptions.cardDesc}}</div>
          </div>
          <a class="user-right-btn" :href="confirmModalOptions.cardBtnUrl">{{confirmModalOptions.cardBtnName}}</a>
        </div>
        <div class="layer-close" @click="closeModel"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/layer-close.png"></div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .user-right{background-size: 100%;width: 2.9rem;height: 4.05rem;position: absolute;z-index: 2;color: #ffffff;
    top: 50%;left: 50%;transform: translate3d(-50%,-50%,0) scale(1);-webkit-transform: translate3d(-50%,-50%,0) scale(1);
    .user-right-container{width: 80%;margin: 0 auto;top: 25%;position: relative;}
    .user-right-title{font-size: 0.3rem;font-weight: bold;margin-left: 0.1rem}
    .user-right-cont{line-height: 0.24rem;font-size: 0.13rem;margin-top: 0.2rem}
    .user-right-btn{width: 1.64rem;height: 0.4rem;border: 1px solid #ffffff;border-radius: 0.4rem;line-height: 0.4rem;text-align: center;display: block;color: #ffffff;
      position: absolute;left: 0;right: 0;margin-left: auto;margin-right: auto;
      bottom: 0.5rem;
    }
  }
  .layer-close{width: 0.25rem;height: 0.25rem;position: absolute;bottom: 0.5rem;left: 0;right: 0;margin-left: auto;margin-right: auto;
    img{width: 100%;}
  }
</style>
<script>

    export default{
        data(){
            return {
              isShow: false
            }
        },
        props: ["confirmModalOptions"],
        methods: {
        closeModel: function () {
          this.isShow = false;
        },
        showModel: function () {
          this.isShow = true;
        },
      },
        components: {

        }
    }
</script>
