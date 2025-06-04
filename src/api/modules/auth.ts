import http from '../http';
import {IApiLogin} from '../type/index.ts';

enum Api {
  login = 'api/account/loginapi', // 用户登录
  commoncard = 'api/bi/DeviceStatusOther', // 智能空调、新风系统、通风接口、排风接口、实验室余风接口
  devicesituation = 'api/bim/getCardData', // 设备态势接口
  floorlist = 'api/iot/devicetype/floorlist', // 楼层列表
  floorlisttodevice = 'api/iot/deviceType/list', // 对应楼层设备列表
  getweather = 'openapi/system/getLocalWeather', // 天气接口
  warntype = 'api/digital/getAlarmTypeCount', // 报警分类统计
  warnlist = 'api/digital/getAlarmList', // 分类对应报警信息
}

export default {
  login(data:IApiLogin) {
    return http.post(Api.login, data);
  },
  commoncard(data) {
    return http.post(Api.commoncard, data);
  },
  devicesituation(data) {
    return http.post(Api.devicesituation, data);
  },
  floorlist(data) {
    return http.post(Api.floorlist, data);
  },
  floorlisttodevice(data) {
    return http.post(Api.floorlisttodevice, data);
  },
  getweather(data) {
    return http.post(Api.getweather, data);
  },
  warntype(data) {
    return http.post(Api.warntype, data);
  },
  warnlist(data) {
    return http.post(Api.warnlist, data);
  },
};