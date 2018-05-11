import axios from 'axios';

var domain = "//vip.jr.jd.com";
//var domain = "//btcp.jd.com";

axios.defaults.withCredentials = true;

/**
 * 1、用户身份查询接口
 */
export const getUserId = (params) => axios.get(domain+'/newMemberCenter/user/getUserIdentity',{
    params:params
  })
  .then(function(response) {
    return response.data
  });

/**
 * 2、校园用户身份查询接口
 */
export const getUserCampusId = (params) => axios.get(domain+'/newMemberCenter/user/getUserCampusIdentity',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 3、用户信息查询接口
 */
export const getUserInfo = (params) => axios.get(domain+'/newMemberCenter/user/getUserInfo',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 4、金币数量查询接口
 */
export const getGoldCoinCount = (params) => axios.get(domain+'/newMemberCenter/getGoldCoinCount',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 5、钢镚数量查询接口
 */
export const getGBCount = (params) => axios.get(domain+'/newMemberCenter/getGBCount',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 6、卡券数量查询接口
 */
export const getCouponCount = (params) => axios.get(domain+'/newMemberCenter/getCouponCount',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 7、UP指数查询接口
 */
export const queryMemberGradeValue = (params) => axios.get(domain+'/newMemberCenter/queryMemberGradeValue',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 8、会员权益PM查询接口
 */
export const getMemberRightsPM = (params) => axios.get(domain+'/newMemberCenter/getMemberRightsPM',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 9、会员头部广告位PM查询接口
 */
export const getMemberHeadADPM = (params) => axios.get(domain+'/newMemberCenter/getMemberHeadADPM',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 10、校园精品广告位PM查询接口
 */
export const getCampusADPM = (params) => axios.get(domain+'/newMemberCenter/getCampusADPM',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 11、会员优选广告位PM查询接口
 */
export const getMemberPreferencePM = (params) => axios.get(domain+'/newMemberCenter/getMemberPreferencePM',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 12、专属UP计划广告位查询接口
 */
export const getExclusiveUpPlanPM = (params) => axios.get(domain+'/newMemberCenter/getExclusiveUpPlanPM',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 13.1查询任务列表
 */
export const queryMission = (params) => axios.get(domain+'/newMemberCenter/mission/queryMission',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 13.2查询任务详情
 */
export const queryMissionDetail = (params) => axios.get(domain+'/newMemberCenter/mission/queryMissionDetail',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 13.3接受任务
 */
export const receiveMission = (params) => axios.get(domain+'/newMemberCenter/mission/receiveMission',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 13.4领取任务奖励
 */
export const rewardMission = (params) => axios.get(domain+'/newMemberCenter/mission/rewardMission',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 14.1 查询金币夺宝活动列表信息
 */
export const queryActivityList = (params) => axios.get(domain+'/newMemberCenter/queryActivityList',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 14.2 查询金币夺宝活动详情信息
 */
export const queryActivityDetail = (params) => axios.get(domain+'/newMemberCenter/queryActivityDetail',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 14.3 用户下单前弹窗接口请求地址
 */
export const queryBasicInfoPreOrder = (params) => axios.get(domain+'/newMemberCenter/activity/queryBasicInfoPreOrder',{
  params:params
}).then(function(response) {
  return response.data
});


/**
 * 14.4 新增或追加金币夺宝接口请求地址
 */
export const createOrRebuyOrder = (params) => axios.get(domain+'/newMemberCenter/activity/createOrRebuyOrder',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 15.1 可用兑换商品列表
 */
export const queryExchangeGoods = (params) => axios.get(domain+'/newMemberCenter/queryExchangeGoods',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 15.2 查询商品详情
 */
export const queryExchangeGoodDetail = (params) => axios.get(domain+'/newMemberCenter/queryExchangeGoodDetail',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 15.3 验证商品是否可兑换
 */
export const checkExchangeGood = (params) => axios.get(domain+'/newMemberCenter/checkExchangeGood',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 15.4 商品兑换
 */
export const exchange = (params) => axios.get(domain+'/newMemberCenter/exchange',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 16 查询铂金返现未领取接口
 */
export const queryPlatinumRebateRightsInfo = (params) => axios.get(domain+'/newMemberCenter/queryPlatinumRebateRightsInfo',{
  params:params
}).then(function(response) {
  return response.data
});

/**
 * 17 激活黑金身份
 */
export const ActivateBlack = (params) => axios.get('//vip.jr.jd.com/jsonp/jsonpActivateBlack',{
  params:params
}).then(function(response) {
  return response.data
});

