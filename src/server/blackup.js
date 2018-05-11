import jsonp from '../config/jsonp'

export const options = {
  param: 'jsonpCallback',
  //prefix: 'jp'
}

export function ActivateBlack() {
  const url = '//vip.jr.jd.com/jsonp/jsonp/jsonpActivateBlack'

  var data = {};

  return jsonp(url,data, options)
}
