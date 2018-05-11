<template>
    <div class="layer" v-if="show">
      <div class="layer-ground"></div>
      <div class="layer-container">
        <div class="layer-cont">
          <div class="" style="width: 60%;margin: 0 auto;padding-top: 0.4rem">
            <p class="f28 fwb">恭喜您</p>
            <p class="f28 fwb">升级为铂金会员</p>
            <p class="f13">您将享受如下特权</p>
            <ul class="df tc privilege-list">
              <li class="fb">
                <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/icon-earn.png">
                <p class="fwb f13 mt05">收益提速</p>
                <p class="fwb f10">最高20%</p>
              </li>
              <li class="fb">
                <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/icon-express.png">
                <p class="fwb f13 mt05">购物免运费</p>
                <p class="fwb f10">享运费补贴</p>
              </li>
              <li class="fb">
                <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/icon-pay.png">
                <p class="fwb f13 mt05">支付返现</p>
                <p class="fwb f10">最高1%</p>
              </li>
            </ul>
            <div class="btn-active"><span>激活铂金身份</span></div>
          </div>

        </div>
        <div class="layer-close"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/layer-close.png"></div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .layer-cont{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/grade/layer-upgrade.png") center center no-repeat;width: 100%;height: 4.34rem;background-size: 100%;z-index: 2;color: #78482f;;
    /*position: absolute;top:50%;margin-top: -2.5rem;*/
  }
  .layer-close{width: 0.23rem;margin: 0 auto;img{width: 100%}}
  .layer-container{position: relative;left: 50%;top: 50%;transform: translate3d(-50%,-50%,0);-webkit-transform: translate3d(-50%,-50%,0);}
  .f28{font-size: 0.28rem;}
  .privilege-list{margin-top:0.25rem;
    img{width: 0.35rem;}
  }
  .btn-active{position: absolute;width: 1.86rem;height: 0.45rem;line-height: 0.45rem;font-size: 0.18rem;font-weight: bold;border-radius: 0.45rem;text-align: center;bottom: 1rem;;
    background: -moz-linear-gradient(45deg, rgba(248,223,196,1) 0%, rgba(219,178,146,1) 100%); /* ff3.6+ */
    background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(248,223,196,1)), color-stop(100%, rgba(219,178,146,1))); /* safari4+,chrome */
    background: -webkit-linear-gradient(45deg, rgba(248,223,196,1) 0%, rgba(219,178,146,1) 100%); /* safari5.1+,chrome10+ */
    background: -o-linear-gradient(45deg, rgba(248,223,196,1) 0%, rgba(219,178,146,1) 100%); /* opera 11.10+ */
    background: -ms-linear-gradient(45deg, rgba(248,223,196,1) 0%, rgba(219,178,146,1) 100%); /* ie10+ */
    background: linear-gradient(45deg, rgba(248,223,196,1) 0%, rgba(219,178,146,1) 100%); /* w3c */
    span{
      background: linear-gradient(45deg, #78482f 0%, #a06530 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }
  }
</style>
<script>
    export default{
        data(){
            return{
              show:false
            }
        },
        components:{

        }
    }
</script>
