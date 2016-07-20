import angular from 'angular';

/**
 * Controllers
 */

import SearchController from './controllers/search_controller';

/**
 * Components
 */

import components from './components';

/**
 * Definition
 */

export default angular.module('app.search', [components])

  .controller('SearchController', SearchController)
  .name;
