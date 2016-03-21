// I guess I have to do this myself to get the ng-annotate plugin and babel to play together
module.exports = {
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'ng-annotate!babel', exclude: /\.meteor|node_modules/ },
      { test: /\.html\.import$/, loader: 'html' }
    ]
  }
}
