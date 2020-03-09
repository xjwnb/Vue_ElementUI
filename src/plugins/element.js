import {
  Button,
  Row,
  Col,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Container,
  Header,
  Aside,
  Main,
  Select,
  Option,
  Input,
  Pagination,
  Progress,
  Notification,
  ColorPicker
} from 'element-ui'

const element = {
  install: Vue => {
    Vue.use(Button)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Menu)
    Vue.use(MenuItem)
    Vue.use(MenuItemGroup)
    Vue.use(Submenu)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Select)
    Vue.use(Option)
    Vue.use(Input)
    Vue.use(Pagination)
    Vue.use(Progress)
    Vue.use(Notification)
    Vue.use(ColorPicker)
  }
}

export default element
