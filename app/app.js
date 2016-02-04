import bootstrap from 'bootstrap/dist/css/bootstrap.css';

/**
 * Assets
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resource from 'angular-resource';
import lodash from 'lodash';
import UIBootstrap from 'angular-ui-bootstrap';

/**
 * Config middlewares
 */

import routes from './config/routes';
import interceptors from './config/interceptors';
import http from './config/http';
import run from './config/run';
import html5mode from './config/html5mode';

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
import errors from './modules/errors';

/**
 * Definition
 */

angular.module('app', [resource, uiRouter, home, authentication, common, admin, errors, UIBootstrap])
  .constant('config', config)

  .config(interceptors)
  .config(http)
  .config(html5mode)
  .config(routes)

  .run(run);