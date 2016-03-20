import angular from 'angular'
import 'angular-meteor'

import aboutComponent from './imports/about/about'

let app = angular.module('app', ['angular-meteor'])
app.controller('appController', function ($scope) {
  $scope.greeting = 'Welcome!'
})
app.component('about', aboutComponent)

//  Bootstrap Angular to Document Body
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app'])
})
