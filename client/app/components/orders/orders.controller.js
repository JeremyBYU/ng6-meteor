import Orders from '../../../../shared/collections'

class OrdersController {

  constructor ($scope, $reactive) {
    this.name = 'orders'
    $reactive(this).attach($scope)

    this.helpers({
      orders: () => {
        return Orders.find({})
      }
    })
  }
}
OrdersController.$inject = ['$scope', '$reactive']

export default OrdersController
