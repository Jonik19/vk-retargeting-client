import angular from 'angular';

/**
 * Services
 */

import Api from './services/api';

/**
 * Definition
 */

export default angular.module('app.common', [])
  .service('Api', Api)
  .name;