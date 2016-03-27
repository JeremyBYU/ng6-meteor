import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ordersComponent from './orders.component'

let ordersModule = angular.module('orders', [
  uiRouter
])

  .config(($stateProvider) => {
    'ngInject'
    $stateProvider
      .state('orders', {
        url: '/orders',
        template: '<orders></orders>'
      })
  })
  .component('orders', ordersComponent)

export default ordersModule
