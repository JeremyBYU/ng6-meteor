import template from './home.html.import'
import controller from './home.controller'
import './home.css'

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default homeComponent
