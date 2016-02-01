import angular from 'angular';

/**
 * Directives
 */

import ngMessages from 'angular-messages';
import FormErrorDirective from './directives/form-error';

/**
 * Definition
 */

export default angular.module('app.errors', [ngMessages])
  .directive('formError', FormErrorDirective)
  .name;