import angular from 'angular'
import Home from './home/home'
import About from './about/about'
import Orders from './orders/orders'

let componentModule = angular.module('app.components', [
  Home.name,
  About.name,
  Orders.name
])

export default componentModule
