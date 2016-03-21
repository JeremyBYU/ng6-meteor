
import controller from './about.controller'
// Very silly little hack to import an html template.
// Dont really like it, because I have to compile the jade code on the client
import template from './about.html.import'

let aboutComponent = {
  restrict: 'E',
  bindings: {},
  template: template,
  controller,
  controllerAs: 'vm'
}

export default aboutComponent
