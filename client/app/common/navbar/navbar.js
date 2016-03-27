import angular from 'angular'
import uiRouter from 'angular-ui-router'
import navbarComponent from './navbar.component'

//  import uiBootstrap from 'angular-ui-bootstrap'
let navbarModule = angular.module('navbar', [
  uiRouter
])

  .component('navbar', navbarComponent)

export default navbarModule
