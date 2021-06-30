// 按需引入组件
import {
  Button,
  Cell, 
  CellGroup,
  Swipe, 
  SwipeItem,
  Field,
  Form,
  Checkbox, 
  CheckboxGroup
} from 'vant'

const vantComponents = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Cell)
    Vue.use(CellGroup)
    Vue.use(Swipe)
    Vue.use(SwipeItem)
    Vue.use(Field)
    Vue.use(Form)
    Vue.use(Checkbox)
    Vue.use(CheckboxGroup)
  }
}
export default vantComponents