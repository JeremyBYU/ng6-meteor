import template from './about.html.import'
import controller from './about.controller'
import './about.css'

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default aboutComponent
