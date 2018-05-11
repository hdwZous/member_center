<template>
    <div>
      <div class="dialog-container" v-if="isShow">
        <div class="dialog-cover"></div>
        <div class="dialog-confirm">
          <div class="dialog-inner">
            <div class="dialog-content ">{{confirmModalOptions.detail}}</div>
          </div>
          <div class="bd-x bd-t df dialog-btn">
            <div class="bd-x bd-r fb" v-if="confirmModalOptions.btnCancelText" @click="Cancel">{{confirmModalOptions.btnCancelText}}</div>
            <div class="fb blue" v-if="confirmModalOptions.btnConfirmText" @click="Submit">{{confirmModalOptions.btnConfirmText}}</div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .dialog-container{position: fixed;left: 0;top: 0;width: 100%;height: 100%;z-index: 9;}
  .dialog-cover{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .dialog-confirm{background-color: #ffffff;position: absolute;width: 2.8rem;
    left: 50%;top: 50%;transform: translate3d(-50%,-50%,0);-webkit-transform: translate3d(-50%,-50%,0);
  }
  .dialog-inner {text-align: center;}
  .dialog-title { position: relative;padding: .78125rem 0; font-size: 0.17rem;  line-height: 0.28rem;  color: #333;  text-align: center  }
  .dialog-content { padding: 0.24rem;line-height: 0.28rem;font-size: 0.17rem;color: #666}
  .dialog-btn{line-height: 0.5rem;text-align: center;font-size: 0.17rem;color: #666666;}
  .blue{    color: #508CEE}
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
          if(typeof (this.confirmModalOptions.btnCancelFunction)==='function'){
            this.confirmModalOptions.btnCancelFunction()
          }
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
