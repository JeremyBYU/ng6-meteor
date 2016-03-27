import angular from 'angular'
import uiRouter from 'angular-ui-router'
import Common from './common/common'
import Components from './components/components'
import AppComponent from './app.component'
import uiBootstrap from 'angular-ui-bootstrap'
console.log()

// Angular Meteor Integration, see angular-meteor.com for documentation
import 'angular-meteor'

angular.module('app', [
  uiBootstrap,
  uiRouter,
  Common.name,
  Components.name,
  'angular-meteor'
])
  .config(($locationProvider) => {
    'ngInject'
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!')
  })

  .component('app', AppComponent)
