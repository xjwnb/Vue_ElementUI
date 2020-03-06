import Mock from 'mockjs'
import { menuList, buttonType } from './data/data'

const Data = Mock.mock('/getData', menuList)
const btnType = Mock.mock('/getButtonType', buttonType)

export {
  Data,
  btnType
}