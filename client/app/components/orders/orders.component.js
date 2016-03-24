import template from './oreders.html.import'
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
