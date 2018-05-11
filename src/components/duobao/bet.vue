<template>
    <div>
      <div class="layer" v-if="isShow">
        <div class="layer-ground"></div>
        <div class="dialog-bat">
          <div class="dialog-content">
            <div class="bat-title">
              <h2 class="title">夺宝押注</h2>
              <!--<span class="bet-close"></span>-->
              <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/duobao-close.png" class="bet-close" @click="closeModel">
            </div>
            <section >
              <ul>
                <li class="bd-x bd-b df aic item-con">
                  <div>下注倍数 <span :class="currentNum>=confirmModalOptions.userBettingMultipleMax ? 'text-color-red':''">(最多{{confirmModalOptions.userBettingMultipleMax}}份)</span></div>
                  <div class="fb tr control-mulriple">
                    <a class="btn-minus" @click="minus"></a>
                    <span class="multiple-num" data-multiple="13">{{currentNum}}</span>
                    <a class="btn-plus" @click="plus" :class="currentNum>=confirmModalOptions.userBettingMultipleMax ? 'disabled':''"></a>
                  </div>
                </li>
                <li class="bd-x bd-b df item-con">
                  <div>消耗金币</div>
                  <div class="fb tr">{{confirmModalOptions.userBettingBase*currentNum}}</div>
                </li>
                <li class="bd-x bd-b df item-con">
                  <div>我的金币</div>
                  <div class="fb tr">{{confirmModalOptions.currentAvailableCredit}}</div>
                </li>
              </ul>
            </section>
            <section class="btn-content">
              <div class="button-default button-primary" @click="Submit()">立即夺宝</div>
              <div class="help">夺宝说明：夺宝期间您可花费100倍数的金币参与夺宝，并可参加多次（累计总投注倍数不得超过上限）。若投注结束时，夺宝进度未达100%，则夺宝失败，您参与投注的金币会全部返还。</div>
            </section>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .dialog-bat{width: 3rem;background-color: #ffffff;z-index: 2;position: absolute;top: 50%;left: 50%;transform: translate3d(-50%,-50%,0) scale(1);-webkit-transform: translate3d(-50%,-50%,0) scale(1);}
  .bet-close{width: 0.18rem;position: absolute;right: 0rem;top: 0rem;padding: 0.1rem}
  .dialog-content{padding: 0 0.16rem 0.16rem;line-height: 0.15rem;font-size: 0.14rem;color: #666}
  .bat-title{
    .title{color: #333333;text-align: center;font-size: 0.18rem;height: 0.4rem;padding: 0.1rem 0;line-height: 0.2rem;}
  }
  .item-con{height: 0.4rem;line-height: 0.4rem;}
  .control-mulriple{
    a{ width: 0.2rem;height: 0.2rem;padding: 0.06rem;}
    a.btn-minus::after,a.btn-plus::after {
      content: '';
      width: 0.1rem;
      height: 0.1rem;
      display: inline-block;
    }
    a.btn-minus::after {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhAgMAAAAqiir8AAAACVBMVEUAAACbm5uZmZnjx+YoAAAAAnRSTlMAf7YpoZUAAAAXSURBVBjTYxicYBUUNBBghUKBA8OAAwAVhhopGCCADwAAAABJRU5ErkJggg==);
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center
    }
    a.btn-plus::after {
       background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhAgMAAAAqiir8AAAADFBMVEUAAACampqZmZmZmZliD0t1AAAAA3RSTlMAwPCMMeGMAAAAJklEQVQY02MAAvYvIHIQsEJDQ6N/AgkHhv9QcAAbC6FuELgZzgIAL788wTvGV00AAAAASUVORK5CYII=);
       background-size: 100%;
       background-repeat: no-repeat;
       background-position: center
     }
    a.btn-plus.disabled::after {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhAgMAAAAqiir8AAAADFBMVEUAAADe3t7d3d3d3d1DGdcOAAAAA3RSTlMAwPCMMeGMAAAAJklEQVQY02MAAvYvIHIQsEJDQ6N/AgkHhv9QcAAbC6FuELgZzgIAL788wTvGV00AAAAASUVORK5CYII=)
    }
    .multiple-num{width: 0.3rem; overflow: hidden;text-align: center;display: inline-block;vertical-align: middle;}
  }
  .btn-content{margin-top: 0.15rem;}
  .button-default{width: 100%;height: 0.44rem;line-height: 0.44rem;font-size: 0.17rem;text-align: center;color: #ffffff;}
  .button-primary{
    background-color: #FF9F0A;
    background-image: -webkit-linear-gradient(left,#FF9F0A 0,#FA5212 100%);
    background-image: linear-gradient(90deg,#FF9F0A 0,#FA5212 100%);
    box-shadow: 0 0.02rem 0.04rem 0 #FFD0A8
  }
  .help{color: #aaaaaa;font-size: 0.11rem;margin-top: 0.1rem;}
  .text-color-red{color: #ff3153;}
</style>
<script>

    export default{
        data(){
            return {
              isShow:false,
              currentNum:1,
            }
        },
        props: ["confirmModalOptions"],
        methods: {
          closeModel: function () {
            this.isShow = false;
          },
          showModel: function () {
            this.currentNum = 1;
            this.isShow = true;
          },
          Cancel: function () {
            this.isShow = false;
            if(typeof (this.confirmModalOptions.btnCancelFunction)==='function'){
              this.confirmModalOptions.btnCancelFunction()
            }
          },
          Submit: function () {
            var that = this;
            this.isShow = false;
            if(typeof (this.confirmModalOptions.btnSubmitFunction)==='function'){
              this.confirmModalOptions.btnSubmitFunction(that.currentNum)
            }
          },
          minus: function () {
            if(this.currentNum>1){
              this.currentNum-=1;
            }
          },
          plus: function () {
            if(this.currentNum<this.confirmModalOptions.userBettingMultipleMax){
              this.currentNum+=1;
            }
          }
        },
        components: {

        }
    }
</script>
