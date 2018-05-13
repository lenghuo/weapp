import moment from 'moment'
import 'moment/locale/zh-cn'

const normalTime = (date) => {
  moment.locale('zh-cn')
  return moment(date).format('YYYY年 MMM Do H:mm:ss')
}
export default {
  normalTime
}
