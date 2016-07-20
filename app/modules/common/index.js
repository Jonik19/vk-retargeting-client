import angular from 'angular';

/**
 * Resources
 */

import SearchResource from './resources/search_resource';
import ResponseHandler from './services/response_handler';

/**
 * Definition
 */

export default angular.module('app.common', [])
  .service('SearchResource', SearchResource)
  .service('ResponseHandler', ResponseHandler)
  .name;