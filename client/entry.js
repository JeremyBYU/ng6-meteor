import angular from 'angular'
import './app/app.js'

// Import CSS Files
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//  Bootstrap Angular to Document Body
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app'])
})
