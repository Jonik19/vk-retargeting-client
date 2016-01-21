import bootstrap from 'bootstrap/dist/css/bootstrap.css';

/**
 * Assets
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resource from 'angular-resource';

/**
 * Config middlewares
 */

import routes from './config/routes';
import interceptors from './config/interceptors';
import http from './config/http';
import run from './config/run';

/**
 * Main config file
 */

import config from './config/index';

/**
 * Custom modules
 */

import home from './modules/home';
import authentication from './modules/authentication';
import common from './modules/common';
import admin from './modules/admin';

/**
 * Definition
 */

angular.module('app', [resource, uiRouter, home, authentication, common, admin])
  .constant('config', config)

  .config(interceptors)
  .config(http)
  .config(routes)

  .run(run);