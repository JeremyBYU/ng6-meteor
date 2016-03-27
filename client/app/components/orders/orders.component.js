import template from './orders.html.import'
import controller from './orders.controller'
import './orders.styl'

let ordersComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default ordersComponent
