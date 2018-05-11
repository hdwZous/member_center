<template>
    <div class="black-up" v-if="isShow">
      <div class="layer-bg"></div>
      <div class="black-wrap">
        <div class="black-card">
          <p class="black-title">恭喜您 <br />升级为黑金会员</p>
          <p class="black-subhead">尊享20+项特权，7*24小时专线客服</p>
          <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/black-up/black-privilege-list.png" class="privilege-list">
        </div>
        <div class="black-up-btn" @click="Submit()">激活黑金身份</div>
      </div>
      <div class="layer-close" @click="closeModel"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/layer-close.png"></div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .black-up{position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 99;}
  .layer-bg{position: absolute;background: rgba(0,0,0,0.7);width: 100%;height: 100%;left: 0;top: 0;}
  .black-wrap{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/black-up/black-up-bg.png") center center no-repeat;background-size: 100%;width: 100%;height: 4.12rem;
    position:relative;z-index:2;margin-top:0.5rem;
    /*left:50%;top:42%;transform:translate3d(-50%,-50%,0);-webkit-transform:translate3d(-50%,-50%,0);*/
    .black-card{width: 72%;margin: 0 auto;text-align: center;padding-top: 0.34rem}
    .privilege-list{width: 2rem;margin-top: 0.2rem}
    .black-title{font-size: 0.28rem;font-weight: bold;text-align: left;padding-left: 0.24rem;
      background: linear-gradient(to right, #ffe7ca, #dbb87d);
      background: -webkit-linear-gradient(to right, #ffe7ca, #dbb87d);
      -webkit-background-clip: text;
      color: transparent;}
    .black-subhead{color: #d5ae72;font-size: 0.13rem;padding-left: 0.24rem;text-align: left}
    .black-up-btn{
      position: absolute;bottom: 0.5rem;left: 0;right: 0;margin-left: auto;margin-right: auto;
      text-align: center;color: #000000;font-size: 0.18rem;line-height: 0.45rem;width: 1.85rem;border-radius: 0.45rem;;
      background-image: -webkit-linear-gradient(left,#d39b53 0,#fad69b 100%);
      background-image: linear-gradient(90deg,#d39b53 0,#fad69b 100%);
      box-shadow: 0 0.05rem 0.1rem 0 rgba(0,0,0,0.5);
    }
  }
  .layer-close{width: 0.24rem;margin: 0 auto;position:relative;z-index:2;img{width: 100%}}

</style>
<script>
    export default{
      data(){
        return {
          isShow:false,
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
        Cancel: function () {
          this.isShow = false;
          if(typeof (this.confirmModalOptions.btnCancelFunction)==='function'){
            this.confirmModalOptions.btnCancelFunction()
          }
        },
        Submit: function () {
          this.isShow = false;
          if(typeof (this.confirmModalOptions.btnSubmitFunction)==='function'){
            this.confirmModalOptions.btnSubmitFunction()
          }
        },
      },
    }
</script>
