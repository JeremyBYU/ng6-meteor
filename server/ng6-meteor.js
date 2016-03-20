import Orders from '../shared/collections'
var s1 = 1
console.log(s1)

Meteor.startup(() => {
  const data = [
    {
      name: 'Meteor Principles'
    },
    {
      name: 'Languages'
    },
    {
      name: 'Favorite Scientists'
    }
  ]
  if (Orders.find().count() === 0) {
    data.forEach((name) => {
      Orders.insert(name)
    })
  }
})
