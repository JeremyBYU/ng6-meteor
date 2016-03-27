# webpack:angular by [The Reactive Stack](https://thereactivestack.com)
Meteor package to integrate Angular with [Webpack](https://github.com/thereactivestack/meteor-webpack)

Uses babel ES2015, ng-annotate, and html import.


Example Componet JS File:
```
import template from './home.html.import' //  Notice you are importing html file
import controller from './home.controller' // ES6 Class Controller
import './home.styl'

let homeComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
}

export default homeComponent

```
