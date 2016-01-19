import angular from 'angular';
import HomeController from './controllers/home_controller';

export default angular.module('app.home', [])
  .controller('HomeController', HomeController)
  .name;
