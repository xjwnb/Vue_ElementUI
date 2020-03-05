import Mock from 'mockjs'
import { menuList } from './data/data'

const Data = Mock.mock('/getData', menuList)

export {
  Data
}