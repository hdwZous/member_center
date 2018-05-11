<template>
    <div>
      <div class="layer" v-if="isShow">
        <div class="layer-ground"></div>
        <div class="dialog-bet">
          <div class="bat-title">{{confirmModalOptions.title ||'恭喜您成功参与夺宝'}}</div>
          <div class="bet-desc">{{confirmModalOptions.desc}}</div>
          <div class="btn-cont bd-x bd-t">
            <p class="bd-x bd-b text-color-blue" @click="Cancel()">继续参与其他项目</p>
            <p @click="Submit()">去我的夺宝查看</p>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .dialog-bet{width: 3rem;background-color: #ffffff;z-index: 2;position: absolute;top: 50%;left: 50%;transform: translate3d(-50%,-50%,0) scale(1);-webkit-transform: translate3d(-50%,-50%,0) scale(1);text-align: center;}
  .bat-title{font-size: 0.17rem;color: #333333;padding: 0.24rem 0.16rem 0.2rem;}
  .bet-desc{padding: 0 0.16rem 0.2rem;line-height: 0.2rem;}
  .btn-cont{font-size: 0.17rem;line-height: 0.5rem;}
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
              this.confirmModalOptions.btnSubmitFunction()
            }
          }
        },
        components: {

        }
    }
</script>
