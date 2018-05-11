<template>
    <div class="wrap">
      <section class="head" :class="headBgType[userType]">
        <div class="gap"></div>
        <!--<div :class="{ blackWhite: isBlackWhite ,moveFromLeft:blackUpTimeout}">-->
          <div class="card" :class="{ blackWhite: isBlackWhite ,moveFromLeft:blackUpTimeout}">
            <div class="user-info df aic">
              <div class="user-head" v-if="userInfo.yunSmaImageUrl"><img :src="userInfo.yunBigImageUrl" ></div>
              <div class="user-head-default" v-else=""><img :src="userInfo.gendar == 1 ? 'https://static.360buyimg.com/finance/mobile/financial/member_center/images/userhead-girl.png':'https://static.360buyimg.com/finance/mobile/financial/member_center/images/userhead-boy.png'" ></div>
              <div class="ml10 mr16" :class="isStudent?'':'mr66'">
                <div>
                  <p class="label-type"></p>
                  <p class="label-student ml05" v-if="isStudent"></p>
                </div>
                <div class="bar"><div class="progress"  :style="'width:'+ GradeValue.currentSumValue + '%'" v-if="GradeValue.currentSumValue"></div></div>
                <a class="f12 arrow-upexp" href="http://vip.jr.jd.com/m/member/index" clstag="jr|keycount|jrviph5|newbutton01" v-if="GradeValue.currentSumValue">
                  <span class="vam">UP指数{{GradeValue.currentSumValue}}%</span>
                </a>
                <a class="f12 arrow-upexp" href="http://vip.jr.jd.com/m/member/index" clstag="jr|keycount|jrviph5|newbutton01" v-else="">
                  <span class="vam">暂无UP指数</span>
                </a>
              </div>
            </div>
            <div class="userOwn df">
              <a class="dlb w40" href="https://m.jr.jd.com/mjractivity/rn/coupon-rn/index.html?RN=coupon-rn" clstag="jr|keycount|jrviph8|newbutton04">
                <p class="f24 DIN-MEDIUM">{{couponCount}}</p>
                <p class="userOwn-desc">卡券</p>
              </a>
              <a class="dlb w40" href="https://coin.jd.com/m/gb/index.html" clstag="jr|keycount|jrviph7|newbutton03">
                <p class="f24 DIN-MEDIUM">{{BigDecimal}}</p>
                <p class="userOwn-desc">钢镚</p>
              </a>
              <a class="dlb w27" href="https://vip.jr.jd.com/gcmall/index.html" clstag="jr|keycount|jrviph6|newbutton02">
                <p class="f24 DIN-MEDIUM">{{goldCoinCount}}</p>
                <p class="userOwn-desc">金币</p>
              </a>
            </div>
          </div>
          <div :class="{ blackWhite: isBlackWhite ,moveFromLeft:blackUpTimeout}" class="btn-bottom">
            <!--这个是黑金会员卡片-->
            <template v-if="userType == 3">
              <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="jumpWeb('https://m.jr.jd.com/mjractivity/rn/niello_members_center/index.html?RN=niello_members_center&page=FxDetail')"  v-if="unDrawRebates"><span class="f18">领取 {{unDrawRebates}} 笔返现</span></div>
              <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="jumpWeb('https://m.jr.jd.com/mjractivity/rn/niello_members_center/index.html?RN=niello_members_center')"  v-else=""><span class="f18">查看我的黑金特权</span></div>
            </template>

            <!--这个是非黑金会员的卡片-->
            <template v-else="">
              <!--铂金会员或铂金体验-->
              <template v-if="userType == 2 || userType == 5">
                <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="jumpWeb('https://m.jr.jd.com/mjractivity/rn/platinum_members_center/index.html?RN=platinum_members_center&page=FXDetailPage')"  v-if="unDrawRebates"><span class="f18">领取 {{unDrawRebates}} 笔返现</span></div>
                <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="jumpWeb('https://m.jr.jd.com/mjractivity/rn/platinum_members_center/index.html?RN=platinum_members_center')"  v-else=""><span class="f18">查看我的铂金特权</span></div>
              </template>

              <!--金融新人或黄金会员-->
              <template v-else="">
                <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="showBlackUpLayer" v-if="isBlackWhite" ><span class="f18">激活黑金会员</span></div>
                <div class="btn-main" clstag="jr|keycount|jrviph9|newbutton05" @click="jumpWeb('https://m.jr.jd.com/mjractivity/rn/platinum_members_center/index.html?RN=platinum_members_center')"  v-else=""><span>升级为铂金会员，每日领现金</span></div>
              </template>

            </template>

          </div>

        <!--</div>-->

        <!--如果黑金会员白名单，这个是黑金的动画-->
        <div class="black-up-card" v-if="isBlackWhite " :class="{moveToRight:blackUpTimeout}">
          <div class="black-up-bg">
            <div :class="{toHide : blackUpTimeout} ">
              <p class="black-up-title">激活黑金会员<br>可享受以下特权</p>
              <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/black-up/black-privilege-list.png" class="privilege-list">
            </div>
            <div class="text-black-up" :class="{toShow : blackUpTimeout}" @click="showBlackUpLayer"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/text-black-up.png"></div>
          </div>
          <div class="black-up-btn" ><span>立即激活</span></div>
        </div>
      </section>
      <!--权益-->
      <section class="right" >
        <ul class="text-color-33 f12 tc right-list" style="height: 1.15rem;overflow-y: hidden;padding-bottom: 130px;">
          <li v-for="(item,index) in memberRightPM" @click="showRightDetail(item)" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+9)">
            <img :src="item.imageUrl">
            <p>{{item.name}}</p>
          </li>
        </ul>
      </section>
      <!--主banner-->
      <div class="space"></div>
      <section>
        <a :href='headAdPM.linkUrl' class="dlb" clstag="jr|keycount|jrviph5|newbutton20"><img :src='headAdPM.imageUrl' class="w100h"/></a>
      </section>
      <div class="space" v-if="isStudent"></div>
      <!--校园精品-->
      <section class="pl15 pr15 pt20" v-if="isStudent">
        <p class="f21 fwb">校园精品</p>
        <p class="text-color-99">学生专享活动，为您的大学生涯积累财富值</p>
        <div class="pt10 pb10">
          <!--<div class="swiper-container" >
            <div class="swiper-wrapper">
              <div class="swiper-slide " v-for="item in campusAdPM">
                <a :href='item.linkUrl'><img :src="item.imageUrl" class="w100h"/></a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>-->
          <swiper :options="swiperOption"  ref="mySwiper">
            <!-- 这部分放你要渲染的那些内容 -->
            <swiper-slide v-for="(item,index) in campusAdPM" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+21)">
              <a :href='item.linkUrl'><img :src="item.imageUrl" class="w100h"/></a>
            </swiper-slide>
            <!-- 这是轮播的小圆点 -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </section>
      <div class="space"></div>
      <!--会员优选-->
      <section class="pt20">
        <p class="pl15 f21 fwb">会员优选</p>
        <p class="pl15 text-color-99">根据你的UP指数，为您精选以下优秀活动~</p>
        <div class="member-wrapper">
          <ul class="member-list pt10 pb20 pl15" >
            <li class="tc pr" v-for="(item,index) in memberPreferencePM" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+25)">
              <a class="dlb text-color-white" :href="item.linkUrl">
                <img :src="item.imageUrl">
                <p class="name">{{item.name}}</p>
                <p class="desc" v-if="item.param">{{item.param.FQextend}}</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div class="space"></div>
      <!--乐享UP指数-->
      <section class="pl15 pr15 pb08 pt20">
        <p class="f21 fwb">乐享UP指数</p>
        <p class="text-color-99">你的UP指数是多少？指数越高，福利越多哦！</p>
        <div class="exp mt10 df aic" :class="userInfo.gendar == 1 ? 'exp-girl-bg':'exp-boy-bg'" >
          <div class="exp-left">
            <div class="tc">
              <div v-if="GradeValue.currentSumValue"><span class="exp-num DIN-MEDIUM">{{GradeValue.currentSumValue}}</span>%</div>
              <div class="f20" v-else="">暂无</div>
              <p class="exp-desc">up指数</p>
            </div>
          </div>
          <div class="fb tc exp-right">
            <p class="time">{{GradeValue.lastGradeValueYearMonth}} — {{GradeValue.currentGradeValueYearMonth}}</p>
            <div class="f12" v-if="GradeValue.sumDifferenceSymbol"><span class="vam">比上月</span> <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-down.png" class="icon-grade" :class="GradeValue.sumDifferenceSymbol == 1 ? 'icon-grade-up':''"> <span class="vam">{{GradeValue.sumDifferenceValue}}%</span></div>
            <div class="f12" v-else=""><span class="vam">与上月持平</span></div>
            <a class="btn-check" href="http://vip.jr.jd.com/m/member/index" clstag="jr|keycount|jrviph5|newbutton35">查看详情</a>
          </div>
        </div>
      </section>
      <!--做任务提高UP-->
      <section class="pb10">
        <div class="pr pl15 pr15 ">
          <div class="subhead f14 text-color-33" :class="userInfo.gendar == 1 ? 'subhead-girl':'subhead-boy'">#做任务指数UP</div>
          <a class="tr button-arrow-right btn-normal mr16" clstag="jr|keycount|jrviph5|newbutton36" :href="isApp ? 'https://m.jr.jd.com/vip/missionCenter/html/index.html?channel=JR_APP&platformCode=2':'https://m.jr.jd.com/vip/missionCenter/html/index.html?channel=M&platformCode=4'">
            <span class="vam f14">全部任务</span>
          </a>
        </div>
        <div class="pr mt06">
          <ul class="task-list">
            <li class="df aic" v-for="(item,index) in mission" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+37)">
              <div class="fb mt-04 mission-left" @click="checkTaskDetail(item,index)" style="flex-grow:1;flex-shrink:1;flex-basis:0;">
                <p class="f15 text-color-black fwb">{{item.name}}</p>
                <div class="text-color-99 f12 ">
                  <p class="dlb" v-if="JSON.parse(item.rewardInfo).describeOne">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-jb.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 1">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-jd.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 2">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-gb.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 3">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-coupon.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 4">
                    <!--<span>{{JSON.parse(item.rewardInfo).describeOne}}{{taskRewardInfo[JSON.parse(item.rewardInfo).rewardTypeOne]}}</span>-->
                    <span class="dlb vam">{{JSON.parse(item.rewardInfo).describeOne}}</span>
                  </p>
                  <p class="dlb ml10" v-if="JSON.parse(item.rewardInfo).describeTwo">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-jb.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 1">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-jd.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 2">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-gb.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 3">
                    <img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-award/icon-coupon.png" style="width: 0.15rem;" v-if="JSON.parse(item.rewardInfo).rewardTypeOne == 4">
                    <!--<span>{{JSON.parse(item.rewardInfo).describeTwo}}{{taskRewardInfo[JSON.parse(item.rewardInfo).rewardTypeTwo]}}</span>-->
                    <span class="dlb vam">{{JSON.parse(item.rewardInfo).describeTwo}}</span>
                  </p>
                </div>
                <div class="label mt05">
                  <label v-if="item.frequencyType">{{taskFrequenceType[item.frequencyType]}}</label>
                  <label class="redLabel" v-if="item.promotionTag">{{taskPromotionTag[item.promotionTag]}}</label>
                </div>
              </div>
              <div class="tc mt-04" v-if="item.status == -1">
                <div @click="receiveTask(item.missionId,item.jrAppLink)" class="btn-task f13" :class="userInfo.gendar == 1 ? 'btn-gradient-red':'btn-gradient-blue'">去做任务</div>
              </div>
              <div class="tc mt-04" v-if="item.status == 0">
                <a :href="item.jrAppLink" class="btn-task f13" :class="userInfo.gendar == 1 ? 'btn-gradient-red':'btn-gradient-blue'">继续完成</a>
                <p class="mt05 f11 text-color-99" v-if="item.scheduleTargetValue">已完成{{item.scheduleNowValue}}/{{item.scheduleTargetValue}}</p>
              </div>
              <div class="tc mt-04" v-if="item.status == 1">
                <div class="btn-gradient-orange btn-task f13" @click="getReward(item.missionId,index)">领取奖励</div>
              </div>
              <div class="tc mt-04" v-if="item.status == 2">
                <div class="text-color-99 tr f13">已完成</div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <!--专属UP计划-->
      <section class="pl15 pr15 pb20">
        <div class="pr">
          <div class="subhead f14 text-color-33" :class="userInfo.gendar == 1 ? 'subhead-girl':'subhead-boy'">#专属UP计划</div>
          <div class="tr button-refresh btn-normal" @click="refreshUp" clstag="jr|keycount|jrviph5|newbutton46">
            <span class="vam f14">换一批</span>
          </div>
        </div>
        <div class="pr df mt12">
          <div class="plan-left">
            <div class="plan-left-bg" :style="{background: 'url(' + ExclusiveUpPlanPM[current][0].imageUrl + ') no-repeat center center',backgroundSize:'100% 100%' }">
              <a class="dlb plan-left-cover" :href="ExclusiveUpPlanPM[current][0].linkUrl"  :clstag="UpPlanPMClatag[current][0]">
                <!--<div class="plan-left-cover">-->
                  <p class="f16 fwb">{{ExclusiveUpPlanPM[current][0].name}}</p>
                  <p class="f12" v-if="ExclusiveUpPlanPM[current][0].param">{{ExclusiveUpPlanPM[current][0].param.FQextend}}</p>
                <!--</div>-->
              </a>
            </div>
            <div class="plan-left-bg mt05" :style="{background: 'url(' + ExclusiveUpPlanPM[current][1].imageUrl + ') no-repeat center center',backgroundSize:'100% 100%' }">
              <a class="dlb plan-left-cover" :href="ExclusiveUpPlanPM[current][1].linkUrl" :clstag="UpPlanPMClatag[current][1]">
                <!--<div class="plan-left-cover">-->
                  <p class="f16 fwb">{{ExclusiveUpPlanPM[current][1].name}}</p>
                  <p class="f12" v-if="ExclusiveUpPlanPM[current][1].param">{{ExclusiveUpPlanPM[current][1].param.FQextend}}</p>
                <!--</div>-->
              </a>
            </div>
          </div>
          <div class="fb plan-right">
            <div class="plan-right-one" :style="{background: 'url(' + ExclusiveUpPlanPM[current][2].imageUrl + ') no-repeat center center',backgroundSize:'100% 100%' }">
              <a class="dlb" :href="ExclusiveUpPlanPM[current][2].linkUrl" :clstag="UpPlanPMClatag[current][2]">
                <div class="dlb plan-left-cover" >
                  <p class="f16 fwb">{{ExclusiveUpPlanPM[current][2].name}}</p>
                  <p class="f12" v-if="ExclusiveUpPlanPM[current][2].param">{{ExclusiveUpPlanPM[current][2].param.FQextend}}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <!--UP福利专区-->
      <section class="pl15 pr15">
        <div class="pr">
          <div class="subhead f14 text-color-33" :class="userInfo.gendar == 1 ? 'subhead-girl':'subhead-boy'" v-show="exchangeGoodsList || snatchList">#UP福利专区</div>
          <a class="tr button-arrow-right btn-normal" href="https://m.jr.jd.com/vip/goldcoin/html/goldMall.html?sid=" clstag="jr|keycount|jrviph5|newbutton53" v-show="snatchList && snatchList.length">
            <span class="vam">更多夺宝</span>
          </a>
        </div>
        <!--夺宝-->
        <ul class="content-list duobao-list" >
          <li class="df bd-x bd-b" v-for="(item,index) in snatchList" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+54)">
            <a :href="item.mLink" :style="{background:'url('+item.appIcon+')',backgroundSize:'100% 100%'}" class="item-img">
              <div class="item-label"><img src="https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-duobao.png"></div>
              <div class="item-countdown">{{countdown}}</div>
            </a>
            <div class="fb ml10 pr mt10 mr16 ofh">
              <p class="fwb text-color-black f15 break">{{item.name}}</p>
              <!--<div class="bar"><div class="progress" :style="{ width: item.bettingPercent + '%' }" ></div></div>-->
              <div class="bar"><div class="progress" :style="{ width: item.bettingPercent>100 ? '100%':item.bettingPercent+'%' }"></div></div>
              <div class="pr text-color-99 f11">
                <p>{{item.participantsCount}}人参与</p>
                <p class="" style="position:absolute;float: right;right: 0;top: 0;">夺宝进度{{item.bettingPercent}}%</p>
              </div>
              <div @click="snatch(item.activityId,item.name,item.endTime)" class="btn-default btn-gradient-blue" :class="userInfo.gendar == 1 ? 'btn-gradient-red':'btn-gradient-blue'">{{item.userBettingBase}}金币夺宝</div>
            </div>
          </li>
        </ul>
        <!--积分兑换-->
        <ul class="content-list">
          <li class="df bd-x bd-b" v-for="(item,index) in exchangeGoodsList" :clstag="'jr|keycount|jrviph5|newbutton'+parseInt(index+56)">
            <div :style="{background:'url('+item.imgLinkM+')',backgroundSize:'100% 100%'}" class="item-img-jifen"></div>
            <div class="fb pr exchangeGood-list">
              <div class="fwb text-color-black f15 exchange-title break">{{item.name}}
                <!--<span class="dlb vam">{{item.name}}</span>-->
                <!--<span class="exchange-tag">{{item.tag[0]}}</span>-->
              </div>
              <p class="f10 text-color-black f11">{{item.subTitle}}</p>
              <!--<p class="f10 text-color-99 break">{{item.startTime | changetime}}-{{item.endTime | changetime}},{{item.validDesc}}</p>-->
              <p class="f10 text-color-99 break f11">{{item.validDesc}}</p>
              <div @click="exchange(item.code,item.finalPrice,item.name,index)" v-if="item.buttonType == 2" class="btn-default btn-gradient-blue" :class="userInfo.gendar == 1 ? 'btn-gradient-red':'btn-gradient-blue'">{{item.finalPrice}}金币兑换</div>
              <div v-else-if="item.buttonType == 1" class="btn-default btn-gray">被抢光啦</div>
              <a  v-else="item.buttonType == 0" class="btn-default btn-unexchange" href="https://m.jr.jd.com/vip/newcoupon/index.html">去查看</a>
            </div>
          </li>
        </ul>
        <p v-if="loading" class="pt10 pb10 tc text-color-99">正在加载...</p>
        <p v-if="loadComplete" class="pt10 pb10 tc text-color-99">已全部加载</p>
      </section>

      <!--升级弹框-->
      <layer-grade :confirmModalOptions="confirmOptions" ref="myConfirm"></layer-grade>
      <!--会员权益-->
      <member-rights :confirmModalOptions="confirmOptions" ref="myConfirm"></member-rights>
      <!--夺宝兑换-->
      <dialog-bat :confirmModalOptions="dialogBatOption" ref="mydialogBat"></dialog-bat>
      <!--夺宝兑换成功-->
      <bet-success :confirmModalOptions="betSuccessOption" ref="betSuccess"></bet-success>
      <!--任务-->
      <dialog-task :confirmModalOptions="dialogTaskOption" ref="mydialogTask"></dialog-task>
      <!--身份认证-->
      <dialog-verify :confirmModalOptions="dialogVerifyOption" ref="mydialogVerify"></dialog-verify>
      <!--通用弹框-->
      <dialog-common :confirmModalOptions="dialogCommonOption"  ref="myDialogCommon" ></dialog-common>
      <!--用户权益弹框-->
      <user-right :confirmModalOptions="userRightOption"  ref="myUserRight" ></user-right>

      <!--激活黑金身份弹框-->
      <black-up :confirmModalOptions="blackUpOption"  ref="BlackUpLayer" ></black-up>

      <!--提示框-->
      <my-tip :tipOption="myTipOption" ref="myTip"></my-tip>

      <!--<input type="hidden" id="refreshed" value="no">-->
    </div>
