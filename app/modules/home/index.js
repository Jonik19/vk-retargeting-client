import angular from 'angular';

/**
 * Controllers
 */

import HomeController from './controllers/home_controller';

/**
 * Definition
 */

export default angular.module('app.home', [])
  .controller('HomeController', HomeController)
  .name;
