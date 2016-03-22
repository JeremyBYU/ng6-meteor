# NG6 meteor

A package to use angular 1.5 with meteor and webpack. Uses the popular [NG6 repo](https://github.com/AngularClass/NG6-starter) for architectural design of angular modules and components.

### Install instructions

1. Git Clone
2. npm install
3. meteor

### Notes
Installs angular from npm as well and angular-meteor modules

Uses the `webpack:webpack` package by benoit for integration of webpack with meteor. Since there is no wepback:angular package I made a custom webpack.conf.js package to handle webpack loaders.

#### Caveats

* HTML templates are imported as static html but their files must be named FILE.html.import
* Using meteors `static-html` package to load the basic `head` and `body` tags for the base html file
