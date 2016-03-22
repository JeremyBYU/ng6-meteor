import angular from 'angular'
import './app/app.js'
//  Bootstrap Angular to Document Body
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app'])
})
