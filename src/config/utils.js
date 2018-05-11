/**
 * Created by dingliwen on 2018/2/7.
 */
export const getCookie = (name) => {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg))
    return (arr[2]);
  else
    return null;
};
export const getUrlString = (name) => {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};
export const getSystem = () => {
  var ua = navigator.userAgent.toLowerCase();
  var isIos = ua.indexOf('ipad') > -1 || ua.indexOf('iphone') > -1 || false;
  return isIos ? "ios" : "android";
};

export const isApp = () => {
  var ua = navigator.userAgent.toLowerCase();
  var isApp = ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false;
  return isApp;
};

export const getAppType = () => {
  var ua = navigator.userAgent.toLowerCase();
  var browser = "default";
  var apptype = {
    mqq: ua.indexOf('_sq_') > -1 || false,
    wx: ua.indexOf('micromessenger') > -1 || false,
    jdApp: ua.indexOf('jdapp') > -1 || false,
    jrApp: ua.indexOf('jdjr') > -1 || ua.indexOf('android-async-http') > -1 || false,
    wyApp: ua.indexOf('walletclient') > -1 || false,
    jdStock: ua.indexOf('jdstock') > -1 || false
  }
  for (var i in apptype) {
    if (apptype[i]) {
      browser = i;
    }
  }
  return browser;
};

