<template>
    <div>
      <div class="layer" v-if="isShow">
        <div class="layer-ground"></div>
        <div class="task-cont">
          <span class="pop_top_label" v-if="confirmModalOptions.frequencyType">{{taskType[confirmModalOptions.frequencyType]}}</span>
          <!--<span class="pop_top_label" v-if="confirmModalOptions.promotionTag">{{promotionType[confirmModalOptions.promotionTag]}}</span>-->
          <span class="pop_top_left_label" v-if="confirmModalOptions.status == 2"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-complete.png"></span>
          <div class="pop_com_show">
            <img class="pop_com_img width90" :src="confirmModalOptions.imgSrc" alt="">
            <div class="pop_com_title">{{confirmModalOptions.name}}</div>
            <div class="pop_com_subtitle">{{confirmModalOptions.awardName}}</div>
            <div class="pop_com_label">任务说明</div>
            <div class="pop_com_label_desc">{{confirmModalOptions.taskDesc}}</div>
            <div class="pop_com_label">当前状态</div>
            <div class="pop_com_label_desc f12" v-if="confirmModalOptions.status == -1">未领取任务</div>
            <div v-else="">
              <div v-if="confirmModalOptions.scheduleTargetValue">
                <div class="pop_com_label_desc f12">已完成<i>{{confirmModalOptions.scheduleNowValue}}/{{confirmModalOptions.scheduleTargetValue}}</i></div>
                <div class="progress-wrap">
                  <div class="progress progressIn" :style="'width:'+ confirmModalOptions.schedulePercent*100 + '%'"></div>
                </div>
              </div>
              <div v-else="" class="pop_com_label_desc f12" >进行中</div>
            </div>
          </div>
          <div class="pop_com_btn df bd-x bd-t">
            <div class="btn fb bd-x bd-r" @click="Cancel" v-if="confirmModalOptions.status !== 2">关闭</div>
            <div class="btn blue fb" @click="Submit" v-if="confirmModalOptions.status == -1">去做任务</div>
            <div class="btn blue fb" @click="Submit" v-if="confirmModalOptions.status == 0">继续完成</div>
            <div class="btn orange fb" @click="Submit" v-if="confirmModalOptions.status == 1">领取奖励</div>
            <div class="btn blue fb" @click="Cancel" v-if="confirmModalOptions.status == 2">我知道了</div>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="scss" scoped>
  @import '../../style/common.scss';
  .layer{position: fixed;width: 100%;height: 100%;left: 0;top: 0;z-index: 9;}
  .layer-ground{position: absolute;background-color: rgba(0,0,0,0.7);width: 100%;height: 100%;}
  .task-cont{width: 2.8rem;background-color: #ffffff;position: absolute;z-index: 2;
    overflow: hidden;
    top: 50%;left: 50%;transform: translate3d(-50%,-50%,0) scale(1);-webkit-transform: translate3d(-50%,-50%,0) scale(1);}
  .pop_com_show{   padding: 0 24px 24px;
    overflow: hidden;
    text-align: center;
    max-height: 300px;
    overflow-y: scroll;
    border-top: 24px solid transparent;
    position: relative}
  .pop_top_label{display: block;    padding: 0 4px;
    position: absolute;
    font-size: 10px;
    line-height: 18px;
    background: #508CEE;
    color: #fff;
    right: 24px;
    text-align: center;
    top: 0}
  .pop_top_left_label{position: absolute;width: 0.65rem;img{width: 100%;}}
  .pop_com_img{margin: 0 auto 12px;width: 45px;}
  .pop_com_title{ font-size: 18px;line-height: 25px;color: #333;margin-bottom: 2px;}
  .pop_com_subtitle{  font-size: 12px;
    line-height: 20px;
    color: #FF801A;
    margin-bottom: 12px}
  .pop_com_label{  font-size: 14px;
    line-height: 22px;
    color: #666;
    margin-bottom: 2px;
    text-align: left}
  .pop_com_label_desc{   font-size: 12px;
    color: #999;
    text-align: justify;
    line-height: 20px;
    margin-bottom: 6px;
    letter-spacing: .4px;
    word-wrap: break-word;
    word-break: break-all}
  .pop_com_label{ font-size: 14px;
    line-height: 22px;
    color: #666;
    margin-bottom: 2px;
    text-align: left}
  .progress-wrap{   height: 10px;
    background: #eee;
    border-radius: 5px;
    margin: 10px 0}
  .progress-wrap .progress {
    width: 50%;
    height: 10px;
    border-radius: 5px;
    background: #508CEE
  }
  .pop_com_btn {
    line-height: 50px;
    position: relative;
  }

  .btn {
    font-size: 18px;
    width: 0;
    text-align: center;
    display: block;
    -webkit-box-flex: 1;
    background: #fff;
    position: relative;
    color: #666
  }
  .blue{    color: #508CEE}
  .orange{    color: #FF801A;}
</style>
<script>

    export default{
        data(){
            return {
              isShow: false,
              taskType:['一次性任务','日任务','周任务','月任务'],
              //promotionType:['新任务','火热任务','超级任务','奖励加磅']
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
