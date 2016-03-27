import template from './orders.html.import'
import controller from './orders.controller'
import './orders.css'

let ordersComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default ordersComponent