</template>
<style lang="scss" scoped>
  @import "../style/common";
  .wrap{width: 100%;overflow-x: hidden;}
  .head{background-color: #1c1c1e;background-repeat: no-repeat;background-position: center top;width: 100%;height: 3.375rem;position:relative;
    .gap{height: 35px;width: 100%;}
    .card{width: 2.66rem;height: 2.86rem;margin: 0 auto;
    .user-info{margin: 0 auto;padding-top:0.5rem;
    .user-head{width: 0.5rem;height: 0.5rem;overflow: hidden;border-radius: 50%;background-color: #d3b178;;img{width: 100%;}}
    .user-head-default{width: 0.5rem;height: 0.5rem;overflow: hidden;border-radius: 50%;img{width: 100%;}}
    }
    /*.label{width: 1.33rem;}*/
    .userOwn{margin: 0 auto;width: 76%;padding-top: 0.52rem;}
    .userOwn-desc{margin-top: -1px;}
    .w40{width: 39%;}
    .w27{width: 27%;}
    .mr20{margin-right: 0.2rem;}
    }
    .btn-bottom{position: absolute;z-index: 2;
      bottom: 0.1rem;left: 50%;margin-left: -1.07rem;}
      .btn-main{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/btn-bg-main.png") center center no-repeat;background-size: 100%;width: 2.15rem;height: 0.53rem;color: #f0dbc6;text-align: center;font-size: 0.13rem;line-height: 0.42rem;display: block;
        span{background-image: -webkit-linear-gradient(left,#f0dbc6,#ae856c); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      }
    }

  .head-new{background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/head-bg-new.png");background-size: 100%;color:#2f3750;
    a{color:#2f3750;}
    .card{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/card-bg-new.png") center center no-repeat;background-size: 100%;
      .label-type{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-new.png") center center no-repeat;background-size: 100%;width:0.88rem;height:0.17rem;vertical-align: middle;display: inline-block;}
      .label-student{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/mark-new.png") center center no-repeat;background-size: 100%;width:0.4rem;height:0.15rem;vertical-align: middle;display: inline-block;}
      .bar{background-color: rgba(184,189,196,0.4);width: 0.9rem;height: 2px;margin: 0.07rem 0 0.03rem 0;border-radius: 2px;}
      .progress{height: 2px;
      background: -moz-linear-gradient(45deg, rgba(91,98,124,1) 0%, rgba(175,191,212,1) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(91,98,124,1)), color-stop(100%, rgba(175,191,212,1))); /* safari4+,chrome */
      background: -webkit-linear-gradient(45deg, rgba(91,98,124,1) 0%, rgba(175,191,212,1) 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(45deg, rgba(91,98,124,1) 0%, rgba(175,191,212,1) 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(45deg, rgba(91,98,124,1) 0%, rgba(175,191,212,1) 100%); /* ie10+ */
      background: linear-gradient(45deg, rgba(91,98,124,1) 0%, rgba(175,191,212,1) 100%); /* w3c */
    }
      .arrow-upexp:after{content:"";display:inline-block;vertical-align: middle;;background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/arrow-up-new.png") center center no-repeat;background-size: 100%;width: 5px;height: 8px;margin-left: 0.05rem;;}
      .arrow-upexp{display: block;color:#2f3750;}
    }
  }
  .head-gold{background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/head-bg-gold.png");background-size: 100%;color:#8d5906;
    a{color:#8d5906;}
    .card{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/card-bg-gold.png") center center no-repeat;background-size: 100%;
      .label-type{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-gold.png") center center no-repeat;background-size: 100%;width:0.88rem;height:0.17rem;vertical-align: middle;display: inline-block;}
      .label-student{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/mark-gold.png") center center no-repeat;background-size: 100%;width:0.4rem;height:0.15rem;vertical-align: middle;display: inline-block;}
      .bar{background-color: rgba(144,93,12,0.3);width: 0.9rem;height: 2px;margin: 0.07rem 0 0.03rem 0;border-radius: 2px;}
      .progress{height: 2px;
        background: -moz-linear-gradient(45deg, rgba(255,231,194,1) 0%, rgba(255,253,227,1) 100%); /* ff3.6+ */
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,231,194,1)), color-stop(100%, rgba(255,253,227,1))); /* safari4+,chrome */
        background: -webkit-linear-gradient(45deg, rgba(255,231,194,1) 0%, rgba(255,253,227,1) 100%); /* safari5.1+,chrome10+ */
        background: -o-linear-gradient(45deg, rgba(255,231,194,1) 0%, rgba(255,253,227,1) 100%); /* opera 11.10+ */
        background: -ms-linear-gradient(45deg, rgba(255,231,194,1) 0%, rgba(255,253,227,1) 100%); /* ie10+ */
        background: linear-gradient(45deg, rgba(255,231,194,1) 0%, rgba(255,253,227,1) 100%); /* w3c */
      }
      .arrow-upexp:after{content:"";display:inline-block;vertical-align: middle;;background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/arrow-up-gold.png") center center no-repeat;background-size: 100%;width: 5px;height: 8px;margin-left: 0.05rem;;}
      .arrow-upexp{display: block;color:#905d0c;}
    }
  }
  .head-platinum{background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/head-bg-platinum.png");background-size: 100%; color:#78482f;
    a{color: #78482f }
    .card{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/card-bg-platinum.png") center center no-repeat;background-size: 100%;
      .label-type{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-platinum.png") center center no-repeat;background-size: 100%;width:0.88rem;height:0.17rem;vertical-align: middle;display: inline-block;}
      .label-student{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/mark-platinum.png") center center no-repeat;background-size: 100%;width:0.4rem;height:0.15rem;vertical-align: middle;display: inline-block;}
      .bar{background-color: rgba(206,166,140,0.4);width: 0.9rem;height: 2px;margin: 0.07rem 0 0.03rem 0;border-radius: 2px;}
      .progress{height: 2px;
        background: -moz-linear-gradient(45deg, rgba(255,224,194,1) 0%, rgba(255,253,227,1) 100%); /* ff3.6+ */
        background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,224,194,1)), color-stop(100%, rgba(255,253,227,1))); /* safari4+,chrome */
        background: -webkit-linear-gradient(45deg, rgba(255,224,194,1) 0%, rgba(255,253,227,1) 100%); /* safari5.1+,chrome10+ */
        background: -o-linear-gradient(45deg, rgba(255,224,194,1) 0%, rgba(255,253,227,1) 100%); /* opera 11.10+ */
        background: -ms-linear-gradient(45deg, rgba(255,224,194,1) 0%, rgba(255,253,227,1) 100%); /* ie10+ */
        background: linear-gradient(45deg, rgba(255,224,194,1) 0%, rgba(255,253,227,1) 100%); /* w3c */
      }
      .arrow-upexp:after{content:"";display:inline-block;vertical-align: middle;;background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/arrow-up-platinum.png") center center no-repeat;background-size: 100%;width: 5px;height: 8px;margin-left: 0.05rem;;}
      .arrow-upexp{display: block;color:#78482f;}
    }
  }
  /*黑金会员*/
  .head-black{
    background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/head-bg-black.png");background-size: 100%; color:#180903;
    a{color: #d5ae72 }
    .card {
      background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/card-bg-black.png") center center no-repeat;
      background-size: 100%;
      .label-type {
        background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/label-black.png") center center no-repeat;
        background-size: 100%;
        width: 0.88rem;
        height: 0.17rem;
        vertical-align: middle;
        display: inline-block;
      }
      .label-student {
        background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/mark-black.png") center center no-repeat;
        background-size: 100%;
        width: 0.4rem;
        height: 0.15rem;
        vertical-align: middle;
        display: inline-block;
      }
      .bar {
        background-color: rgba(213, 174, 114, 0.4);
        width: 0.9rem;
        height: 2px;
        margin: 0.07rem 0 0.03rem 0;
        border-radius: 2px;
      }
      .progress {
        height: 2px;
        background-color: #e6c288;
        background-image: -webkit-linear-gradient(left, #ffe7ca 0, #e6c288 100%);
        background-image: linear-gradient(90deg, #ffe7ca 0, #e6c288 100%);
      }
      .arrow-upexp:after {
        content: "";
        display: inline-block;
        vertical-align: middle;;
        background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/arrow-up-black.png") center center no-repeat;
        background-size: 100%;
        width: 5px;
        height: 8px;
        margin-left: 0.05rem;;
      }
      .arrow-upexp {
        display: block;
        color: #d5ae72;
      }
    }
    .btn-main{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/btn-bg-gold.png") center center no-repeat;background-size: 100%;width: 2.15rem;height: 0.53rem;
      color: #f0dbc6;text-align: center;font-size: 0.13rem;line-height: 0.42rem;display: block;
      /*span{color: #000000;}*/
      span{background-image: -webkit-linear-gradient(left,#000000,#000000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    }
  }


  /*权益*/
  .right{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/right-bg.png") center top no-repeat;background-size: 100% 1.55rem;width: 100%;height: 1.15rem;margin-top: -0.35rem;position: relative;z-index: 1;overflow:hidden;padding-bottom:30px;
    .right-list{img{width: 0.3rem;margin-bottom: 0.05rem;}}
    .right-list{padding-top: 0.42rem;padding-left:0.15rem;overflow-x: scroll;white-space: nowrap;
      -webkit-overflow-scrolling: touch;-ms-overflow-style: -ms-autohiding-scrollbar; overflow-scrolling: touch;
      li{margin-right: 0.2rem;width: 0.6rem;white-space: nowrap;display: inline-block;}
    }
    .right-list::-webkit-scrollbar{ background-color: transparent;}
    .right-list::-webkit-scrollbar-track{ background-color: transparent;}
    .right-list::-webkit-scrollbar-thumb{ background-color: transparent;}
  }
  .w100h{width: 100%;}
  .space{width: 100%;height: 0.1rem;background-color: #f5f5f5;}

  .member-wrapper{width: 100%;padding-bottom: 30px;height: 2rem;overflow: hidden;}
  .member-list{img{width: 1.28rem;}}
  .member-list{overflow:auto;-webkit-overflow-scrolling: touch;-ms-overflow-style: -ms-autohiding-scrollbar; overflow-scrolling: touch;
    li{display: table-cell;padding-right: 0.05rem;color:#ffffff;
      a{margin-right: 0.05rem;}
      img{width: 1.28rem;}
      .name{position: absolute;bottom:0.52rem;left: 0;right: 0;margin-left: auto;margin-right: auto;font-size:0.18rem;font-weight: bold;}
      .desc{position: absolute;bottom:0.35rem;left: 0;right: 0;margin-left: auto;margin-right: auto;font-size:0.12rem;}
    }
    .member-list::-webkit-scrollbar{ background-color: transparent;}
    .member-list::-webkit-scrollbar-track{ background-color: transparent;}
    .member-list::-webkit-scrollbar-thumb{ background-color: transparent;}
  }

  /*UP指数*/
  .exp-girl-bg{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/exp-bg-girl.png") center center no-repeat;background-size: 100%;width: 3.45rem;;height: 1.55rem;color:#ffffff;
    .btn-check{color: #fe1424;display: block;font-size: 14px;}
  }
  .exp-boy-bg{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/exp-bg-boy.png") center center no-repeat;background-size: 100%;width: 3.45rem;;height: 1.55rem;color:#ffffff;
    .btn-check{color: #005fff;display: block;font-size: 14px;}
  }
  .exp{
    .time{color: rgba(255,255,255,0.5);font-size: 0.12rem;}
    .btn-check{width: 1rem;height: 0.3rem;background-color: #ffffff;border-radius: 0.3rem;line-height: 0.3rem;text-align: center;font-weight: bold;margin: 0.08rem auto 0;}
    .exp-right{padding-right: 0.3rem;margin-top: -0.1rem}
    .icon-grade{width: 6px;vertical-align: middle;}
    .icon-grade-up{transform: rotate(180deg);-webkit-transform: rotate(180deg);}
    .exp-left{width: 57%;text-align: center;margin-top: -0.1rem;
      .exp-num{font-size: 0.34rem;line-height: 0.2rem}
      .exp-desc{font-size: 12px;opacity: 0.5;line-height: 1;}
    }
  }

  /*副标题*/
  .subhead{position: relative;display: inline-block;}
  .subhead-boy:after{content: "";position: absolute;background: #c8ebff;width: 110%;height: 50%;left: 0;bottom:10%;z-index: -1;}
  .subhead-girl:after{content: "";position: absolute;background: #ffdfe8;width: 110%;height: 50%;left: 0;bottom:10%;z-index: -1;}
  .btn-normal{position: absolute;right: 0rem;top: 0;color: #999999;font-size: 0.12rem;}
  .button-arrow-right:after{    content: '';margin-left: 0.05rem;;
    width: 0.075rem;
    height: 0.12rem;
    display: inline-block;
    background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/arrow-right.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;vertical-align: middle;}
  .button-refresh:after{content: '';margin-left: 0.05rem;;
    width: 0.12rem;
    height: 0.12rem;
    display: inline-block;
    background-image: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/icon-refresh.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;vertical-align: middle;}

  /*做任务*/
  .task-list{
    .mission-left{flex-grow:1;flex-shrink:1;flex-basis:0;flex: auto;}
    .mt-04{margin-top: -0.04rem;}
    li{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/task-bg.png") center center no-repeat;background-size: 100%;width: 3.64rem;;height: 1.1rem;margin: 0 auto;padding-left: 0.26rem;padding-right: 0.26rem;
      /*box-shadow: 0 0 8px rgba(135,139,144,0.25);margin-bottom: 0.15rem;min-height: 0.95rem;padding-left: 0.16rem;padding-right: 0.16rem;*/
    }

    .label label{
      display: block;
      font-size: 10px;
      padding: 0 4px;
      text-align: center;
      height: 16px;
      line-height: 16px;
      margin-right: 4px;
      color: #fff;
      background: #1673ff;
      float: left
    }
    .label .redLabel{background: #fe1424;}
    .btn-task{width: 0.8rem;height: 0.28rem;text-align: center;color: #ffffff;line-height: 0.28rem;border-radius: 0.28rem;display: inline-block;}
  }

  /*专属计划*/
  .plan-left{width: 2rem;margin-right:0.05rem;color:#ffffff;
    a{color: #ffffff;}
    .plan-left-bg{background-position: center center;background-size: 100%;width: 2rem;height: 1.15rem;background-repeat: no-repeat;}
    .plan-left-cover{width: 100%;height: 100%;padding-left: 0.15rem;padding-top: 0.46rem;
      background: -moz-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0))); /* safari4+,chrome */
      background: -webkit-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* ie10+ */
      background: linear-gradient(45deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* w3c */
    }
  }
  .plan-right{color:#ffffff;
    a{color: #ffffff;width: 100%;height: 100%;}
    .plan-right-one{background-position: center center;background-size: 100%;width: 1.39rem;height: 2.35rem;background-repeat: no-repeat;position: relative;}
    .plan-left-cover{width: 100%;height: 1.35rem;padding-left: 0.15rem;padding-top: 0.65rem;position: absolute;bottom: 0;;
      background: -moz-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left bottom, right bottom, color-stop(0%, rgba(0,0,0,1)), color-stop(100%, rgba(0,0,0,0))); /* safari4+,chrome */
      background: -webkit-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* ie10+ */
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* w3c */
    }
  }

  /*福利专区*/
  .content-list{
    /*li{box-shadow: 0 0.05rem 0.2rem 0 rgba(135,139,144,0.25);margin-bottom: 0.15rem;}*/
    li{padding-top: 0.1rem;padding-bottom: 0.1rem;}
    .item-img{background-position: center center;background-repeat:no-repeat;width: 0.95rem;height: 0.95rem;position: relative;display: inline-block;margin-top: 0.12rem;margin-bottom: 0.12rem;}
    .item-img-jifen{background-position: center center;background-repeat:no-repeat;width: 0.95rem;height: 0.95rem;position: relative;display: inline-block;;margin-top: 0.12rem;margin-bottom: 0.12rem;border-radius: 50%;}
    .item-label{width: 0.45rem;height: 0.45rem;img{width: 100%;}}
    .item-countdown{position: absolute;bottom: 0;left: 0;width: 100%;height: 0.46rem;font-size: 0.1rem;text-align: center;color: #ffffff;line-height: 0.6rem;
      background: -moz-linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0,0,0,0)), color-stop(100%, rgba(0,0,0,1))); /* safari4+,chrome */
      background: -webkit-linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* safari5.1+,chrome10+ */
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); /* w3c */
    }
    .bar{background-color: rgba(184,189,196,0.4);width: 100%;height: 2px;margin: 0.05rem 0 0.03rem 0;border-radius: 2px;position: relative;overflow: hidden;}
    .progress{height: 2px;width: 0;;
      background: -moz-linear-gradient(45deg, rgba(255,150,0,1) 0%, rgba(255,65,7,1) 100%); /* ff3.6+ */
      background: -webkit-gradient(linear, left bottom, right top, color-stop(0%, rgba(255,150,0,1)), color-stop(100%, rgba(255,65,7,1))); /* safari4+,chrome */
      background: -webkit-linear-gradient(45deg, rgba(255,150,0,1) 0%, rgba(255,65,7,1) 100%); /* safari5.1+,chrome10+ */
      background: -o-linear-gradient(45deg, rgba(255,150,0,1) 0%, rgba(255,65,7,1) 100%); /* opera 11.10+ */
      background: -ms-linear-gradient(45deg, rgba(255,150,0,1) 0%, rgba(255,65,7,1) 100%); /* ie10+ */
      background: linear-gradient(45deg, rgba(255,150,0,1) 0%, rgba(255,65,7,1) 100%); /* w3c */
     }
    .btn-default{position: absolute;bottom: 0.15rem;min-width: 1rem;display: inline-block;height: 0.28rem;border-radius: 0.28rem;color: #ffffff;text-align: center;font-size: 0.13rem;line-height: 0.28rem;margin-left: 0.02rem;}
    .btn-unexchange{color: #999999;border: 1px solid #eeeeee;}
    .exchangeGood-list{margin-top: 0.1rem;margin-left: 0.1rem;margin-right: 0.15rem;line-height: 0.18rem;overflow: hidden;
      .exchange-title{line-height: 0.24rem;
        /*span:first-child{max-width: 79%;}*/
      }
      .exchange-tag{color: #FF9600;font-size: 10px;border: 1px #FF9600 solid;padding:2px 6px;;margin-left: 0.05rem;line-height: 1;vertical-align: middle;
        -webkit-transform: scale(0.5);transform: scale(0.5);-webkit-transform-origin: 100% 100%;transform-origin: 100% 100%;
      }
    }
  }
  .duobao-list{
    li:first-child{padding-top: 0;}
  }


  /*new */
  .icon-new:after{
    content:"NEW";position: absolute;background-color: #ff2a00;font-size: 18px;color: #FFFFFF;padding:4px 10px;margin-left: 4px;;
    background-image: -webkit-linear-gradient(left,#ff2a00 0,#ff910f 100%);
    background-image: linear-gradient(90deg,#ff2a00 0,#ff910f 100%);
    border-bottom-right-radius: 20px;border-top-left-radius: 20px;border-top-right-radius: 20px;;
    transform: scale(0.5);
    transform-origin: 0% 0%;
  }
  /*按钮 common*/
  .btn-gradient-blue{background-color: #005fff;
    background-image: -webkit-linear-gradient(left,#005fff 0,#17b0ff 100%);
    background-image: linear-gradient(90deg,#005fff 0,#17b0ff 100%);
    box-shadow: 0 0.05rem 0.05rem 0 rgba(20,86,255,0.2);
  }
  .btn-gradient-orange{background-color: #fd470f;
    background-image: -webkit-linear-gradient(left,#fd470f 0,#ffb310 100%);
    background-image: linear-gradient(90deg,#fd470f 0,#ffb310 100%);
    box-shadow: 0 0.05rem 0.1rem 0 rgba(254,130,8,0.3);
  }
  .btn-gradient-red{background-color: #fd470f;
    background-image: -webkit-linear-gradient(left,#ff2040 0,#ff2ea9 100%);
    background-image: linear-gradient(90deg,#ff2040 0,#ff2ea9 100%);
    box-shadow: 0 0.05rem 0.1rem 0 rgba(255,32,64,0.3);
  }
  .btn-gray{background-color: #9d9d9d;color: #ffffff;
    background-image: -webkit-linear-gradient(left,#9d9d9d 0,#d2d2d2 100%);
    background-image: linear-gradient(90deg,#9d9d9d 0,#d2d2d2 100%);
  }
  .DIN-MEDIUM{font-family: DIN-MEDIUM}
  .DIN-BLACK{font-family: DIN-BLACK}
  .DIN-BOLD{font-family: DIN-BOLD}
  .DIN-LIGHT{font-family: DIN-LIGHT}
  .mr66{margin-right: 0.66rem;}
  .opa5{opacity: 0.5}
  .mt06{margin-top: 0.06rem}
  .mt12{margin-top: 0.12rem}
  .pb08{padding-bottom: 0.08rem}


  .black-up-card{position:absolute;top:35px;left:0;right:0;margin-left:auto;margin-right:auto;
    .black-up-bg{ background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/card-bg-black.png") center center no-repeat;background-size: 100%; color:#180903;width: 2.66rem;height: 2.86rem;margin: 0 auto;text-align:center;position:relative;padding-top :0.2rem;
      .black-up-title{font-size: 0.28rem;font-weight: bold;text-align: left;padding-left: 0.28rem;
        background: linear-gradient(to right, #ffe7ca, #dbb87d);
        background: -webkit-linear-gradient(to right, #ffe7ca, #dbb87d);
        -webkit-background-clip: text;
        color: transparent;}
      .privilege-list{width: 2rem;margin-top: 0.2rem}
      .text-black-up{position: absolute;left: 0.08rem;top: 50%;margin-top: -52px;width: 0.15rem;opacity: 0;img{width: 100%;}}
    }
  }
  .black-up-btn{background: url("https://static.360buyimg.com/finance/mobile/financial/member_center/images/btn-bg-gold.png") center center no-repeat;background-size: 100%;width: 2.15rem;height: 0.53rem;position: absolute;z-index: 2;
    bottom: -0.2rem;left: 50%;margin-left: -1.07rem;color: #000000;text-align: center;font-size: 0.13rem;line-height: 0.42rem;display: block;font-size:0.18rem;
    span{background-image: -webkit-linear-gradient(left,#000000,#000000); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
  }
  .blackWhite{-webkit-transform: translateX(-3.4rem);transform: translateX(-3.4rem);}
  .moveFromLeft{
    -webkit-animation: moveFromLeft 600ms ease-in-out both;
    animation: moveFromLeft 600ms ease-in-out both;
  }
  .moveToRight{
    -webkit-animation: moveToRight 600ms ease-in-out both;
    animation: moveToRight 600ms ease-in-out both;
  }
  .toShow{
    -webkit-animation: toShow 600ms ease-in-out both;
    animation: toShow 600ms ease-in-out both;
  }
  .toHide{
    -webkit-animation: toHide 600ms ease-in-out both;
    animation: toHide 600ms ease-in-out both;
  }
  @-webkit-keyframes moveFromLeft {
    from {
      opacity: 0;
      -webkit-transform: translateX(-3.4rem);
    }
    to {
      opacity: 1;
      -webkit-transform: translateX(0);
    }
  }
  @keyframes moveFromLeft {
    from {
      opacity: 0;
      transform: translateX(-3.4rem);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @-webkit-keyframes moveToRight {
    from {
      -webkit-transform: translate3d(0,0,0);
    }
    to {
      -webkit-transform: translate3d(2.9rem,0,0);
    }
  }
  @keyframes moveToRight {
    from {
      transform: translate3d(0,0,0);
    }
    to {
      transform: translate3d(2.9rem,0,0);
    }
  }
  @-webkit-keyframes toShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }
  @keyframes toShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1
    }
  }
  @-webkit-keyframes toHide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0
    }
  }
  @keyframes toHide {
    from {
      opacity: 1;
    }
    to {
      opacity: 0
    }
  }
</style>
<script>
  import Vue from 'vue'
  import '../style/swiper.min.css'
//  import Swiper from '../plugins/swiper.min.js'
  import layerGrade from '../components/layer/grade'
  import memberRights from '../components/layer/member_rights'
  import dialogBat from '../components/duobao/bet'
  import betSuccess from '../components/duobao/success'
  import dialogTask from '../components/task/task-detail'
  import dialogVerify from '../components/task/verify'
  import dialogCommon from '../components/common/dialog'
  import userRight from '../components/userright/detail'
  import blackUp from '../components/black/black'
  import myTip from '../components/toast/toast'

  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import {getCookie,getUrlString,isApp,getAppType} from "../config/utils"
  //import BScroll from 'better-scroll'

  Vue.filter('changetime',function(value){
    //var date = new Date(parseInt(value) * 1000);
    var date = new Date(parseInt(value));
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    if(month<10){
      month = "0"+month;
    }
    if(day<10){
      day = "0"+day;
    }
    return [year, month, day].join('.'); // 2015/1/2
  });

  Vue.filter('replace', function (value) {
    return value ? value: "--";
  });

  Vue.filter('replacesid', function (value) {
    var that = this;
    console.log(this.sid);
    var last = value.substring(value.length-4);
    if(last == 'sid='){
      value = value+that.sid;
    }
    return value;
  });

  import {getUserId,getUserCampusId,getUserInfo,getGoldCoinCount,getGBCount,getCouponCount,queryMemberGradeValue,getMemberRightsPM,getMemberHeadADPM,getCampusADPM,getMemberPreferencePM,getExclusiveUpPlanPM,queryMission,queryMissionDetail,receiveMission,rewardMission,queryActivityList,queryBasicInfoPreOrder,createOrRebuyOrder,queryActivityDetail,queryExchangeGoods,queryExchangeGoodDetail,checkExchangeGood,exchange,queryPlatinumRebateRightsInfo,ActivateBlack} from '../server/getData'
//  import {ActivateBlack} from '../server/blackup'


    export default{
        data(){
            return {
                userType:0,    //用户身份
                unDrawRebates:0,    //铂金身份 返现数
                headBgType:{
                  '0':'head-new',
                  '1':'head-gold',
                  '2':'head-platinum',
                  '5':'head-platinum',
                  '3':'head-black'
                },
                isStudent:false,   //校园身份
                userInfo:"",      //用户信息
                goldCoinCount:0,    //用户剩余可用金币数量
                BigDecimal:0,    //用户钢镚数量
                couponCount:0,    //卡券数量
                GradeValue:"",      //UP指数查询接口
                mission:"",     //任务接口
                confirmOptions:"",  //升级铂金会员弹框相关
                taskRewardInfo:{
                  '0':'无',
                  '1':'金币',
                  '2':'京豆',
                  '3':'钢镚',
                  '4':'券&券礼包'
                },    //任务奖励对应文案
                taskFrequenceType:{
                  '0':'一次性任务',
                  '1':'日任务',
                  '2':'周任务',
                  '3':'月任务',
                },      //任务频率类型对应文案
                taskPromotionTag:{
                  '0':'无',
                  '1':'新任务',
                  '2':'火热任务',
                  '3':'超级任务',
                  '4':'奖励加磅'
                },      //促销标签对应文案
                snatchList:[],      //夺宝列表
                exchangeGoodsList:[],      //积分兑换
                headAdPM:{
                  imageUrl: "",
                  linkUrl: "",
                  name: "",
                  squence: 1
                },          //头部广告
                memberRightPM:[],     //会员权益
                campusAdPM:[],     //会员权益
                memberPreferencePM:[],     //会员优选
                ExclusiveUpPlanPM:[
                  [[],[],[]],
                  [[],[],[]]
                ],
                UpPlanPMClatag:[["jr|keycount|jrviph5|newbutton47","jr|keycount|jrviph6|newbutton48","jr|keycount|jrviph7|newbutton49"],["jr|keycount|jrviph8|newbutton50","jr|keycount|jrviph9|newbutton51","jr|keycount|jrviph10|newbutton52"]],     //专属UP计划埋点
                current:0,
                dialogBatOption:{},       //夺宝兑换弹框
                betSuccessOption:{},       //夺宝兑换成功弹框
                dialogTaskOption:{},       //任务详情弹框
                dialogVerifyOption:{},         //身份认证弹框
                dialogCommonOption:{},         //通用弹框
                userRightOption:{},         //通用弹框
                swiperOption: {
                  // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                  //debugger: true,
                  //autoplay: 3000,
                  slidesPerView: "auto",//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
                  centeredSlides: true//<span style="color:rgb(68,68,68);font-family:'microsoft yahei';font-size:13px;">设定为true时，活动块会居中，而不是默认状态下的居左。</span>
                },
                countdown:"",      //倒计时
                nextPage:1,      //金币兑换 当前页码
                loadComplete:false,      //金币兑换 全部加载完成
                loading:false,      //金币兑换 正在加载中
                isRepeat:false,      //翻页，防止重复加载
                blackUpOption:{},     //黑金会员升级弹框
                isBlackWhite:false,    //在黑金白名单中
                blackUpTimeout:false,    //在黑金白名单中 升级弹框消失
                myTipOption:{},    //通用提示框
            }
        },
        components: {
          layerGrade,memberRights,dialogBat,betSuccess,dialogTask,dialogVerify,dialogCommon,userRight,swiper,swiperSlide,blackUp,myTip
        },
        computed:{
        },
        created() {
          var that = this;

          if (document.addEventListener) {
            window.addEventListener('pageshow', function (event) {
              if (event.persisted || window.performance && window.performance.navigation.type == 2) {
                  location.reload();
                }
              }, false);
          }


          this.sid = getUrlString("sid") || getCookie("sid");
          this.pin = getCookie("pin") || getCookie("pwdt_id");
          this.isApp = isApp();
          this.platType = this.isApp ? '2':'4';
          this.apptype = getAppType();
          //alert(this.sid+"========================"+this.pin+"============"+this.apptype);
          if(!this.pin && this.apptype !== 'wx'){
            //todo 修改
            that.notLogin();
          }else if(!this.sid){
            that.notLogin();
          }

          if (getAppType() == 'jrApp' && window.jsBridgeV3 != undefined) {
            window.jrBridge = window.jrBridge || jsBridgeV3.onReady();
          }
          //this.takeBackLayer();
        },
        mounted(){
          //var params = {pin:"sq02"};  //todo
          //var params = {pin:this.pin};
          var params = {};
          var that = this;
          //用户身份查询接口
          getUserId(params).then(res => {
            if(res.resultData.success){
              //成功
              this.userType = res.resultData.data.userStatus;
              this.isBlackWhite = res.resultData.data.isBlackWhite && (this.userType !== 3);  //todo 上线修改
              if(this.isBlackWhite){
                this.takeBackLayer();
              }
              //this.userType = 3;//todo 上线修改
              if(this.userType == 2 || this.userType == 5){
                //用户身份为铂金或铂金体验时
                queryPlatinumRebateRightsInfo(params).then(res => {
                  that.unDrawRebates = res.resultData.data.unDrawRebates;
                })
              }else if(this.userType == 3){
                //黑金身份
                if(getAppType() == 'jrApp'){
                  that.changeTitleColorBlack();
                }

              }
            }else{
              if(res.resultData.resultCode && res.resultData.resultCode == '0002'){
                //未登录
                that.notLogin();
              }
            }
          })
          //校园用户身份查询接口
          getUserCampusId(params).then(res => {
            if(res.resultData.result.success){
              if(res.resultData.statusCode == 'CS001'){
                //学生身份
                that.isStudent = true;
              }else{
                //非学生
                that.isStudent = false;
              }
              //that.isStudent = true;
            }
          })
          //用户信息
          getUserInfo(params).then(res => {
            if(res.resultData.success){
                //console.log(res.resultData)
                that.userInfo = res.resultData.data
            }
          })
          //金币数量查询接口
          getGoldCoinCount(params).then(res => {
            //console.log(res.resultData)
            if(res.resultData.success){
              that.goldCoinCount = res.resultData.goldCoinCount
            }
          })
          //钢镚数量查询接口
          getGBCount(params).then(res => {
            if(res.resultData.success){
              that.BigDecimal = res.resultData.data
            }
          })
          //卡券数量查询接口
          getCouponCount(params).then(res => {
            //console.log(res.resultData)
            if(res.resultData.success){
              that.couponCount = res.resultData.data;
            }
          })
          //UP指数查询接口
          queryMemberGradeValue(params).then(res => {
            //console.log(res.resultData)
            that.GradeValue = res.resultData.data;
          })
          //会员权益PM查询接口
          getMemberRightsPM(params).then(res => {
            that.memberRightPM = res.resultData;
          })
          //会员头部广告位PM查询接口
          getMemberHeadADPM(params).then(res => {
            that.headAdPM = res.resultData[0];
          })
          //校园精品广告位PM查询接口
          getCampusADPM(params).then(res => {
              that.campusAdPM = res.resultData;
          })

          //会员优选广告位PM查询接口
          getMemberPreferencePM(params).then(res => {
            that.memberPreferencePM = res.resultData;
          })
          // 专属UP计划广告位查询接口
          getExclusiveUpPlanPM(params).then(res => {
            var data = res.resultData;
            data.forEach(function(item,index){
              if(index<3){
                that.ExclusiveUpPlanPM[0][index] = item;
              }else{
                that.ExclusiveUpPlanPM[1][index-3] = item;
              }
            });
          })
          //查询任务列表
          var missionParams = {
            //pin:that.pin,
            platformCode:that.platType
          };
          queryMission(missionParams).then(res => {
            //console.log(res.resultData)
            that.mission = res.resultData.data;
          })
          //查询金币夺宝活动列表信息
          queryActivityList().then(res => {
            if(res.resultData.success){
              that.snatchList = res.resultData.data.data;
              that.getCountdown(that.snatchList[0].nowTime,that.snatchList[0].endTime)
            }
          })
          // 查询金币夺宝活动详情信息
          /*queryActivityDetail().then(res => {
            console.log(res.resultData)
          })*/
          // 可用兑换商品列表
          queryExchangeGoods(params).then(res => {
            //that.exchangeGoodsList = res.resultData.data.data;
            that.nextPage = res.resultData.data.nextPage;
            that.loadMore(that.exchangeGoodsList,res.resultData.data.data)
          })
          // 查询商品详情
          /*queryExchangeGoodDetail(params).then(res => {
            console.log(res.resultData)
          })*/
          // 验证商品是否可兑换
          /*checkExchangeGood(params).then(res => {
            console.log(res.resultData)
          })*/
          // 商品兑换
          /*exchange(params).then(res => {
            console.log(res.resultData)
          })*/
          this.scrollFresh();


          if(getAppType() == 'jrApp'){
            this.hideShare();//隐藏分享
            this.changeTitleColor();
          }

        },
        methods: {
          notLogin(){
            var loginUrl = "//passport.m.jd.com/user/login.action?returnurl=";
            var curPath = window.location.origin + window.location.pathname;
            window.location.href = loginUrl + encodeURIComponent(curPath);
          },
          popGrade(){
            var that = this;
            this.$refs.myConfirm.showModel();
            this.confirmOptions = {
              title: "确认退出",//提示
              message: "文字内容",//""
              btnCancelText: "取消",//取消
              btnSubmitText: "确定",//确定
              btnSubmitFunction: function () {
                this.show = false;
                window.location.href='https://plogin.m.jd.com/cgi-bin/ml/mlogout?appid=100&returnurl=https://active.jd.com/forever/campus/index.html'
              },
              btnCancelFunction: function () {
                this.show = false
              }
            }
          },
          checkTaskDetail(taskInfo,index){
            var that = this;
            //查询任务详情
            that.$refs.mydialogTask.showModel();
            that.dialogTaskOption = {
              imgSrc:taskInfo.icon,
              awardName:taskInfo.awardName,
              name:taskInfo.name,
              taskDesc:taskInfo.detail,
              frequencyType:taskInfo.frequencyType,
              promotionTag:taskInfo.promotionTag,
              status:taskInfo.status,
              scheduleTargetValue:taskInfo.scheduleTargetValue,
              scheduleNowValue:taskInfo.scheduleNowValue,
              schedulePercent:taskInfo.schedulePercent,
              btnSubmitFunction:function(){
                if(taskInfo.status == -1){
                  //去做任务
                  that.receiveTask(taskInfo.missionId,taskInfo.jrAppLink)
                }else if(taskInfo.status == 1){
                  //领取奖励
                  that.getReward(taskInfo.missionId,index);
                }else {
                  //继续完成
                  window.location.href=taskInfo.jrAppLink;
                }
              }
            }
          },
          receiveTask(missionID,jumpLink){
            var that = this;
            var params = {
              //pin:that.pin,
              missionId:missionID
            };
            //接受任务
            receiveMission(params).then(res => {
              if(res.resultData.success){
                window.location.href=jumpLink;
              }else {
                if(res.resultData.code == '0013'){
                  //未实名
                  that.$refs.mydialogVerify.showModel();
                  that.dialogVerifyOption = {
                    btnSubmitFunction:function(){
                      var curPath = window.location.origin + window.location.pathname;
                      window.location.href='https://msc.jd.com/auth/loginpage/wcoo/toAuthPage?source=2&sid='+that.sid+'&businessType=645&directReturnUrl='+curPath;
                    }
                  }
                }else {
                  window.location.href=jumpLink;
                }
              }
            })
          },
          getReward(missionID,index){
            var that = this;
            var params = {
              //pin:that.pin,
              missionId:missionID
            };
            //领取任务奖励
            rewardMission(params).then(res => {
              if(res.resultData.code == '-9998'){
                that.showToast('为了提供更好的任务体验，任务中心升级中，任务奖励领取预计4月18日开放哦。给你带来不便，敬请谅解。');
                return
              }
              if(res.resultData.success){
                that.$refs.myDialogCommon.showModel();
                that.dialogCommonOption = {
                  btnConfirmText:"我知道了",
                  detail:'您已成功领取奖励，再去看看其他任务吧！',
                };
                that.mission[index].status = 2;
              }else {
                  if(res.resultData.code == '0013'){
                    //未实名
                    that.$refs.mydialogVerify.showModel();
                    that.dialogVerifyOption = {
                      btnSubmitFunction:function(){
                        var curPath = window.location.origin + window.location.pathname;
                        window.location.href='https://msc.jd.com/auth/loginpage/wcoo/toAuthPage?source=2&sid='+that.sid+'&businessType=645&directReturnUrl='+curPath;
                      }
                    }
                  }
              }
            })
          },
          exchange(activityId,price,goodName,index){
            //夺宝兑换
            var that = this;
            var params = {
              goodCode:activityId,
              //pin:that.pin
            };
            that.$refs.myDialogCommon.showModel();
            that.dialogCommonOption = {
              btnCancelText:"取消",
              btnConfirmText:"确认兑换",
              detail:'确定使用'+price+' 金币,兑换'+goodName+'吗？',
              btnSubmitFunction:function(){
                //确认兑换
                exchange(params).then(res => {
                  if(res.resultData.resultCode == '-9998'){
                    that.showToast('为了提供更好的金币服务，金币将全新升级，价值更高，权益更多。');
                    return
                  }
                  if(res.resultData.resultCode && res.resultData.resultCode == '0000'){
                    //兑换成功
                    that.$refs.myDialogCommon.showModel();
                    that.dialogCommonOption = {
                      detail:'兑换成功',
                      btnConfirmText:"我知道了",
                    };
                    //改变按钮状态
                    that.exchangeGoodsList[index].buttonType = 0;
                  }else if(res.resultData.resultCode && res.resultData.resultCode == '0010'){
                    //未实名
                    that.$refs.mydialogVerify.showModel();
                    that.dialogVerifyOption = {
                      btnSubmitFunction:function(){
                        var curPath = window.location.origin + window.location.pathname;
                        window.location.href='https://msc.jd.com/auth/loginpage/wcoo/toAuthPage?source=2&sid='+that.sid+'&businessType=645&directReturnUrl='+curPath;
                      }
                    }
                  }else{
                    //兑换失败
                    that.$refs.myDialogCommon.showModel();
                    that.dialogCommonOption = {
                      detail:res.resultData.resultMessage,
                      btnConfirmText:'我知道了',
                    }
                  }
                })
              },
            };
          },
          refreshUp(){
            var that = this;
            if(that.current){
              that.current = 0;
            }else{
              that.current = 1;
            }
          },
          snatch(activityId,orderName,endTime){
            //夺宝兑换  queryBasicInfoPreOrder
            var that = this;
            var params = {
              activityId:activityId,
              //pin:that.pin
            };
            queryBasicInfoPreOrder(params).then(res => {
              var info = res.resultData.data;
              that.$refs.mydialogBat.showModel();
              that.dialogBatOption = {
                userBettingMultipleMax: info.userBettingMultipleMax,//用户最高可投注倍数
                currentAvailableCredit: info.currentAvailableCredit,//用户当前账户金币数
                userBettingBase: info.userBettingBase,//	活动投注基数
                btnSubmitFunction: function (currentNum) {
                  this.isShow = false;
                  var paramsCreate = {
                    activityId:activityId,
                    //pin:that.pin,
                    currentBettingMultiple:currentNum
                  };
                  createOrRebuyOrder(paramsCreate).then(res => {
                    if(res.resultData.code == '0000'){
                      //夺宝兑换成功
                      that.$refs.betSuccess.showModel();
                      that.betSuccessOption = {
                        title: '恭喜您成功参与夺宝',//
                        desc: '"'+orderName+'"将于'+that.changeTime(endTime)+'前开奖，记得及时关注您的中奖状态哦！',//
                        btnSubmitFunction: function () {
                          //window.location.href="https://m.jr.jd.com/vip/goldcoin/html/goldMallList.html?tabs=3&sid=&from=jrmobile"
                          window.location.href="https://vip.jr.jd.com/gcmall/RatRace.html"
                        }
                      }
                    }
                  })
                },
              }
            })
          },
          showRightDetail(rightInfo){
            //显示用户权益弹框
            this.$refs.myUserRight.showModel();
            this.userRightOption = {
              cardBg:rightInfo.param.PicUrl,    //卡片背景图
              cardName:rightInfo.name,          //卡片名称
              cardDesc:rightInfo.param.describe,          //卡片描述
              cardBtnName:rightInfo.param.buttonName,          //卡片按钮文案
              cardBtnUrl:rightInfo.linkUrl,          //卡片按钮链接
            }
          },
          changeTime(value){
            var date = new Date(parseInt(value));
            var year = date.getFullYear();
            var month = date.getMonth()+1;
            var day = date.getDate();
            if(month<10){
              month = "0"+month;
            }
            if(day<10){
              day = "0"+day;
            }
            var text = year+"年"+month+"月"+day+"日"
            return text;
          },
          getCountdown(nowDateTime,endTime){
            var that = this;
            var start = endTime;
            var now = nowDateTime;
            function timer (){
              now += 1000;
              var seconds = start - now;
              var days = Math.floor(seconds / 1000 / 60 / 60 / 24); //计算剩余的天数
              var hour = Math.floor(seconds / 1000 / 60 / 60 % 24);
              var minute = Math.floor(seconds / 1000 / 60 % 60);
              var second = Math.floor(seconds / 1000 % 60);
              days = days<10?("0" + days):days;   //时
              hour = hour<10?("0" + hour):hour;   //时
              minute = minute<10?("0" + minute):minute;   //分
              second = second<10?("0" + second):second;   //秒
              if(days >0 ){
                that.countdown = "剩余"+days+"天 "+hour+":"+minute+":"+second;
              }else {
                that.countdown = "剩余"+hour+":"+minute+":"+second;
              }

            }
            setInterval(timer,1000);
          },
          scrollFresh(){
            var that = this;
            if(that.nextPage == 1){
              //只有一页的内容，避免重复加载
              that.loadComplete = true;
              return
            }
            document.addEventListener('scroll',scrollEvent,false);
            function scrollEvent (){
              var scrollHeight = document.body.scrollHeight;
              var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
              var innerHeight = window.innerHeight;
              that.loading = true;
              if (scrollHeight == scrollTop +innerHeight && !that.isRepeat) {
                  //滑动到底部

                  that.isRepeat = true;
                  //查询金币夺宝活动列表信息
                  var params = {
                    //pin:that.pin,
                    pageNum:that.nextPage,
                  };
                  if(that.isRepeat){
                    queryExchangeGoods(params).then(res => {
                      that.isRepeat = false;
                      that.nextPage = res.resultData.data.nextPage;
                      //that.snatchList = res.resultData.data.data;
                      that.loadMore(that.exchangeGoodsList,res.resultData.data.data)
                      that.loading = false;
                      if(that.nextPage == res.resultData.data.pageNum){
                        //全部加载完成
                        that.loadComplete = true;
                        document.removeEventListener('scroll',scrollEvent,false);
                      }
                    })
                  }
                }
              }
          },
          loadMore(target,data){
            for (var i=0; i < data.length; i++) {
              target.push( data[i] );
            }
          },
          changeTitleColor(){
            //var jrBridge = jsBridgeV3.onReady();
            //window.jrBridge = window.jrBridge || jsBridgeV3.onReady();
            window.jrBridge.then(function (res) {
              this.jsToGetResp(function(d){
              },{"type":3,"colorArr":["#1c1c1e","#1c1c1e"]});
            });
          },
          ulWidth(){
            let liList = this.$refs.rightWrapper
            let itemGroup = liList.getElementsByTagName("ul");
            let item = itemGroup[0].getElementsByTagName("li");
            itemGroup[0].style.width = 0.8 * item.length +"rem";
          },
          jumpWeb(url){
            //window.jrBridge = window.jrBridge || jsBridgeV3.onReady();
            if (getAppType() == 'jrApp') {
              window.jrBridge.then(function (res) {
                res.jsOpenWeb({
                  jumpUrl: url,
                  jumpType:8,                  //登陆类型（当是h5连接地址时候，这个值最好选择 用 8）
                  productId: '',  //商品详情页id,非详情页传空值
                  isclose: false    //是否关闭m页，true关，false不关
                });
              });
            }else{
              window.location.href = url;
            }
          },
          takeBackLayer(){
            setTimeout(() => {
              this.blackUpTimeout = true;
            },3000)
          },
          showBlackUpLayer(){
            var that = this;
            this.$refs.BlackUpLayer.showModel();
            this.blackUpOption = {
              btnSubmitFunction:function(){
                ActivateBlack().then((res) => {
                  let result = JSON.parse(res.resultData);
                  console.log(result);
                  if(result.success){
                    //激活成功
                    window.location.reload();
                  }else{
                    //失败
                    that.showToast('很抱歉，激活失败')
                  }
                })
              }
            }
          },
          showToast(msg){
            this.$refs.myTip.showModel();
            this.myTipOption = {
              msg: msg,
            }
          },
          hideShare(){
            //H5页面隐藏新版分享
            //window.jrBridge = window.jrBridge || jsBridgeV3.onReady();
            window.jrBridge.then(function (res) {
              res.setNaviBar({
                "version":100,
                "title":document.title,
                "moreItem":true,
                "hideTools":true
              });
            });
          },
          changeTitleColorBlack(){
            //如果是黑金卡片，改变title 的颜色
            //window.jrBridge = window.jrBridge || jsBridgeV3.onReady();
            window.jrBridge.then(function (res) {
              res.jsToGetResp(function(d){
              },{"type":3,"colorArr":["#000000","#000000"]});
            });
          }
        }
    }
</script>
