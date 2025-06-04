// 登录接口
export interface IApiLogin {
  password: string
  userName: string
}
// 获取报警分类统计
export interface IApigetAlarmTypeCount {
  processStatus: string
}
// 通用卡片数据查询接口
export interface IApigetAlarmTypeCount {
  spaceId: string
  systemCode?: string
  typeCode?: string
}