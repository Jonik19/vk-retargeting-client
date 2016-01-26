import angular from 'angular';

/**
 * Directives
 */

import ngMessages from 'angular-messages';
import ErrorMessageDirective from './directives/error-message';

/**
 * Definition
 */

export default angular.module('app.errors', [ngMessages])
  .directive('errorMessage', ErrorMessageDirective)
  .name;