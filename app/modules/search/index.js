import angular from 'angular';

/**
 * Controllers
 */

import SearchController from './controllers/search_controller';

/**
 * Definition
 */

export default angular.module('app.search', [])

  .controller('SearchController', SearchController)
  .name;
