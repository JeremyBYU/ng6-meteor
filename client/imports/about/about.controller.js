import Orders from '../../../shared/collections'
// import { Component, View, Inject, State } from 'angular2-now'

class AboutController {
  constructor ($scope, $reactive) {
    'ngInject' // Have to add this silly string so ng-annotate works with es6 code and webpack http://stackoverflow.com/questions/33506235/webpack-angular-and-ng-annotate-loader-having-troubles-with-annotating-angula
    $reactive(this).attach($scope) //  Reactive Support for Meteor
    this.name = 'about'  // Name of the component
    $scope.helpers({  // Reactive helper that access data from server
      orders: () => {
        return Orders.find({})
      }
    })
  }
}

export default AboutController
