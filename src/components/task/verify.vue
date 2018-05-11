<template>
    <div>
      <div class="layer" v-if="isShow">
        <div class="layer-ground"></div>
        <div class="dialog-verify">
          <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-id.png" class="label-people">
          <p class="verify-title">请先开通实名认证</p>
          <p class="verify-cont">您的账户尚未实名，无法完成此任务，请先前往实名认证。完成后还可领支付超值大礼包。</p>
          <div class="pop_com_btn df bd-x bd-t">
            <div class="btn fb bd-x bd-r" @click="Cancel">关闭</div>
            <div class="btn blue fb" @click="Submit">去实名</div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .dialog-verify{position: absolute;background-color: #ffffff;width: 2.8rem;left: 50%;top: 50%;transform: translate3d(-50%,-50%,0);-webkit-transform: translate3d(-50%,-50%,0);text-align: center;
    .label-people{width: 1.02rem;margin: 0.24rem auto 0;}
    .verify-title{text-align: center;font-size: 0.17rem;color: #333333;line-height: 0.3rem;margin: 0.1rem auto;}
    .verify-cont{width: 82%;margin: 0.15rem auto 0.3rem;color: #666666;text-align: left;}
    .pop_com_btn {text-align: center;font-size: 0.17rem;color: #666666;;
      line-height: 50px;
      position: relative;
    }
    .blue{    color: #508CEE}
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
          Cancel: function () {
            this.isShow = false;

          },
          Submit: function () {
            this.isShow = false;
            if(typeof (this.confirmModalOptions.btnSubmitFunction)==='function'){
              this.confirmModalOptions.btnSubmitFunction(this.currentNum)
            }
          }
        },
        components: {

        }
    }
</script>
